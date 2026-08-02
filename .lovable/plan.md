# Adicionar "Quem ajudamos" à navegação

## Objetivo
Adicionar um item no menu/header que leve diretamente à secção "Quem ajudamos a crescer" na página inicial, mantendo a consistência visual e a tradução em PT/ES/EN.

## Alterações propostas

1. **Marcar a secção como âncora**
   - Adicionar `id="quem-ajudamos"` ao `<section>` principal do `AudienceSection` (`src/components/audience-section.tsx`).

2. **Adicionar item de navegação**
   - Inserir `{ to: "/#quem-ajudamos", label: "Quem ajudamos" }` no array `navLinks` de `src/components/navigation.tsx`, posicionado após "Serviços" e antes de "Portfólio".

3. **Garantir scroll suave**
   - Ajustar o componente `Navigation` para que, ao clicar no link de âncora:
     - Se o utilizador estiver na homepage (`/`), execute scroll suave até ao elemento `#quem-ajudamos`.
     - Se estiver noutra página, navegue para `/#quem-ajudamos` e, após a transição, faça scroll até à secção.
   - Manter o comportamento normal dos restantes links de página.

4. **Traduções**
   - Adicionar a chave `"Quem ajudamos"` em `src/lib/translations.ts` para português, espanhol e inglês.

5. **Mobile**
   - O novo link deve aparecer automaticamente no menu mobile, uma vez que a lista `navLinks` é partilhada.

6. **Validação**
   - Verificar que o link funciona em desktop e mobile.
   - Confirmar que o scroll suave chega ao início da secção sem ficar escondido sob o header fixo.
