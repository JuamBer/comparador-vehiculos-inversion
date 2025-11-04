# Comparador de Vehículos de Inversión

A simple Astro landing page for comparing investment vehicles. This project is built with Astro and Tailwind CSS, deployed automatically to GitHub Pages.

🌐 **Live Demo**: [https://JuamBer.github.io/comparador-vehiculos-inversion](https://JuamBer.github.io/comparador-vehiculos-inversion)

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/
├── src/
│   └── pages/
│       └── index.astro
├── astro.config.mjs         # Astro configuration
├── package.json
├── tailwind.config.mjs      # Tailwind CSS configuration
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is triggered on every push to the `main` branch.

### Manual Deployment Setup

If you're setting this up for the first time:

1. **Push your code to GitHub** (make sure it's in the `main` branch)
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"
3. **The deployment will trigger automatically** when you push to the main branch

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- The site is configured to deploy to `https://JuamBer.github.io/comparador-vehiculos-inversion`
- Static assets should be placed in the `public/` directory
- The project uses Astro's static site generation for optimal performance on GitHub Pages
  | `npm run preview` | Preview your build locally, before deploying |
  | `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
  | `npm run astro -- --help` | Get help using the Astro CLI |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
