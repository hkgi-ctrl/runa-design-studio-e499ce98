# Novo símbolo "R" na página inicial

## O que muda

Na secção principal (hero) da homepage:

1. Remover o símbolo "R" atual (`runa-mark-transparent`).
2. Remover os efeitos decorativos atrás dele: o círculo com brilho pulsante (`animate-pulse-glow`) e o halo radial turquesa.
3. Colocar no mesmo lugar o novo "R" da imagem enviada (metálico prateado + turquesa), centrado, com a margem superior existente mantida.
4. Garantir fundo transparente: a imagem enviada vem com fundo branco, por isso será processada para remover o branco (incluindo o esbatimento das bordas) antes de ser publicada.
5. Ajustar o tamanho para o layout: o novo "R" é vertical e mais estreito, por isso passa a ter altura fixa com largura automática (aprox. 190px em desktop / 150px em mobile), em vez do quadrado de 237px usado pelo "R" anterior.

O gradiente de fundo geral da secção e o restante conteúdo (título, texto, botões) ficam iguais.

## Detalhes técnicos

- Remover o fundo branco da imagem enviada e criar um novo asset CDN (`lovable-assets create`), mantendo transparência real em PNG.
- Editar `src/routes/index.tsx` (`HeroSection`): trocar o import do asset, remover as duas `div` de brilho/halo e a `div` quadrada de 237px, e usar um contentor simples com a nova imagem responsiva.
- Manter um `drop-shadow` suave para dar profundidade, sem o brilho pulsante.
- Verificação visual com captura da homepage em desktop e mobile.
