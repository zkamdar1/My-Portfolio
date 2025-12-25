# Commands Cheat Sheet

Quick reference guide for all main commands needed to run, build, and deploy the portfolio project.

## ⚠️ Important: Directory Setup

**All commands must be run from the `react-portfolio` directory.**

```bash
# Navigate to the project directory first
cd react-portfolio

# Then run any of the commands below
```

---

## 📦 Installation

### Initial Setup

```bash
# Install all dependencies
npm install
```

### Update Dependencies

```bash
# Update dependencies to latest versions
npm update
```

---

## 🚀 Development

### Start Development Server

```bash
# Start Vite dev server (usually runs on http://localhost:5173)
npm run dev
```

### Preview Production Build Locally

```bash
# Build the project first, then preview
npm run build
npm run preview
```

---

## 🏗️ Build

### Build for Production

```bash
# Create optimized production build in /dist folder
npm run build
```

---

## 🧹 Code Quality

### Run Linter

```bash
# Check code for linting errors
npm run lint
```

---

## 🚢 Deployment

### Deploy to GitHub Pages

```bash
# This will automatically build and deploy to gh-pages branch
npm run deploy
```

**Note:** The `predeploy` script automatically runs `npm run build` before deployment, so you don't need to build manually.

### Manual Deployment Steps

If you need to deploy manually:

```bash
# 1. Build the project
npm run build

# 2. Deploy to gh-pages
npx gh-pages -d dist
```

---

## 📍 Project Information

- **Live Site:** https://zkamdar1.github.io/My-Portfolio/
- **Build Tool:** Vite
- **Framework:** React
- **Deployment:** GitHub Pages (gh-pages)
- **Base Path:** `/My-Portfolio/`

---

## 🔧 Common Workflows

### Daily Development

```bash
cd react-portfolio
npm run dev
```

### Before Committing

```bash
cd react-portfolio
npm run lint
npm run build
npm run preview  # Verify build looks correct
```

### Deploying Updates

```bash
cd react-portfolio
npm run deploy
```

---

## 🐛 Troubleshooting

### Clear Cache and Reinstall

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Clear Build Directory

```bash
# Remove dist folder
rm -rf dist
```

### Check Node Version

```bash
# Ensure you're using a compatible Node.js version
node --version
```

---

## 📝 Notes

- The project uses Vite as the build tool
- GitHub Pages deployment is configured via `gh-pages` package
- The base path is set to `/My-Portfolio/` in `vite.config.js`
- All build artifacts are generated in the `dist/` folder
- The `predeploy` hook ensures the project is built before deployment
