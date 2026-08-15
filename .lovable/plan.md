# Destacar os ícones de redes sociais

## Objetivo
Deixar os ícones sociais (Instagram, Behance, LinkedIn, WhatsApp, Facebook) do rodapé mais visíveis e impactantes, sem perder a identidade premium dark da RUNA.

## Mudanças propostas

### 1. Aumentar contraste e tamanho
- Aumentar ligeiramente o tamanho dos ícones (de 16px para 20px) e dos círculos (de 36px para 40px).
- Tornar o fundo dos cícones mais claro/opaco para destacar do fundo escuro do rodapé.
- Usar cor de ícone com mais luminosidade no estado normal.

### 2. Adicionar destaque no hover/focus
- No hover, aplicar glow turquesa (`--turquoise`) e aumentar a opacidade do fundo.
- Manter transições suaves.

### 3. Manter o Facebook desativado
- Preservar opacidade reduzida e cursor not-allowed no Facebook.
- Ajustar proporção para manter consistência visual com os demais ícones.

### 4. Escopo
- Alterar apenas `src/components/footer.tsx` e `src/routes/contacto.tsx` (ícones sociais).
- Não alterar imagens, textos, links ou estrutura de outras seções.

## Validação
- Build do projeto passando.
- Verificar visualmente no preview que os ícones ficam mais perceptíveis no desktop e mobile.
