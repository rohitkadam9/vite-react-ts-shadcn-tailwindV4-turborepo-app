# React + Vite + Shadcn UI + Tailwind v4 + Turborepo

A **modern micro-frontend monorepo scaffold** built with **Turborepo**, **pnpm workspaces**, **Vite**, **React 19**, and **Tailwind CSS v4**.

This repository provides a **scalable foundation for building large React applications** with a shared UI component library powered by **shadcn/ui**.

---

# ✨ Features

- ⚡ **Vite + React 19**
- 🎨 **Tailwind CSS v4**
- 🧩 **shadcn/ui component system**
- 🏗 **Turborepo monorepo architecture**
- 📦 **pnpm workspaces**
- 🔁 **Shared UI package**
- 🧠 **Centralized TypeScript configs**
- 🧹 **Shared ESLint configuration**
- 🪶 **Lightweight and production-ready**

---

# 📁 Project Structure

```
react-vite-shadcn-tailwindV4-turborepo-app
│
├── apps/
│   └── web/                         # Main React application
│       ├── src/
│       │   ├── main.tsx
│       │   └── style.css
│       ├── vite.config.ts
│       └── postcss.config.mjs
│
├── packages/
│   ├── ui/                          # Shared component library (@repo/ui)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── shadcn/          # shadcn/ui primitives
│   │   │   │   └── ui-custom/       # Custom reusable components
│   │   │   ├── lib/
│   │   │   │   └── utils.ts
│   │   │   └── styles/
│   │   │       └── globals.css
│   │   └── postcss.config.mjs
│   │
│   ├── eslint-config/               # Shared ESLint config (@repo/eslint-config)
│   └── typescript-config/           # Shared TypeScript configs (@repo/typescript-config)
│
└── turbo.json
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

- Node.js **v18+**
- pnpm **v8+**

Install pnpm if needed:

```
npm install -g pnpm
```

---

# 📦 Installation

Clone the repository and install dependencies:

```
pnpm install
```

---

# 🧑‍💻 Development

Start the development server:

```
pnpm dev
```

This runs the **web app via Turborepo**.

Open:

```
http://localhost:5173
```

---

# 🏗 Build

Build all applications and packages:

```
pnpm build
```

Turborepo will build everything in **dependency order**.

---

# 🧹 Lint

Run ESLint across the entire monorepo:

```
pnpm lint
```

---

# 📦 Apps

## `apps/web`

The **main application shell**.

Built with:

- React 19
- Vite
- TypeScript
- Tailwind CSS v4

This app consumes shared UI components from:

```
@repo/ui
```

---

# 📦 Packages

## `@repo/ui`

Shared **UI component library**.

Contains:

- **shadcn/ui components**
  - Button
  - Card
  - Field
  - Input
  - Label
  - Separator

- **Custom reusable components**
  - LoginForm
  - Layout utilities
  - Other UI abstractions

- **Utilities**

```
src/lib/utils.ts
```

- **Global styles**

```
src/styles/globals.css
```

- **PostCSS configuration**

```
@repo/ui/postcss.config
```

---

### Exports

Defined in `packages/ui/package.json`.

| Export                    | Source                   |
| ------------------------- | ------------------------ |
| `@repo/ui`                | `src/index.ts`           |
| `@repo/ui/lib/utils`      | `src/lib/utils.ts`       |
| `@repo/ui/globals.css`    | `src/styles/globals.css` |
| `@repo/ui/postcss.config` | `postcss.config.mjs`     |

---

## `@repo/eslint-config`

Centralized **ESLint configuration** used across all apps and packages.

---

## `@repo/typescript-config`

Shared **TypeScript configuration presets**.

| Config               | Usage                        |
| -------------------- | ---------------------------- |
| `base.json`          | Base config for all packages |
| `react-library.json` | React component libraries    |
| `vite.json`          | Vite-based apps              |

---

# 🧰 Tech Stack

| Tool            | Purpose                     |
| --------------- | --------------------------- |
| Turborepo       | Monorepo task orchestration |
| pnpm Workspaces | Package management          |
| Vite            | Lightning-fast bundler      |
| React 19        | UI framework                |
| TypeScript      | Type safety                 |
| Tailwind CSS v4 | Styling                     |
| shadcn/ui       | UI primitives               |
| Lucide React    | Icons                       |

---

# ➕ Adding a New App

1. Create a directory under `apps/`

```
apps/my-app
```

2. Add a `package.json` with a unique name.

3. Extend the shared TypeScript config:

```
@repo/typescript-config/vite.json
```

4. Import shared UI components:

```
import { Button } from "@repo/ui"
```

5. Re-export PostCSS config:

```
@repo/ui/postcss.config
```

---

# ➕ Adding a New Package

1. Create a directory under `packages/`

```
packages/my-package
```

2. Add a `package.json`

```
"name": "@repo/my-package"
```

3. Ensure it is included in:

```
pnpm-workspace.yaml
```

4. Use it as a workspace dependency:

```
"@repo/my-package": "workspace:*"
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

# 📄 License

MIT
