# Global Book of Spiritual Records - Letterhead Studio 📜

A web application designed for **Global Book of Spiritual Records** to paste, format, and stamp official letter text onto high-resolution letterheads with **automatic multi-page overflow detection & pagination**, complete typography controls, and full-bleed A4 PDF printing.

---

## 🌟 Key Features

1. **Automatic Multi-Page Overflow Detection**:
   - Paste any length of text (from a short memo to a 5-page official citation).
   - The engine measures text against the letterhead's exact printable boundary and automatically determines how many pages are required.
   - Paragraphs cleanly flow from Page 1 to Page 2, Page 3, etc., without clipping or awkward breaks.
   - Insert manual page breaks at any time by typing `---` on a new line.

2. **Font Size & Color Controls**:
   - **Font Size**: Real-time slider and numeric box (11px – 28px).
   - **Font Color**: Color picker + executive presets (True Black, Charcoal, Royal Navy, Burgundy Maroon, Imperial Bronze, Forest Green).
   - **Font Families**: Formal serif & sans-serif fonts including *EB Garamond*, *Georgia*, *Times New Roman*, *Inter*, *Merriweather*, *Cinzel*, and *Noto Sans Devanagari* (for Hindi / Sanskrit).
   - **Styling**: Bold, Italic, Paragraph Indentation, Line Spacing (1.1x – 2.4x), Paragraph Gap, and Text Alignment (Justify, Left, Center, Right).

3. **4 Official Letterhead Designs Included**:
   - **Design 1**: Standard English (Full width writing canvas, CEO Dr. Omprakash B Tiwari title).
   - **Design 2**: Focus Areas Sidebar English (With left ornamental focus areas column).
   - **Design 3**: Standard Hindi (With Hindi tagline header).
   - **Design 4**: Focus Areas Sidebar Hindi (Sidebar + Hindi tagline).
   - *Plus*: Extra alternate variants and Custom Letterhead image upload support (PNG, JPG, WEBP).

4. **Calibrated Margins & Visual Guides**:
   - Margins automatically adapt when switching between Standard (7% left margin) and Sidebar (21% left margin) designs.
   - Fine-tune top, bottom, left, and right margins anytime.
   - Toggleable "Show Margin Guides" overlay to visually inspect the printable box.

5. **1-Click Print & PDF Export**:
   - Built with specialized `@media print` rules for borderless A4 output.
   - Click **Print / Save PDF** or press `Ctrl + P` to produce high-resolution letterhead PDFs.

---

## 🚀 How to Host for Free on GitHub Pages

You can host this entire website on GitHub Pages in under 2 minutes:

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g. `letterhead-studio`).
   - Choose **Public** and click **Create repository**.

2. **Upload the Files**:
   - Upload all files from this folder (`index.html`, `style.css`, `app.js`, `README.md`, and the `images/` folder) to your repository.
   - *Using Git command line:*
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Letterhead Studio"
     git branch -M main
     git remote add origin https://github.com/<YOUR-USERNAME>/letterhead-studio.git
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, go to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select `Deploy from a branch`.
   - Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
   - Within 1–2 minutes, your website will be live at:
     `https://<YOUR-USERNAME>.github.io/letterhead-studio/`

---

## 💻 Running Locally on Your Computer

You don't need any server or Node.js installed:
- Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave!
