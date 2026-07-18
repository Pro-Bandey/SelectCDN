# Acode Plugin Development Guide

## Project Structure

A typical Acode plugin repository contains files similar to the following:

```
.
├── src/
│   ├── main.js
│   ├── styles.css
│   └── ...
├── build/
├── dist/
├── plugin.json
├── package.json
├── webpack.config.js (or other bundler config)
└── README.md
```

Your project may include additional folders depending on the build system.

---

# Development Workflow

A recommended workflow is:

1. Clone or fork the repository.
2. Install dependencies.
3. Start development mode.
4. Test inside Acode.
5. Build production files.
6. Test the production build.
7. Release.

Never publish code that has not been tested inside Acode.

---

# Common Commands

The exact commands depend on the repository, but most plugins use something similar to:

```bash
npm install
```

Install project dependencies.

---

```bash
npm run dev
```

Start development mode.

---

```bash
npm run build
```

Create a production build.

---

```bash
npm run lint
```

Run linting (if configured).

---

```bash
npm test
```

Run tests (if available).

---

# Development Guidelines

## Keep Code Modular

Avoid putting everything into one file.

Instead:

- separate utilities
- separate UI logic
- separate plugin lifecycle
- separate API wrappers

Small modules are easier to maintain.

---

## Keep Functions Small

Prefer functions that perform a single responsibility.

Good:

- initialize plugin
- create sidebar
- load settings
- register commands

instead of one large initialization function.

---

## Avoid Global State

Keep shared state minimal.

Instead of attaching data to global objects, keep state inside modules whenever possible.

---

## Handle Errors

Never silently ignore errors.

Instead:

- catch expected failures
- show meaningful messages
- log useful debugging information

---

## Clean Up Resources

Always dispose resources created by your plugin.

Examples:

- event listeners
- timers
- observers
- intervals
- editor handlers

A plugin should leave no resources behind after unloading.

---

## Optimize Performance

Avoid:

- unnecessary DOM updates
- repeated expensive operations
- blocking the UI thread
- duplicate event listeners

Cache values when appropriate.

---

## Keep Dependencies Minimal

Only install packages that are actually required.

Smaller plugins:

- install faster
- build faster
- are easier to maintain

---

## Follow Acode APIs

Always use the documented Acode APIs whenever possible.

Avoid relying on undocumented internal behavior, as it may change between releases.

---

# Before Building

Before creating a production build, verify that:

- no debug logs remain
- unused files are removed
- unused dependencies are removed
- plugin metadata is updated
- version number is correct

---

# Before Publishing

Make sure:

- plugin installs correctly
- plugin loads correctly
- plugin unloads correctly
- settings work
- commands work
- UI works on supported devices

---

# Code Review

Every significant change should be reviewed before release.

A second review often finds issues that are easy to miss during development.

---

# AI-Assisted Code Review

AI can be useful **as a reviewer**

Before building or publishing your plugin, consider asking an AI to review only the code you've changed.

Example prompt:

> Review the following code for:
>
> - security issues
> - memory leaks
> - performance problems
> - incorrect Acode plugin usage
> - maintainability
> - edge cases
>
> Explain each issue and suggest improvements without rewriting unrelated code.

The goal is to receive feedback and identify potential problems—not to replace your understanding of the code. Always review AI suggestions before applying them.

---

# Final Checklist

Before releasing your plugin:

- [ ] Project builds successfully
- [ ] Plugin loads in Acode
- [ ] Plugin unloads cleanly
- [ ] No console errors
- [ ] No unused dependencies
- [ ] Version updated
- [ ] README updated
- [ ] Code reviewed
- [ ] AI review completed (optional)
- [ ] Final manual testing completed
