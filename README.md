# Moolenaar Group — Website

A modern, responsive marketing website for **Moolenaar Group**, a Dutch family-owned
investment and business-development group (est. 1850). Built as a lightweight,
dependency-free static site so it can be hosted anywhere — including free on
GitHub Pages.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, intro, sector preview, approach, CTA |
| `about.html` | About — heritage story, investment approach, values |
| `sectors.html` | Sectors & markets — image cards + full portfolio lists |
| `projects.html` | Track record — filterable grid of past investments and exits |
| `contact.html` | Contact — details and partnership enquiries |
| `styles.css` | Shared stylesheet (Oxford-blue theme) for all pages |
| `script.js` | Shared interactions (nav, reveals, counters, filter) |

## Highlights

- Modern, corporate **Oxford-blue** palette with a light, minimal layout
- Multi-page structure with a shared stylesheet and script (no duplication)
- Solid Oxford-blue home hero; sector/market photography throughout
- Fully responsive (mobile, tablet and desktop breakpoints)
- Scroll-reveal animations, animated statistics and a category filter on the projects page
- No build step, no frameworks — just HTML, CSS and a little vanilla JavaScript
- Fonts loaded from Google Fonts (Fraunces + Inter); sector photos loaded from Wikimedia Commons

## Run locally

No tooling required — just open `index.html` in a browser.

For a local server (recommended, so relative links behave exactly as in production):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `moolenaar-group-website`).
2. Push the contents of this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Moolenaar Group website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose branch **main** and folder **/ (root)**, then **Save**.
5. Wait ~1 minute. Your site will be live at
   `https://<your-username>.github.io/<your-repo>/`.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is
(skipping Jekyll processing), which is what you want for a plain static site.

### Custom domain (optional)

To serve the site from your own domain (e.g. `www.moolenaargroup.com`):

1. Add a file named `CNAME` containing just your domain, e.g. `www.moolenaargroup.com`.
2. At your DNS provider, point the domain to GitHub Pages
   (a `CNAME` record to `<your-username>.github.io`, or the GitHub Pages `A` records).
3. Set the custom domain under **Settings → Pages** and enable **Enforce HTTPS**.

## Before you go live — checklist

- [ ] Replace the placeholder contact email `directie@moolenaargroup.com` with the real address
- [ ] Confirm the legal entity name (`Moolenaar Holding bv`) is correct
- [ ] Add real Privacy Policy and Terms of Use pages (currently `#` placeholder links)
- [ ] Optionally download and self-host the hero image for full offline reliability
      (see `CREDITS.md` for the source and licence)
- [ ] Add a `favicon.ico` if desired

## Structure

```
moolenaar-group-website/
├── index.html        # Home
├── about.html        # About
├── sectors.html      # Sectors & markets
├── projects.html     # Track record
├── contact.html      # Contact
├── styles.css        # Shared Oxford-blue stylesheet
├── script.js         # Shared interactions
├── .nojekyll         # Serve files as-is on GitHub Pages
├── .gitignore
├── README.md
├── CREDITS.md        # Image and font attribution
└── LICENSE
```

## License

See `LICENSE`. Website code and copy © Moolenaar Group. Third-party image and font
credits are listed in `CREDITS.md`.
