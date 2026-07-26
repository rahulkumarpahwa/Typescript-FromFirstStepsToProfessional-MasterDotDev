# TypeScript: From First Steps to Professional

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

A companion repository for the **"TypeScript: First Steps"** workshop by [Anjana Vakil](https://anjana.dev/) on [FrontendMasters](https://frontendmasters.com/teachers/anjana-vakil/). This repo guides learners from zero TypeScript knowledge to confidently using TypeScript in real-world projects — through interactive exercises and a full-stack demo application.

---

## Table of Contents

- [About This Repo](#about-this-repo)
- [Prerequisites](#prerequisites)
- [Repository Structure](#repository-structure)
- [Course Exercises](#course-exercises)
  - [Module 1: JavaScript](#module-1-javascript)
  - [Module 2: Annotations](#module-2-annotations)
  - [Module 3: Compiler](#module-3-compiler)
  - [Module 4: Workflow](#module-4-workflow)
  - [Module 5: Ecosystem](#module-5-ecosystem)
  - [Module 6: Outro](#module-6-outro)
- [The event-me Demo App](#the-event-me-demo-app)
  - [Architecture](#architecture)
  - [Backend (Express + SQLite)](#backend-express--sqlite)
  - [Frontend (Vite + Vanilla TS)](#frontend-vite--vanilla-ts)
  - [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Running event-me](#running-event-me)
- [Key TypeScript Concepts Covered](#key-typescript-concepts-covered)
- [Questions & Review](#questions--review)
- [Credits](#credits)

---

## About This Repo

This repository serves as the hands-on learning material for the **TypeScript: First Steps** course. The course takes a practical, project-driven approach to teaching TypeScript:

- **Chapters 1–3** introduce core TypeScript concepts through small, focused coding exercises.
- **Chapter 4** covers TypeScript setup and workflow best practices for real projects.
- **Chapters 5–6** explore the TypeScript ecosystem and provide a course wrap-up.
- **event-me** is a complete full-stack application that serves as the capstone project: a JavaScript app that learners progressively migrate to TypeScript, demonstrating the value of gradual adoption.

---

## Prerequisites

- **Node.js** (v18 or later) with npm — [Download here](https://nodejs.org/en/download)
- A code editor (preferably [VS Code](https://code.visualstudio.com/) for its excellent TypeScript integration)
- Basic JavaScript knowledge

---

## Repository Structure

```
typescript-FromFirstStepsToProfessional-Masterdotdev/
├── 1-javascript/              # Module 1: TypeScript fundamentals & JS type quirks
│   └── exercise/
│       ├── checkMe.js         # Buggy JS file to type-check with tsc
│       ├── solution.js        # Reference solution
│       └── README.md          # Exercise instructions
│
├── 2-annotations/             # Module 2: Type annotations, aliases, unions
│   └── exercise/
│       ├── typeMe.js          # Original JS file to migrate to TS
│       ├── typeMe.ts          # Annotated TS solution
│       └── README.md          # Exercise instructions
│
├── 3-compiler/                # Module 3: The TypeScript compiler (tsc)
│   ├── slides.html
│   └── exercise/
│       ├── compileMe.js       # Original JS file
│       ├── compileMe.ts       # TS version to fix
│       ├── package.json       # Project with vitest
│       ├── tsconfig.json      # TS compiler configuration
│       ├── simple.test.js     # Tests
│       └── README.md          # Exercise instructions
│
├── 4-workflow/                # Module 4: TypeScript workflow & best practices
│   └── slides.html
│
├── 5-ecosystem/               # Module 5: TypeScript ecosystem overview
│   └── slides.html
│
├── 6-outro/                   # Module 6: Course wrap-up
│   └── slides.html
│
├── event-me/                  # Full-stack demo application (main project)
│   ├── README.md              # App-specific instructions
│   ├── backend/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── bin/www            # Server entry point
│   │   └── src/
│   │       ├── server.ts      # Express server setup
│   │       ├── db.ts          # SQLite database initialization
│   │       ├── types/
│   │       │   └── types.ts   # Shared TypeScript types
│   │       ├── routes/
│   │       │   ├── api.ts     # API router
│   │       │   ├── events.ts  # Events CRUD routes
│   │       │   └── users.ts   # Users routes
│   │       └── data/          # Seed data (JSON files)
│   │           ├── events.json
│   │           ├── users.json
│   │           └── rsvps.json
│   │
│   └── frontend/
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.js
│       ├── index.html
│       └── src/
│           ├── main.ts        # App entry point
│           ├── style.css
│           ├── components/
│           │   ├── Header.ts  # Site header with theme toggle
│           │   ├── Main.ts    # Main content area
│           │   ├── Footer.ts  # Site footer
│           │   ├── Events.ts  # Events listing (cards + modals)
│           │   ├── Forms.ts   # RSVP form handling
│           │   ├── Modal.ts   # Modal dialog component
│           │   └── Icons.ts   # SVG icon components
│           └── icons/         # SVG asset files
│
└── Questions/
    └── questions.md           # Comprehensive Q&A covering all course material
```

---

## Course Exercises

### Module 1: JavaScript

**Folder:** `1-javascript/exercise/`

This module explores JavaScript's dynamic and weak type system, demonstrating why TypeScript is valuable.

**Exercise:**

1. Install TypeScript globally: `npm i -g typescript`
2. Run the TypeScript compiler on `checkMe.js`:
   ```bash
   tsc --checkJs --noEmit checkMe.js
   tsc --checkJs --noEmit --strict checkMe.js
   ```
3. Observe the errors TypeScript catches: typos (`creater` instead of `creator`), unsafe variable reassignment (replacing an object with a string), and method call errors (`console.lgo` instead of `console.log`).
4. Fix the errors in `checkMe.js` and verify with `tsc`.

**Key Takeaways:**

- JavaScript is dynamically & weakly typed → types are determined at runtime and JS coerces types automatically
- TypeScript catches type-related errors **at development time**, not runtime
- `--checkJs` enables type-checking for `.js` files; `--noEmit` prevents output files; `--strict` enables stricter checks

---

### Module 2: Annotations

**Folder:** `2-annotations/exercise/`

This module introduces TypeScript type annotations, type aliases, union types, and optional properties.

**Exercise:**

1. Read and run `typeMe.js` to see its bugs
2. Rename to `typeMe.ts` and install `tsx` globally: `npm i -g tsx`
3. Run with `tsx typeMe.ts` (or `tsx --watch typeMe.ts` for hot reload)
4. Add type annotations for variables, function parameters, and return types
5. Create type aliases (e.g., `type Event = { ... }`) and union types (e.g., `number | string`)
6. Fix the code logic errors
7. Verify with `tsc --strict typeMe.ts`

**Key Takeaways:**

- Type annotations: `let x: number = 5`
- Function annotations: `function add(a: number, b: number): number { ... }`
- Type aliases: `type ID = number | string`
- Optional properties: `description?: string`
- Type narrowing with type guards (if-statements)

---

### Module 3: Compiler

**Folder:** `3-compiler/exercise/`

This module dives into `tsconfig.json`, the TypeScript compiler (`tsc`), and project-level configuration.

**Exercise:**

1. Install dependencies: `npm i`
2. Install TypeScript as a dev dependency: `npm i -D typescript`
3. Generate `tsconfig.json`: `tsc --init`
4. Add compile & test scripts to `package.json`
5. Understand compiler options: `target`, `module`, `strict`, `outDir`, etc.
6. Fix type errors in `compileMe.ts`
7. Run tests with type-checking: `npm test`

**Key Takeaways:**

- `tsconfig.json` centralizes all compiler options
- `tsc` compiles `.ts` → `.js`; `--noEmit` type-checks without emitting files
- Install TypeScript as a `devDependency` — it's only needed during development
- Prepend CI/CD commands with `tsc --noEmit` to catch errors before tests/builds

---

### Module 4: Workflow

**Folder:** `4-workflow/`

Covers TypeScript integration into development workflows:

- Running `tsc` before tests, builds, and deployments
- Using the `&&` operator to chain commands: `"test": "tsc --noEmit && vitest"`
- Watching for changes with `tsc --watch`

---

### Module 5: Ecosystem

**Folder:** `5-ecosystem/`

Explores the wider TypeScript ecosystem:

- `@types/*` packages via DefinitelyTyped
- Shared TS config bases: `@tsconfig/recommended`, `@tsconfig/node-lts`, `@tsconfig/vite-react`
- Schema validation with Zod
- ORMs like TypeORM
- Utility types: `Partial`, `Readonly`, `Pick`, `Omit`, `Record`

---

### Module 6: Outro

**Folder:** `6-outro/`

Course wrap-up and next steps for continuing your TypeScript journey.

---

## The event-me Demo App

```
event-me/
├── backend/          # Express REST API with SQLite (better-sqlite3)
└── frontend/         # Vite-powered vanilla TypeScript SPA
```

**event-me** is a full-stack event management application built to demonstrate the power of TypeScript in real-world development.

> 💡 **Educational Purpose:** The app starts as JavaScript and learners gradually migrate it to TypeScript, experiencing first-hand how TypeScript catches bugs, improves developer experience, and provides type safety across the full stack.

### Architecture

```
┌──────────────────────────────────────────────┐
│                    Browser                    │
│  ┌────────────────────────────────────────┐   │
│  │          Frontend (Vite + TS)          │   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │   │
│  │  │Header│ │Events│ │Modal │ │Footer│  │   │
│  │  └──────┘ └──────┘ └──────┘ └──────┘  │   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐           │   │
│  │  │Forms │ │Icons │ │Main  │           │   │
│  │  └──────┘ └──────┘ └──────┘           │   │
│  └────────────────────────────────────────┘   │
│                   │ HTTP                       │
└───────────────────┬───────────────────────────┘
                    │
┌───────────────────▼───────────────────────────┐
│           Backend (Express + TS)              │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐  │
│  │ api.ts   │ │events.ts │ │  users.ts    │  │
│  │ (router) │ │ (routes) │ │  (routes)    │  │
│  └──────────┘ └──────────┘ └──────────────┘  │
│  ┌──────────┐ ┌────────────────────────────┐  │
│  │  db.ts   │ │    SQLite Database         │  │
│  └──────────┘ │  (events, users, rsvps)    │  │
│               └────────────────────────────┘  │
└───────────────────────────────────────────────┘
```

### Backend (Express + SQLite)

**Stack:** Express.js + better-sqlite3 + TypeScript

| File                   | Purpose                                                   |
| ---------------------- | --------------------------------------------------------- |
| `src/server.ts`        | Express app setup with CORS, Helmet, Morgan, CookieParser |
| `src/db.ts`            | SQLite database initialization with seed data             |
| `src/types/types.ts`   | Shared TypeScript types (`Event`, `User`, `Rsvp`, `Id`)   |
| `src/routes/api.ts`    | API router combining events & users routes                |
| `src/routes/events.ts` | Full CRUD for events + RSVP handling                      |
| `src/routes/users.ts`  | User retrieval by ID                                      |
| `bin/www`              | Server entry point                                        |

**Database:** SQLite with three tables — `events`, `users`, `rsvps` — initialized from JSON seed data.

### Frontend (Vite + Vanilla TS)

**Stack:** Vite + Vanilla TypeScript + Pico CSS

| File                          | Purpose                                                          |
| ----------------------------- | ---------------------------------------------------------------- |
| `src/main.ts`                 | App entry point — renders Header, Main, Footer into `#app`       |
| `src/components/Header.ts`    | Site header with theme toggle (light/dark mode)                  |
| `src/components/Main.ts`      | Main content wrapper that renders Events                         |
| `src/components/Events.ts`    | Core component — fetches events from API, renders cards & modals |
| `src/components/EventCard.ts` | Individual event card with image, date, host, RSVP status        |
| `src/components/Modal.ts`     | Modal dialog system (open/close, click-outside, Esc key)         |
| `src/components/Forms.ts`     | RSVP form submission handling                                    |
| `src/components/Footer.ts`    | Site footer with tech stack credits                              |
| `src/components/Icons.ts`     | SVG icons (TypeScript, Vite, Pico, Heart, Sun/Moon, Calendar)    |
| `src/style.css`               | Global styles customizing Pico CSS                               |
| `vite.config.js`              | Vite configuration                                               |

**Key Features:**

- Fetches events from backend API via `fetch()`
- Displays upcoming and past events in categorized sections
- RSVP modal for each event with name/email form
- Dark/light theme toggle with `data-theme` attribute
- Pico CSS framework for clean, responsive styling

### API Endpoints

| Method   | Endpoint               | Description                          |
| -------- | ---------------------- | ------------------------------------ |
| `GET`    | `/api/events`          | List all events (with hosts & RSVPs) |
| `GET`    | `/api/events/:id`      | Get event by ID                      |
| `POST`   | `/api/events/new`      | Create a new event                   |
| `PATCH`  | `/api/events/:id`      | Update an event partially            |
| `DELETE` | `/api/events/:id`      | Delete an event                      |
| `POST`   | `/api/events/:id/rsvp` | RSVP to an event                     |
| `GET`    | `/api/users`           | List all users                       |

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd typescript-FromFirstStepsToProfessional-Masterdotdev
```

### 2. Install TypeScript globally (for exercises)

```bash
npm install -g typescript tsx
```

Verify the installation:

```bash
tsc --version
tsx --version
```

### 3. Work through the course exercises

Each exercise directory contains its own `README.md` with step-by-step instructions:

```bash
cd 1-javascript/exercise/
# Follow the README.md instructions
```

---

## Running event-me

The app requires two terminals — one for the backend API and one for the frontend dev server.

### Backend Setup

```bash
cd event-me/backend
npm install
npm run dev
```

The API server starts at `http://localhost:3000`. The SQLite database is automatically initialized with seed data on first run.

### Frontend Setup

In a **second terminal**:

```bash
cd event-me/frontend
npm install
npm run dev
```

The frontend dev server starts at `http://localhost:5173`. Open this URL in your browser.

### Environment Variables

Create a `.env` file in `event-me/frontend/`:

```
VITE_API_URL=http://localhost:3000/api
```

---

## Key TypeScript Concepts Covered

This course and repo cover the following TypeScript concepts:

| Concept                      | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| **Static vs Dynamic Typing** | TypeScript catches errors at compile time; JavaScript at runtime |
| **Type Annotations**         | `let x: number`, `function(a: string): boolean`                  |
| **Type Aliases**             | `type ID = string \| number`                                     |
| **Interfaces**               | `interface User { name: string; id: number }` with `extends`     |
| **Union Types**              | `string \| number \| null`                                       |
| **Optional Properties**      | `description?: string`                                           |
| **Type Inference**           | TypeScript automatically deduces types from context              |
| **Type Narrowing**           | Using `if` blocks to refine union types                          |
| **Literal Types**            | `type Theme = "light" \| "dark"`                                 |
| **Utility Types**            | `Partial<T>`, `Readonly<T>`, `Pick<T,K>`, `Omit<T,K>`            |
| **Generics**                 | `type Nullable<T> = T \| null`, `Promise<string>`                |
| **Type Assertions**          | `const el = document.getElementById('x') as HTMLButtonElement`   |
| **Declaration Files**        | `.d.ts` files for JavaScript libraries                           |
| **import type**              | Importing only type information (stripped at compile time)       |
| **Index Access Types**       | `User['id']` to get the type of a specific property              |
| **tsconfig.json**            | Centralized compiler configuration                               |
| **DefinitelyTyped**          | `@types/*` packages for community type definitions               |
| **tsx**                      | TypeScript execution for development (no manual compile)         |
| **Vite + TypeScript**        | Modern frontend build tooling with TS support                    |

---

## Questions & Review

The `Questions/questions.md` file contains over 220 questions and detailed answers covering all course material. This is an excellent resource for:

- Reviewing key concepts before a test or interview
- Deepening understanding through detailed explanations
- Quick reference for TypeScript syntax and patterns

---

## Credits

- **Demo App Design:** Built with [Pico CSS](https://picocss.com/) and [Vite](https://vitejs.dev/)
- **License:** ISC

---

<div align="center">
  <p>Built with ❤️ for the TypeScript community</p>
  <p>
    <a href="https://www.typescriptlang.org/">TypeScript</a> •
  </p>
</div>
