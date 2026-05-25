# SecPrompt Marketing Website

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npx vercel
```

## Project structure

```
app/
  page.tsx              # Homepage
  layout.tsx            # Root layout (nav + footer)
  globals.css           # Global styles + Tailwind
  components/
    TypingText.tsx       # Animated typing text in navbar
    MobileNav.tsx        # Mobile hamburger menu
```

## To add more pages

Create `app/product/page.tsx`, `app/security/page.tsx` etc.
