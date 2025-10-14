# bertop89.github.io

This repository contains the source for my personal website.

## Formatting

The project uses Prettier and EditorConfig to keep a consistent code style for HTML/CSS/JS.

- Prettier config: `.prettierrc`
- Ignore list: `.prettierignore`
- EditorConfig: `.editorconfig`

### Run formatting

Option A: With Node.js installed, run these commands in PowerShell from the repo root:

```powershell
npm init -y
npm install --save-dev prettier
npx prettier --write .
```

Option B: Using VS Code
- Install the "Prettier - Code formatter" extension.
- Set "Format on Save" in Settings.
- Save files to apply formatting.

Vendor/minified files and fonts are ignored by Prettier to avoid noisy diffs.
