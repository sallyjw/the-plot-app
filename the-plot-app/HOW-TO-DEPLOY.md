# How to get the PLOT live on the internet (free, ~10 minutes)

No coding knowledge needed. Just follow these steps.

---

## What you'll need

- A computer (Mac or Windows)
- A free GitHub account → github.com
- A free Vercel account → vercel.com (sign up with your GitHub)

---

## Step 1 — Install Node.js (one-time setup, ~2 mins)

Node.js is the engine that runs your app.

1. Go to **nodejs.org**
2. Click the big green **"LTS" download button**
3. Open the downloaded file and follow the installer
4. Done — you only need to do this once

---

## Step 2 — Upload the project to GitHub (~3 mins)

1. Go to **github.com** and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it `the-plot-app` → click **Create repository**
4. On the next page, click **"uploading an existing file"**
5. Drag the entire `the-plot-app` folder into the upload box
6. Click **Commit changes**

---

## Step 3 — Deploy to Vercel (~3 mins)

Vercel reads your GitHub and builds + hosts the app automatically.

1. Go to **vercel.com** and sign in with GitHub
2. Click **"Add New Project"**
3. Find `the-plot-app` in the list → click **Import**
4. Leave all settings as default → click **Deploy**
5. Wait ~60 seconds ⏳
6. Vercel gives you a live URL like `the-plot-app.vercel.app` 🎉

---

## Every time you want to update the app

1. Make changes to the files in this folder
2. Drag the updated files into GitHub (same repo)
3. Vercel automatically re-deploys — usually live within 60 seconds

---

## Your app has three screens

| Screen | URL | What it does |
|--------|-----|--------------|
| Home | `/` | Lists all your plots (Euro Summer, Trip 2, Trip 3) |
| Trip dashboard | `/euro-summer` | Shows the 5 sections for a trip |
| Itinerary | `/euro-summer/itinerary` | Calendar + sidebar + plot outline |

---

## Need to add your own trips, restaurants, hotels?

All the data lives in one file: **`lib/data.js`**

Open it in any text editor (Notepad on Windows, TextEdit on Mac) and you'll see clearly labelled sections where you can add restaurants, hotels, and events. Or ask Claude to update it for you!

---

## Questions?

Ask Claude — just describe what you want to change and it can update the code directly.
