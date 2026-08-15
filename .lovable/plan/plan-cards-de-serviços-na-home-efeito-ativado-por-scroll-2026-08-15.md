# Plan: Cards de Serviços na Home — efeito ativado por scroll

## Contexto atual
Na Home, a secção de Serviços usa `useScrollReveal` para revelar toda a grelha de cards de uma só vez (fade + desfoque). O destaque visual premium (borda turquesa, glow, elevação, brilho diagonal) só existe no estado `:hover` de `.bento-card`. Em mobile, o hover não existe nativamente e só aparece como um flash ao tocar/clicar, o que o usuário quer evitar.

## Objetivo
Fazer com que o efeito visual premium dos cards de Serviços seja ativado automaticamente ao rolar a página, mantendo a estrutura atual e o visual dos cards. No desktop, o hover continua como reforço adicional; no mobile, o efeito deve aparecer ao scroll sem exigir clique.

## Mudanças propostas

1. **Revelar cards individualmente ao scroll**
   - Substituir a revelação única da grelha por revelação individual de cada card.
   - Cada card ganha uma instância do `useScrollReveal` (ou classe `reveal` com delay escalonado) e anima quando cerca de 30% dele entrar na viewport.

2. **Aplicar estados premium via classe `visible`/`in-view`**
   - Adicionar CSS para que, quando o card estiver revelado, ele já apresente:
     - borda turquesa `rgba(0, 229, 255, 1)`;
     - sombra turquesa sutil (`box-shadow` do hover);
     - leve elevação (`translateY(-4px)`);
     - brilho diagonal já varrido (ou animado no momento da revelação).
   - Manter o `:hover` para desktop, com intensidade ligeiramente maior (por exemplo, elevação `-8px` vs `-4px` do scroll).

3. **Remover dependência de interação por clique/tap**
   - Garantir que os cards não tenham `onClick`/`onTap` e que o efeito não seja dispositivo por touch.
   - A grelha continua sem scroll horizontal; os cards empilham verticalmente no mobile.

4. **Preservar acessibilidade e performance**
   - Usar `IntersectionObserver` (`useScrollReveal` existente) para não depender de eventos de scroll pesados.
   - Aplicar `will-change` apenas durante a transição.
   - Manter lazy loading, `prefers-reduced-motion` respeitado.

## Escopo limitado
- Apenas a secção `ServicesSection` da Home (`src/routes/index.tsx`) e o CSS correspondente (`src/styles.css`) serão alterados.
- Nenhuma mudança de conteúdo, traduções, links ou outras secções.
- Não voltar a usar `framer-motion` para esta alteração, conforme feedback anterior.

## Verificação
- Abrir a Home no mobile e desktop.
- Scrollar até Serviços: cada card deve acender com borda turquesa, glow e leve elevação quando entrar na tela.
- Confirmar que não é necessário clicar/tocar para o efeito aparecer.
- Confirmar que o build passa sem erros.
