# Guardar 3 imagens como assets do projeto

## Objetivo
Registar as 3 imagens enviadas como assets CDN do projeto, com os nomes exatos pedidos, para ficarem disponíveis nos próximos prompts.

## Assets a criar

| Ficheiro enviado | Nome do asset (exato) | Pointer no projeto |
|---|---|---|
| fundo_neural.webp (rede neural turquesa) | `fundo_neural.webp` | `src/assets/fundo_neural.webp.asset.json` |
| fundo_textura.webp (textura cromada líquida) | `fundo_textura.webp` | `src/assets/fundo_textura.webp.asset.json` |
| R_Vidro.webp (R de vidro com brilho turquesa) | `R_Vidro.webp` | `src/assets/R_Vidro.webp.asset.json` |

## Passos técnicos
1. Para cada imagem, executar `lovable-assets create --file /mnt/user-uploads/<nome> --filename <nome>` e gravar a saída JSON no respetivo ficheiro `.asset.json` em `src/assets/`.
2. Confirmar que os 3 pointers foram criados corretamente (URL CDN válido em cada um).

## Como serão usados depois
Nos próximos prompts, basta referir o nome da imagem (ex.: "usa o fundo_neural") e eu importo o pointer correspondente:
```ts
import fundoNeural from "@/assets/fundo_neural.webp.asset.json";
// fundoNeural.url → URL CDN da imagem
```

## Notas
- Nenhuma página ou componente será alterado neste passo — apenas o registo dos assets.
- As imagens ficam servidas pela CDN com cache agressivo (carregamento rápido).