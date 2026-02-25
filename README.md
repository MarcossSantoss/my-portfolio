# 🟣 Portfolio — Marcos Santos v2.0

Personal portfolio built with **Angular 17+**, applying modern architecture principles such as *Standalone Components*, *Signals*, and feature-based organization.

> This project was designed to demonstrate scalable frontend architecture, clean separation of concerns, and modern Angular best practices.

---

## 🚀 Tech Stack

- Angular 17+
- Standalone Components
- Angular Signals API
- SCSS (modular styling)
- CSS Variables (Design Tokens)
- Feature-Based Architecture

---

## 🧠 Project Purpose

This is more than a simple portfolio website.

It was structured as a medium-sized real-world application to showcase:

- Scalable architecture
- Clear separation between business logic and UI
- Reusable component design
- Consistent design system
- Adoption of modern Angular features

The goal was to apply professional architectural thinking even in a personal project.

---

## 🏗️ Architecture Overview

The application is organized into three main layers:

| Folder     | Responsibility |
|------------|----------------|
| `core/`    | Pure business logic (models, services) |
| `features/`| Page/section-level components |
| `shared/`  | Reusable components and utilities |

---

### ✅ Standalone Components

- No `NgModule`
- Each component declares its own `imports`
- Improved tree-shaking
- Cleaner and more modern structure

---

### ✅ Angular Signals (17+)

The `ProjectService` uses:

- `signal()`
- `computed()`
- `asReadonly()`

Without:

- `BehaviorSubject`
- `subscribe()` / `unsubscribe()`

This keeps state management simple, reactive, and aligned with Angular’s future roadmap (zoneless approach).

---

## 🎨 Design System

The project uses global CSS variables as design tokens:

| Token                | Value      | Usage |
|----------------------|-----------|-------|
| `--c-accent`         | `#7c3aed` | Primary accent color |
| `--c-accent-bright`  | `#8b5cf6` | Highlight accent |
| `--c-bg`             | `#050508` | Main background |
| `--c-surface`        | `#0e0c18` | Cards & surfaces |
| `--c-text-1`         | `#f0eeff` | Primary text |
| `--c-text-2`         | `#9b92be` | Secondary text |

### Typography

- **Clash Display** — Headings
- **DM Sans** — Body text

---

## 🗂️ Project Structure
    src/
    ├── styles.scss
    ├── main.ts
    └── app/
    ├── core/
    │ ├── models/
    │ └── services/
    │
    ├── features/
    │ ├── hero/
    │ ├── about/
    │ ├── resume/
    │ ├── projects/
    │ └── contact/
    │
    └── shared/
    ├── animations/
    └── components/

Each component follows Angular best practices with clear separation of:

- `.ts`
- `.html`
- `.scss`

Using `templateUrl` and `styleUrls` instead of inline templates.

---

## ⚙️ Technical Decisions

### 🔹 Feature-Based Architecture
Improves scalability and makes it easier to evolve into a lazy-loaded routed application.

### 🔹 Isolated Core Layer
No UI dependencies inside `core/`.

### 🔹 Component Reusability
Reusable UI components such as:

- `project-card`
- `section-title`
- `header`
- `footer`

### 🔹 Modular SCSS
Each component encapsulates its own styles.

---

## 📦 Main Dependencies

| Package | Purpose |
|----------|----------|
| @angular/core | Core framework |
| @angular/animations | Declarative animations |
| sass | SCSS preprocessor |
| zone.js | Current change detection mechanism |

---