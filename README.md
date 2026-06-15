# Arpit Prajapati — Developer Portfolio

A clean, minimalist dark-themed developer portfolio built with **React 18**, **Vite 5**, **Tailwind CSS 3**, and **Lucide React** icons.

---

## Prerequisites

Before you begin, make sure the following tools are installed on your machine:

- **Node.js** (v18 or higher recommended) — [Download here](https://nodejs.org/)
  - Verify installation: `node -v` and `npm -v`
- **Git** (optional, required for GitHub Pages deployment) — [Download here](https://git-scm.com/)

---

## 1. Getting Started Locally

### Step 1 — Extract the ZIP

Unzip `portfolio-project.zip` to your preferred location:

```bash
# On macOS / Linux
unzip portfolio-project.zip -d portfolio-project
cd portfolio-project

# On Windows (PowerShell)
Expand-Archive -Path portfolio-project.zip -DestinationPath portfolio-project
cd portfolio-project
```

### Step 2 — Install Dependencies

```bash
npm install
```

This will install all packages defined in `package.json` including React, Vite, Tailwind CSS, and Lucide React.

### Step 3 — Start the Development Server

```bash
npm run dev
```

Vite will start a local development server. Open your browser and visit:

```
http://localhost:5173
```

The page hot-reloads automatically whenever you save a file.

---

## 2. Project Structure

```
portfolio-project/
├── index.html              # Root HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
└── src/
    ├── main.jsx            # React app entry point
    ├── index.css           # Global styles + Tailwind directives
    └── App.jsx             # Main portfolio component (all sections)
```

---

## 3. Customization

All personal content lives directly in `src/App.jsx`. To update it:

- **Name / Bio / Location**: Edit the `Hero` section at the top of `App.jsx`
- **Skills**: Modify the `skills` array
- **Experience / Education**: Modify the `experience` and `education` arrays
- **Projects**: Modify the `projects` array — add as many cards as you like
- **Social links**: Update the `href` values in the Hero social links block

---

## 4. Building for Production

To generate an optimized static build:

```bash
npm run build
```

This outputs a `dist/` folder with all compiled assets. To preview the production build locally:

```bash
npm run preview
```

---

## 5. Deployment to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository (e.g., `portfolio`)
2. Push your local project to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2 — Configure `vite.config.js` for GitHub Pages

If you're deploying to `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`, update the `base` in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',   // ← add your repo name here
})
```

If you're using a **custom domain** (see below), leave it as `base: '/'`.

### Step 3 — Deploy

```bash
npm run deploy
```

This runs `npm run build` and then pushes the `dist/` folder to the `gh-pages` branch automatically.

### Step 4 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select the `gh-pages` branch and `/ (root)`
3. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 6. Custom Domain Setup (e.g., `.com.np`)

### Step 1 — Add a CNAME file

Create a file named `CNAME` in the `public/` folder (create the folder if it doesn't exist):

```
yourdomain.com.np
```

This ensures your custom domain is preserved after every deploy.

### Step 2 — Configure GitHub Pages

1. In your GitHub repo → **Settings** → **Pages** → **Custom domain**
2. Enter your domain: `yourdomain.com.np`
3. Click **Save** and wait for the DNS check to pass

### Step 3 — Configure DNS via Cloudflare

1. Log in to [Cloudflare](https://cloudflare.com) and select your domain
2. Go to **DNS** → **Records**
3. Add the following **A records** pointing to GitHub Pages IP addresses:

| Type | Name | Content         | Proxy |
|------|------|-----------------|-------|
| A    | @    | 185.199.108.153 | DNS Only (grey cloud) |
| A    | @    | 185.199.109.153 | DNS Only |
| A    | @    | 185.199.110.153 | DNS Only |
| A    | @    | 185.199.111.153 | DNS Only |

4. Add a **CNAME record** for `www`:

| Type  | Name | Content                         | Proxy |
|-------|------|---------------------------------|-------|
| CNAME | www  | YOUR_USERNAME.github.io         | DNS Only |

> **Important:** Set Proxy status to **DNS Only** (grey cloud) — not proxied — for GitHub Pages HTTPS certificate issuance to work.

### Step 4 — Enable HTTPS

Back in GitHub → **Settings** → **Pages**, check **"Enforce HTTPS"** once the DNS propagates (may take up to 48 hours).

---

## 7. Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local development server           |
| `npm run build`   | Build optimized production bundle        |
| `npm run preview` | Preview production build locally         |
| `npm run deploy`  | Build + deploy to GitHub Pages           |

---

## License

This portfolio is personal and free to adapt. Built with ❤️ in Bhaktapur, Nepal.
