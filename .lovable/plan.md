# Corrigir menu sanduíche fora de vista no mobile

## O problema (confirmado)
No mobile (384px), o botão do menu está no lugar correto dentro do cabeçalho (termina a 368px). O que acontece é que a **página inteira tem largura maior que o ecrã** (437px de conteúdo em 384px de ecrã). Isso permite arrastar a página para o lado; como o cabeçalho é fixo e tem apenas a largura do ecrã, ao deslizar para a direita o ícone do menu sai da vista.

A largura extra vem de dois elementos decorativos do hero na página inicial:
- a imagem de fundo "neural" animada, que é ampliada ligeiramente pela animação (chega a -25px / 391px);
- um círculo de brilho turquesa de 600x600px centrado (de -108px a 492px).

## O que vou fazer
1. Garantir que o hero recorta os seus próprios elementos decorativos (`overflow-hidden`), para que a imagem animada e o círculo de brilho deixem de gerar largura extra.
2. Adicionar uma proteção global contra deslizamento horizontal no layout raiz (`overflow-x-hidden` no contentor principal), evitando que qualquer decoração futura volte a esconder o cabeçalho.
3. Manter o visual: a imagem animada e o glow continuam iguais, apenas deixam de "transbordar" para fora do ecrã.

## Verificação
Testar em 384px e 768px: confirmar que a largura de conteúdo passa a ser igual à do ecrã, que não é possível arrastar a página lateralmente e que o menu sanduíche fica sempre visível e abre corretamente.

## Notas técnicas
- Ficheiros: `src/routes/index.tsx` (secção hero) e `src/routes/__root.tsx` (contentor do layout).
- Nenhuma alteração de lógica, dados ou conteúdo — apenas layout/apresentação.
