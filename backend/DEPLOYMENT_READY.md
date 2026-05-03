# Deployment Ready Checklist

- Backend uses PostgreSQL through `DATABASE_URL`.
- Backend dependencies are available in `backend/requirements.txt`.
- Django static files are served with WhiteNoise.
- Backend no longer serves media files.
- Product and blog images are stored as frontend static path strings.
- Initial catalog/blog data is available in `backend/fixtures/initial_data.json`.
- Frontend uses GitHub Pages-safe Vite `base: "./"` and `HashRouter`.
- Frontend media files live in `public/images`.
- Production frontend API URL is configured through `.env.production`.
