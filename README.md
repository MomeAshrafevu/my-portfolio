# Premium Research & Software Engineering Portfolio

A highly customized, brutalist-minimal, and completely responsive developer portfolio built to showcase academic research in Medical Image AI, deep learning implementations, and frontend software engineering.

## 🖼️ Architecture & Design Philosophy
This portfolio is built away from generic templates, focusing on high-end editorial typography (`Playfair Display` + `Outfit` + `Space Mono`) and a structured layout that prioritizes scannability for recruiters and academic collaborators.

### 🌐 Live Deployment
* **Live Website:** [Click Here to View Live](https://momeashrafevu.github.io/my-portfolio/) *(Replace with your actual GitHub Pages URL)*
* **Source Code:** [GitHub Repository](https://github.com/MomeAshrafevu/my-portfolio)

---

## ⚡ Key Technical Features
* **Asynchronous Scroll Reveals:** Powered by JavaScript's `IntersectionObserver` API to dynamically inject fade-in classes (`.reveal.in`) as components cross the viewport threshold.
* **Dynamic Skill-Bar Benchmarking:** Tracks skills sequentially using custom HTML data-attributes (`data-w`) triggered only when the Skill section becomes visible, eliminating unnecessary initial load lags.
* **Auto-Hiding Core Navigation:** Smart UX scrolling mechanism that tracks directional deltas (`window.scrollY`) to auto-hide the navbar on scroll-down and instantly reveal it on scroll-up.
* **Fluid Typography & Grid System:** Implements CSS `clamp()` for micro-adaptive heading sizes and standard standard CSS grid configurations to maintain structured layouts on massive displays down to mobile viewports.

---

## 🛠️ Technology Stack & Frameworks
* **Markup:** Semantic HTML5 (optimized for search engines and accessibility).
* **Styling:** Modular CSS3 utilizing standard Root Variables (`:root`), Flexbox, Grid systems, and custom Webkit components.
* **Behavior:** Vanilla JavaScript (ES6+) utilizing native asynchronous web APIs for viewport tracking.
* **Icons & Vector Graphics:** Native, inline asset-optimized SVG code vectors for instant rendering speeds.

---

## 📂 Repository File Structure
```text
my-portfolio/
│
├── index.html    # Layout components, SVGs, and profile semantics
├── style.css     # UI layouts, color palettes, animations, and media queries
└── script.js     # IntersectionObservers for reveals, skill fills, and nav triggers
