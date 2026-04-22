# MasterDynamix-style Vite React project

This project packages the current public MasterDynamix landing page structure into a Vite + React app.

## Run

```bash
npm install
npm run dev
```

## Notes

- The page markup/content is sourced from the provided HTML snapshot.
- Styling and animations are loaded from the original public Webflow CSS/JS URLs so the visuals stay as close as possible to the reference.
- Because the original site is Webflow-based, this React app intentionally injects the original body markup and boots the original scripts after mount.
