# Deployment

This project is split into two deployments:

- Frontend: Vite/React on GitHub Pages.
- Backend: Django REST API on Render.

Media files are frontend static assets only. Keep images in `public/images`. The backend stores and returns image path strings, plus catalog/blog/lead/partner data.

## Backend on Render

1. Create a PostgreSQL database on Render and copy its Internal Database URL.

2. Create a Render Web Service from the GitHub repository:

   - Root Directory: `backend`
   - Environment: `Python`
   - Build Command: `bash build.sh`
   - Start Command: `gunicorn config.wsgi:application --log-file -`

3. Add environment variables:

   ```env
   SECRET_KEY=<generate-a-long-django-secret>
   DEBUG=False
   ALLOWED_HOSTS=your-backend.onrender.com
   CORS_ALLOWED_ORIGINS=https://username.github.io
   CSRF_TRUSTED_ORIGINS=https://username.github.io
   DATABASE_URL=<render-internal-postgres-url>
   ```

4. After the first deploy, run migrations in Render Shell:

   ```bash
   python manage.py migrate
   python manage.py loaddata fixtures/initial_data.json
   python manage.py createsuperuser
   ```

5. Check the API:

   ```bash
   curl https://your-backend.onrender.com/api/categories/
   ```

## Frontend on GitHub Pages

1. Create `.env.production` in the project root:

   ```env
   VITE_API_BASE_URL=https://your-backend.onrender.com/api
   ```

2. Build locally to verify:

   ```bash
   npm run build
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

4. In GitHub repository settings:

   - Pages source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/root`

The frontend uses `HashRouter` and Vite `base: "./"`, so it works on GitHub Pages project URLs such as `https://username.github.io/repo-name/`.

## Media Rule

Do not deploy `backend/media`.

If an API record uses `products/ipcam1.jpeg`, `blog/cover.png`, or a former `/media/...` URL, the frontend resolves the final file from `public/images/<filename>`.
