# TS Project Quickstarter

A Node.js + TypeScript bootstrap project with a ready-to-go setup for:

- **TypeScript** (ESM + NodeNext)
- **ESLint** (flat config) + Prettier
- **Jest** testing
- **Husky** + **Lint-Staged** + **Commitlint** (conventional commits)
- **Semantic Release** (for automated versioning & changelogs)
- **GitHub Actions** workflows (CI, auto-merge, Dependabot, etc.)

Use this repository as a template to quickly initialize a new TypeScript project with best practices baked in.

---

## Features

1. **TypeScript Setup**

   - Configured with `"module": "NodeNext"` and `"moduleResolution": "NodeNext"` to support ESM in Node.
   - Strict mode enabled.

2. **ESLint + Prettier**

   - Flat config approach (ESLint v9+).
   - Prettier for code formatting and ESLint for code quality.
   - No legacy “extends” usage—pure flat config.

3. **Jest**

   - Testing framework for unit tests.
   - Example test file in `src/index.spec.ts`.

4. **Husky + Lint-Staged + Commitlint**

   - **Husky** triggers pre-commit and commit-msg hooks.
   - **Lint-Staged** automatically formats/lints staged files before commit.
   - **Commitlint** enforces Conventional Commits.

5. **Semantic Release**

   - Automatically manages versions and changelogs based on your commit messages.
   - Ready to run in CI on merges to `main`.

6. **GitHub Actions Workflows**

   - **ci.yml**, **ci-development.yml**, **ci-feature.yml** for building, testing, and (optionally) releasing.
   - **dependabot.yml** to keep dependencies updated.
   - **keep-develop-updated-with-main.yml** for automatic merges from main → develop (if you use a GitFlow approach).
   - **auto-merge.yml** (or a suitable config) for auto-merging PRs, depending on your tooling.

7. **pnpm** for Package Management
   - Minimal overhead and efficient installs.

---

## Getting Started

### 1. Use This Template

- On GitHub, click **“Use this template”** → **“Create a new repository”**.
- Or use the GitHub CLI:
  ```bash
  gh repo create my-new-project --template YourUser/ts-project-quickstarter
  ```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run Scripts

```bash
# Lint code
pnpm run lint

# Format code (Prettier)
pnpm run format

# Build project (TypeScript)
pnpm run build

# Run tests (Jest)
pnpm run test
```

### 4. Commit

When you commit, Husky runs lint-staged & commitlint:

```bash
git add .
git commit -m "feat: initial feature"
git push
```

- If the commit doesn’t follow [Conventional Commits](https://www.conventionalcommits.org/), commitlint rejects it.
- If your staged files have lint/format errors, lint-staged tries to fix them or fails.

### 5. Semantic Release

By default, **semantic-release** runs in CI (GitHub Actions) on pushes to `main`. If your commits follow the conventional commits style (e.g., `feat:`, `fix:`, etc.), version bumps and changelog updates happen automatically.

---

## CI & GitHub Actions Overview

1. **ci.yml**

   - Triggers on pushes to `main` (and pull requests).
   - Installs dependencies, runs lint/test/build, and can run semantic-release.

2. **ci-development.yml**

   - Similar to ci.yml but triggers on pushes to `develop`.

3. **ci-feature.yml**

   - Triggers on pushes to branches other than `main` or `develop` (i.e., feature branches).

4. **keep-develop-updated-with-main.yml**

   - Automatically merges `main` into `develop` whenever `main` is updated (helpful for GitFlow).

5. **dependabot.yml**

   - Manages dependency updates automatically.

6. **auto-merge.yml**
   - Example configuration (for Mergify or your chosen auto-merge tool).

---

## Project Structure

```
ts-project-quickstarter/
  ├─ .github/
  │   ├─ workflows/
  │   │   ├─ ci.yml
  │   │   ├─ ci-development.yml
  │   │   ├─ ci-feature.yml
  │   │   └─ keep-develop-updated-with-main.yml
  │   └─ dependabot.yml
  ├─ .husky/
  ├─ .lintstagedrc.[js|cjs]
  ├─ .prettierrc
  ├─ commitlint.config.js
  ├─ eslint.config.mjs
  ├─ jest.config.ts
  ├─ package.json
  ├─ pnpm-lock.yaml
  ├─ tsconfig.json
  ├─ src/
  │   ├─ index.spec.ts
  │   └─ index.ts
  └─ ...
```

---

## Contributing

Contributions are welcome! Create a new branch, open a pull request, and follow the conventional commit style.

---

## License

Currently set to **[LICENSE]** of your choice. If you want to keep it private, ensure your `package.json` has `"private": true` and a suitable `"license": "UNLICENSED"` or your custom terms.

---

## Questions or Feedback?

Feel free to open an issue or pull request. We hope this quickstarter saves you time setting up the usual Node + TS + Linting + Testing + Release chores, so you can focus on building features.

Happy coding!
