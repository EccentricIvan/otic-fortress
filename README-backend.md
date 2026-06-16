# Fortress Backend (Minimal)

This minimal backend provides JSON APIs and a CSV export for the static UI.

Install dependencies and run:

```bash
npm install
npm run dev
```

Endpoints:
- `GET /api/products` — products JSON
- `GET /api/feeds` — live feed JSON
- `GET /api/incidents` — incidents JSON
- `GET /api/compliance` — compliance JSON
- `GET /api/governance` — governance JSON
- `GET /api/export` — CSV download of products

The server also serves static files from the project root, so you can visit `http://localhost:3000/index.html` after starting the backend.
