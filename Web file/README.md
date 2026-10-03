# Shadman Portfolio — repaired build

## What was fixed
- Prevented the page from appearing blank if the decorative JavaScript animation fails.
- Made scroll-reveal animation fail-safe.
- Fixed the invalid CSS animation declaration for the status indicator.
- Hardened the background canvas animation for older/low-power devices.
- Improved mobile navigation and small-screen spacing.
- Added reduced-motion handling and stronger accessibility focus states.
- Kept SEO files (robots.txt, sitemap.xml, canonical URL, structured data) intact.

## Firebase Hosting
Deploy from this folder (the folder containing `index.html` and `firebase.json`):
```bash
firebase deploy --only hosting
```

The hosting `public` directory is `.` so `index.html` must be in the deployed hosting root.
