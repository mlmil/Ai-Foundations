# Ai Foundations — Landing Page

Standalone landing page for Spark Ai · Ai Foundations 1.0.

## Structure

```
index.html                         # Entry point
variations/v2-civic-grid.jsx       # Main component (React + Babel)
assets/
  spark-plug-bone.png              # Logo (light-on-dark)
  spark-plug-ink.png               # Logo (dark-on-light)
```

## Deploy to GitHub Pages

1. Initialize / push this folder to a GitHub repo.
2. Repo **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main` / root (`/`)
3. Wait ~30s. Site goes live at `https://<user>.github.io/<repo>/`.

## Local preview

Any static server works. For example:

```
cd Ai-Foundations
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly via `file://` may not work because Babel loads the JSX via fetch, which most browsers block on file URLs.

## Notes

- React 18 + in-browser Babel (no build step).
- Responsive: scales down to fit narrow viewports, up to 1.4× on very wide screens.
- Dark theme only. Student Login button in top nav points at `#student-login` — replace with your real auth URL in `variations/v2-civic-grid.jsx`.
