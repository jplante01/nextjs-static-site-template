# Next.js Static Site Generator Template

A minimalist, ready-to-use template for creating static websites using Next.js. This template provides a clean starting point for projects that need to be exported as static HTML/CSS/JS, perfect for deployment on any static hosting service.

## Technologies

- **Next.js** - React framework configured for static site generation
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting for identifying problematic patterns
- **Prettier** - Code formatting for consistent style

## Purpose

This template addresses the need for a simple, no-frills starting point for static websites built with modern tooling. It removes the complexity of server-side rendering and API routes, focusing solely on generating static assets that can be deployed anywhere.

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-static-site-template.git my-project
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage

### Development

Edit files in the `pages` directory to create new pages. The file structure corresponds to the URL structure of your site.

For example:
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[slug].js` → `/blog/:slug`

### Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the static site (outputs to the `out` directory)
- `npm run serve` - Serve the built static site locally
- `npm run lint` - Run ESLint to check for code issues

### Building for Production

To generate the static site for production:

```bash
npm run build
```

The static files will be generated in the `out` directory and are ready to be deployed to any static hosting service like GitHub Pages, Netlify, Vercel, or AWS S3.

## Customization

### Styling

This template uses Tailwind CSS. Customize your design by editing:

- `tailwind.config.js` - For theme customization
- `styles/globals.css` - For global styles

### Configuration

The Next.js configuration is in `next.config.mjs`. Key settings:

- `output: 'export'` - Enables static site generation
- `images: { unoptimized: true }` - Required for static export

## License

[MIT](LICENSE) (or specify your preferred license)