# Corrigir o seletor de idiomas

## O que verifiquei agora

- Nenhum ficheiro do projeto chama `t.changeLanguage`. O `LanguageSwitcher` usa corretamente `i18n.changeLanguage(code)` obtido de `useTranslation()`, e o snapshot atual de erros de runtime já não mostra `t.changeLanguage is not a function` — esse erro não é reproduzível no estado atual do código.
- Num teste real da página apareceu um problema concreto: o cabeçalho arranca já em **EN** e o React lança erro de hidratação ("server rendered text didn't match the client": servidor "Sobre" vs cliente "About"). O servidor renderiza sempre `pt`, mas o detetor de idioma do browser escolhe outro idioma no cliente, o que regenera a árvore e pode deixar o seletor num estado inconsistente.

## O que vou fazer

1. **Confirmar a origem do erro reportado**: procurar em todo o projeto qualquer uso incorreto do objeto de tradução (por exemplo `t.changeLanguage` ou desestruturação errada de `useTranslation()`) e corrigir se existir; caso não exista, garantir que existe uma única instância i18n partilhada por todo o site.
2. **Eliminar o desencontro servidor/cliente**: o primeiro render passa a ser sempre em Português; a preferência guardada é aplicada só depois da hidratação. Assim o site nunca mistura idiomas nem quebra a árvore React.
3. **Persistência**: manter a escolha em `localStorage` (`runa-lang`) e atualizar o atributo `lang` do `<html>` a cada mudança.
4. **Idioma inicial**: Português por defeito; se houver escolha guardada, é essa que se aplica. A deteção automática do browser deixa de abrir o site em inglês sem o utilizador pedir.
5. **Validação em todas as páginas**: testar PT/ES/EN em `/`, `/sobre`, `/servicos`, `/portfolio`, `/processo`, `/faq` e `/contacto`, confirmando que o conteúdo muda, que a escolha persiste ao navegar e recarregar, e que não há erros na consola.

## Notas técnicas

- `src/lib/i18n.ts`: inicialização determinística com `lng: "pt"`; leitura de `localStorage` movida para depois da hidratação.
- Um efeito no root (ou pequeno hook) aplica a linguagem persistida com `i18n.changeLanguage` após montar.
- `src/components/language-switcher.tsx`: mantém `i18n.changeLanguage`, com escrita explícita em `localStorage` e atualização de `document.documentElement.lang`.
- Sem alterações aos dicionários de tradução existentes.