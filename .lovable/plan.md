# Criar página dedicada "Quem ajudamos" e simplificar a home

## Objetivo
Transformar a secção "Quem ajudamos a crescer" numa página própria acessível pelo menu, mantendo na homepage apenas uma versão simplificada (teaser) que convide à página completa.

## Alterações propostas

1. **Criar nova rota `/quem-ajudamos`**
   - Adicionar `src/routes/quem-ajudamos.tsx` com o layout completo atual: título, subtítulo, três cartões de público-alvo com fotos, faixa de benefícios e CTA.
   - Reutilizar o componente `AudienceSection` ou extrair a versão completa para esta página.

2. **Simplificar a secção na homepage**
   - Em `src/routes/index.tsx`, substituir o `AudienceSection` atual por uma versão resumida.
   - Versão sugerida para a home: título, subtítulo curto e um CTA "Conhecer os públicos que ajudamos" ou "Saber mais" que aponte para `/quem-ajudamos`.
   - Manter o mesmo estilo visual (cores, tipografia, espaçamento) para não quebrar a identidade.

3. **Atualizar a navegação**
   - Em `src/components/navigation.tsx`, adicionar `{ to: "/quem-ajudamos", label: "Quem ajudamos" }` ao array `navLinks`, entre "Serviços" e "Portfólio".
   - Remover qualquer lógica de scroll para âncora, uma vez que passa a ser uma página independente.

4. **Traduções**
   - Em `src/lib/translations.ts`, adicionar as novas chaves necessárias:
     - "Quem ajudamos" (menu)
     - Textos do teaser da homepage (título, subtítulo, CTA)
     - Garantir que os textos já existentes da secção completa continuam cobertos em PT/ES/EN.

5. **SEO da nova página**
   - Adicionar `head()` em `src/routes/quem-ajudamos.tsx` com título, descrição, og:title e og:description específicos para PT.

6. **Ajustes de componente**
   - Se necessário, dividir `AudienceSection` em:
     - `AudienceSectionCompact` (homepage)
     - `AudienceSectionFull` (página `/quem-ajudamos`)
   - Alternativa: manter `AudienceSection` como a versão completa e criar `AudienceTeaser` para a home.

7. **Validação**
   - Confirmar que o menu desktop e mobile mostram o novo item.
   - Verificar que a homepage ficou mais leve e a página `/quem-ajudamos` apresenta todo o conteúdo detalhado.
   - Testar as traduções nos três idiomas.
