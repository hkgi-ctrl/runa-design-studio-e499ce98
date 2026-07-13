
# Internacionalização do site (PT · ES · EN)

Sim, é totalmente possível. Proponho adicionar suporte multilíngue com **Português (padrão)**, **Espanhol** e **Inglês**, com um seletor de idioma no cabeçalho.

## O que vai ser feito

1. **Biblioteca de tradução**
   - Instalar `i18next` + `react-i18next` (padrão da indústria, leve, sem dependência de backend).
   - Configurar em `src/lib/i18n.ts` com deteção automática do idioma do navegador e persistência da escolha em `localStorage`.
   - Inicializar no `__root.tsx` para funcionar em todas as rotas.

2. **Ficheiros de tradução**
   - Criar `src/locales/pt.json`, `src/locales/es.json`, `src/locales/en.json`.
   - Extrair todos os textos visíveis das páginas (Home, Sobre, Serviços, Portfólio, Processo, Planos, FAQ, Blog, Contacto), Navigation, Footer, CTAs e SectionHeaders para chaves de tradução.
   - PT permanece exatamente como está hoje; ES e EN são traduções fiéis do conteúdo atual.

3. **Seletor de idioma no cabeçalho**
   - Adicionar em `src/components/navigation.tsx` um dropdown compacto (globo + código do idioma: PT / ES / EN) à direita, antes do botão "Iniciar projeto".
   - Versão mobile: incluir o seletor dentro do menu lateral.
   - Estilo alinhado ao design atual (turquesa/silver, glass).

4. **SEO por idioma**
   - `<html lang="…">` no `__root.tsx` passa a refletir o idioma ativo.
   - `title` e `description` de cada rota traduzidos (via `head()` lendo do i18next).
   - Adicionar `<meta property="og:locale">` conforme o idioma.

5. **Datas e textos dinâmicos**
   - Ajustar formatações de data (ex.: no Blog) para respeitar o locale ativo.

## O que **não** muda
- Layout, cores, tipografia, componentes visuais e rotas — tudo permanece igual.
- URLs continuam as mesmas (sem prefixo `/en`, `/es`); a escolha fica guardada no navegador. Se preferir URLs por idioma (ex.: `/en/servicos`), diga-me e eu revejo o plano.

## Detalhes técnicos

- **Stack**: `i18next`, `react-i18next`, `i18next-browser-languagedetector`.
- **Padrão de uso nos componentes**: `const { t } = useTranslation(); <h1>{t('home.hero.title')}</h1>`.
- **Fallback**: PT sempre como fallback quando faltar uma chave.
- **SSR-safe**: inicialização síncrona com recursos importados estaticamente (sem fetch em runtime), compatível com o Worker do TanStack Start.
- **Estrutura das chaves**: agrupadas por página/componente (`nav.*`, `footer.*`, `home.*`, `servicos.*`, etc.) para manutenção fácil.

## Pergunta rápida antes de implementar
Prefere manter uma **única URL por página** (idioma guardado no navegador — mais simples) ou quer **URLs separadas por idioma** tipo `/en/services`, `/es/servicios` (melhor para SEO internacional, mas requer duplicar as rotas)? Se não indicar, sigo com a opção mais simples (URL única).
