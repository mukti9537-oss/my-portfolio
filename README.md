# Mukti Chakraborty — Developer Portfolio

A modern, responsive, and minimalist developer portfolio website crafted from scratch for **Mukti Chakraborty**, Aspiring Full-Stack Web Developer and Diploma in Computer Engineering student in Bangladesh.

Built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM**.

---

## 🌟 Overview & Key Features

- **Dark-Themed Minimalist Aesthetics:** Premium dark navy/black background (`#030712`) with white typography and glowing blue/violet accents.
- **Fully Responsive Architecture:** Optimized across mobile, tablet, laptop, and ultra-wide desktop viewports.
- **Client-Side Routing (SPA):** Seamless routing with React Router DOM for the homepage and dedicated project case study pages:
  - `/projects/bazardor`
  - `/projects/fitlog`
  - `/projects/dev-stack-builder`
  - `/projects/dev-conference`
- **Functional Toast Notification System:** Interactive notification feedback for the Resume button (*"Resume coming soon!"*), clipboard copy actions, and contact form transmissions.
- **Honest & Transparent Profile Data:** Adheres strictly to truthful representations without inventing employment history, education dates, or fake project URLs. Explicit placeholders are provided where information is pending.
- **Modular Data Architecture:** All profile information, projects, skills, education, and learning timelines are organized in modular JavaScript data files under `src/data/` for simple maintenance.
- **Vercel SPA Deployment Ready:** Includes `vercel.json` rewrite configuration to prevent 404 errors on deep-link refreshes.

---

## 🚀 Live Demo & Links

- **Developer:** Mukti Chakraborty
- **Role:** Aspiring Full-Stack Web Developer
- **GitHub:** [https://github.com/mukti9537-oss](https://github.com/mukti9537-oss)
- **LinkedIn:** [https://linkedin.com/in/mukti-chakraborty-552680389/](https://linkedin.com/in/mukti-chakraborty-552680389/)
- **Featured Live Project (BazarDor):** [https://bazar-dor-website-rho.vercel.app](https://bazar-dor-website-rho.vercel.app)

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | React 19 |
| **Build Tool & Dev Server** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router DOM v7 |
| **Icons** | Lucide React & Custom SVG Icons |
| **Language** | JavaScript (ES6+) |
| **Hosting Config** | Vercel SPA Rewrites (`vercel.json`) |

---

## 📁 Project Structure

```text
Portfolio website/
├── public/
│   ├── images/
│   │   ├── profile-avatar.svg      # Developer profile avatar placeholder
│   │   ├── bazardor.svg            # BazarDor project preview
│   │   ├── fitlog.svg              # FitLog project preview
│   │   ├── dev-stack-builder.svg   # Dev Stack Builder project preview
│   │   └── dev-conference.svg      # Dev Conference project preview
│   ├── favicon.svg                 # Site favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── About.jsx               # About Me narrative & core pillars
│   │   ├── Contact.jsx             # Contact cards & interactive message form
│   │   ├── Education.jsx           # Diploma in Computer Engineering details
│   │   ├── Experience.jsx          # Practical learning timeline & lab sessions
│   │   ├── Footer.jsx              # Footer with quick links & back to top
│   │   ├── Hero.jsx                # Hero section with avatar, socials & CTA
│   │   ├── Icons.jsx               # Custom SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx              # Responsive navigation & mobile drawer
│   │   ├── ProjectCard.jsx         # Modular showcase project card
│   │   ├── Projects.jsx            # Projects section with category filtering
│   │   ├── ScrollToTop.jsx         # Automatic route scroll restoration
│   │   ├── Skills.jsx              # Categorized skills grid
│   │   └── Toast.jsx               # Floating toast alert component
│   ├── context/
│   │   └── ToastContext.jsx        # Global toast notification context
│   ├── data/
│   │   ├── education.js            # Academic coursework & institution info
│   │   ├── experience.js           # Learning journey & self-directed builds
│   │   ├── profile.js              # Bio, resume config, social links
│   │   ├── projects.js             # Detailed project data & case studies
│   │   └── skills.js               # Categorized technical competencies
│   ├── pages/
│   │   ├── HomePage.jsx            # Main single-page portfolio view
│   │   ├── NotFoundPage.jsx        # 404 fallback page
│   │   └── ProjectDetailsPage.jsx  # In-depth project case study view
│   ├── App.jsx                     # Root application routes & providers
│   ├── index.css                   # Tailwind CSS imports & base styles
│   └── main.jsx                    # Vite React entry point
├── index.html                      # HTML document & meta tags
├── package.json                    # Project dependencies & scripts
├── vercel.json                     # SPA routing rewrite rule for Vercel
├── README.md                       # Documentation & run instructions
└── REQUIREMENTS-CHECKLIST.md       # Honest verification audit checklist
```

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your machine:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Open your terminal in the project directory and install the packages:
```bash
npm install
```

### 3. Run the Development Server
Start the local Vite dev server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

### 4. Build for Production
Create an optimized production bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
Verify the production build before deployment:
```bash
npm run preview
```

---

## 📄 How to Update Personal Details & Add Resume Later

### 1. Connecting a Real Resume PDF
When your resume PDF is ready:
1. Place your PDF file into the `public/` directory (e.g., `public/resume.pdf`).
2. Open `src/data/profile.js`.
3. Set `pdfUrl: "/resume.pdf"` and `available: true`:
   ```javascript
   resume: {
     available: true,
     toastMessage: "Opening resume...",
     pdfUrl: "/resume.pdf"
   }
   ```
4. Clicking any **Resume** button across the website will now open the real PDF in a new tab.

### 2. Updating Email and Phone Placeholders
Open `src/data/profile.js` and replace the placeholder strings:
```javascript
socials: {
  github: "https://github.com/mukti9537-oss",
  linkedin: "https://linkedin.com/in/mukti-chakraborty-552680389/",
  email: "your.real.email@example.com",
  phone: "+880 1XXXXXXXXX"
}
```

### 3. Updating Education Details
Open `src/data/education.js` and specify your exact polytechnic institute name and completion year once known.

---

## 🚀 Deployment to Vercel

This repository includes a `vercel.json` configuration file with single-page application (SPA) rewrite rules:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploying via Vercel CLI or Dashboard:
1. Push your repository to GitHub (`git push origin main`).
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and select this repository.
3. Keep default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Vercel will build and host the website with zero-configuration routing.

---

## 📜 License & Acknowledgments

Designed and developed for **Mukti Chakraborty**. All rights reserved.
Built using modern open-source web technologies: React, Tailwind CSS, Vite, and Lucide React.
