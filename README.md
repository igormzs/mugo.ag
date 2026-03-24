# Mugô Landing Page

This is the front-end implementation of the Mugô Landing Page, translated directly from Figma into responsive HTML and Tailwind CSS.

## 🚀 Technologies Used
- **HTML5:** Semantic HTML structure.
- **Tailwind CSS:** Modern utility-first CSS framework (configured via CDN for rapid prototyping).
- **Vanilla JavaScript:** Simple interactions for the Sidebar Menu, scrolling, and custom dynamic behaviors.
- **Phosphor Icons:** Consistent and modern iconography library.
- **Google Fonts:** The 'Urbanist' font is used for typography.

## 📂 Project Structure
- `index.html` - The main HTML document containing the structure, layout, and Tailwind classes.
- `style.css` - Custom CSS overrides and container rules (scroll-behavior, body centering, 1440px fixed wrapper).
- `script.js` - Contains the logic for opening/closing the sidebar and smooth scrolling.
- `assets/` - Directory containing images, logos, and placeholders used in the project.

## 💻 Running Locally
You don't need a build step for this setup since Tailwind is loaded via CDN.
1. Clone the repository.
2. Open `index.html` in your browser.
3. Alternatively, you can run a local server:
   ```bash
   python3 -m http.server 8080
   ```
   and access it at `http://localhost:8080`.

## 🎨 Design Reference
Built from Figma specifications, ensuring high fidelity for:
- Hexadecimal colors
- Typography scales (Urbanist)
- Spacing, Paddings, and Margins 
- Left-aligned text in cards and custom SVG-less Phosphor icons (`ph-plus`).
