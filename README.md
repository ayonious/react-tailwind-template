# React + Tailwind CSS starter

A minimal React and TypeScript starter with Webpack, Babel, and Tailwind CSS 4.

## What is included?

- **React** builds the page from reusable UI components. The starter component is in `src/components/Dashboard.tsx`.
- **TypeScript** adds type checking to JavaScript, helping catch mistakes before the app runs. Run `yarn typecheck` to check the project.
- **Babel** turns the TypeScript and JSX syntax into JavaScript that Webpack can bundle. Its presets are listed in `.babelrc`.
- **Webpack** bundles the app's JavaScript and CSS for the browser. It also runs the development server and creates the production files in `dist/`.
- **Tailwind CSS** provides utility classes, such as `bg-slate-50` and `text-4xl`, for styling components directly in JSX. `src/styles.css` imports Tailwind, and PostCSS processes it during the Webpack build.

The project also uses **Prettier** to format files and **Yarn** to install dependencies from `yarn.lock`.

## Requirements

Node.js 22.18+ (22.x) or 24.11+, and Yarn Classic 1.22.22.

## Development

```sh
yarn install --frozen-lockfile
yarn start
```

Edit `src/components/Dashboard.tsx` and use Tailwind utility classes directly in JSX.
`src/styles.css` imports Tailwind; `postcss.config.js` connects it to Webpack.
Tailwind automatically detects classes in source files; no Tailwind config is required.

## Checks and production build

```sh
yarn typecheck
yarn build
```

The production bundle is written to `dist/`. Serve that directory with a static web server.
Run `yarn format` to format source and configuration files with Prettier.
