# Site RUNA

from docx import Document

from docx.shared import Pt

doc=Document()

doc.add_heading('Projeto do Site - RUNA Design',1)

p=doc.add_paragraph()

p.add_run('Branding base: ').bold=True

p.add_run('utilizar a identidade visual das imagens fornecidas (turquesa #31D6D0, azul petróleo #0E3444, prata #D9DDE3 e grafite #1A2230).\n')

doc.add_heading('Objetivo',2)

doc.add_paragraph('Criar um site premium, moderno, responsivo, com animações suaves e foco em conversão de clientes.')

doc.add_heading('Mapa do Site',2)

pages=[

"Home","Sobre","Serviços","Portfólio","Processo de Trabalho","Planos","FAQ","Blog","Contacto"]

for pg in pages:

    doc.add_heading(pg,3)

    doc.add_paragraph(f"Descrição completa da página {pg}, com hero, conteúdo, CTAs, animações, SEO e design consistente com a marca RUNA.")

doc.add_heading('Diretrizes Visuais',2)

doc.add_paragraph("""• Fundo predominantemente escuro

• Efeitos de vidro (glassmorphism) discretos

• Animações ao scroll

• Ícones minimalistas

• Tipografia moderna

• Muito espaço em branco

• Destaques em #31D6D0

• Aparência semelhante a agências premium internacionais.""")

doc.add_heading('Prompt Mestre para IA',2)

doc.add_paragraph("""Create a premium creative agency website for RUNA Design. Use the supplied branding. Dark luxurious interface, turquoise accents (#31D6D0), petroleum blue (#0E3444), silver (#D9DDE3), graphite (#1A2230). Responsive, SEO optimized, smooth animations, premium typography, portfolio, services, about, process, pricing, FAQ, blog and contact pages. High conversion, modern UI/UX, elegant microinteractions, glassmorphism, subtle gradients, fast loading, accessibility, sticky navigation, professional contact form and strong calls to action.""")

out="/mnt/data/Projeto_Site_RUNA_Design.docx"

doc.save(out)

print(out)

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://runa-design-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c41c8f0a-581b-4044-9c5a-01e128ea4b11).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
