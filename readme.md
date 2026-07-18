# SelectCDN

> A minimal, clean utility to manage, download, and directly insert popular CDN dependencies into your project.

![Version](https://img.shields.io/badge/version-v1.1.0-blue)
![License](https://img.shields.io/badge/license-Apache--2.0-green)
![Status](https://img.shields.io/badge/status-Active-success)

---

> [!NOTE]
> This plugin is open for public use and modifications. You are welcome to review, fork, and build upon this code to suit your development environment.

## ✨ Features

- **Curated & Global search:** Access a built-in library of popular CDNs or search millions of assets on-demand through direct integration with the `cdnjs` API.
- **Smart Context Detection:** Automatically detects your active file type (`.js`, `.css`, etc.) to show matching packages and adjusts the inserted output into HTML tags, JS `import` statements, or CSS `@import` rules.
- **Local File Downloader:** Download CDN files directly into your active project workspace folder using Acode's native file system interface for offline development.
- **HTML Bundle Generator:** Select multiple libraries at once and compile them into a boilerplate HTML template format.
- **Custom CDN Management:** Add your own custom CDN configurations, with backup utilities to export or import your custom catalog as JSON.
- **Favorites & Recents:** Quickly bookmark frequently used dependencies and view previously used assets.

---

## 📸 Screenshots

<details>
<summary><b>Click Here to View</b></summary>

<br>

<p align="center">
  <img src="https://pro-bandey.github.io/shots/SelectCDN/001.png" width="45%" alt="SelectCDN Screenshot 1">
  <img src="https://pro-bandey.github.io/shots/SelectCDN/002.png" width="45%" alt="SelectCDN Screenshot 2">
</p>

<p align="center">
  <img src="https://pro-bandey.github.io/shots/SelectCDN/003.png" width="45%" alt="SelectCDN Screenshot 3">
  <img src="https://pro-bandey.github.io/shots/SelectCDN/004.png" width="45%" alt="SelectCDN Screenshot 4">
</p>

<p align="center">
  <img src="https://pro-bandey.github.io/shots/SelectCDN/005.png" width="45%" alt="SelectCDN Screenshot 5">
  <img src="https://pro-bandey.github.io/shots/SelectCDN/006.png" width="45%" alt="SelectCDN Screenshot 6">
</p>

</details>

---

## 📦 Installation

1. Open **Acode**.
2. Go to **Settings** > **Plugins**.
3. Search for **SelectCDN**.
4. Install the plugin and restart Acode if required.

---

## ⚙️ Configuration

While the plugin is pre-configured out of the box, it utilizes local storage to manage your personal setups:

- **Favorites Catalog** (`cdn_favs`) – Automatically tracks assets you star for quick access.
- **Recents History** (`cdn_recents`) – Keeps a log of your last 10 used libraries.
- **Custom CDNs** (`cdn_custom`) – Stores custom entries. You can back up or migrate these using the **Export All** and **Import** buttons located in the "Custom" category panel.

---

## 🚀 How to Use

1. **Open your workspace** and ensure you have an active file open.
2. **Launch SelectCDN** via the command palette (search for `SCDN` or `cdn-library`) or press `Ctrl+Shift+C` (`Cmd+Shift+C` on macOS).
3. **Filter or Search** for your target library using category chips or the real-time search bar.
4. **Choose Your Action:**
   - **Insert:** Injects the dependency directly into the cursor position.
   - **URL / Tag:** Copies either the raw link or the fully generated HTML element tag to your clipboard.
   - **Save:** Fetches and downloads the script/stylesheet file directly to your local workspace directory, inserting a local relative path in your file.
   - **Docs:** Opens the official documentation for the library in your browser.
5. **Generate Bundles:** Click the "+" action button on multiple libraries, then tap the floating box icon on the bottom right to review and copy a complete HTML boiler-plate bundle containing all your selections.

---

## 💬 Feedback & Support

If you encounter issues or have suggestions, please open an issue in the repository. Please include:

- Plugin version
- Acode version
- Android version (if applicable)
- Steps to reproduce
- Screenshots or console log output (if applicable)

---

## 🤝 Contributing / Build Your Own

Contributions to improve package curation, add translation keys, or optimize asset resolution are welcome.

1. Fork the repository.
2. Create a descriptive feature branch (`git checkout -b feature/improvement`).
3. Make and test your changes.
4. Submit a Pull Request outlining your updates.

---

## 🙏 Credits

- **Acode Team** – For the editor framework and API.
- **cdnjs** – For the global index search and version resolver API.
- **Simple Icons** – For providing clean, high-contrast CDN logos.

---

## 📄 License

Licensed under the **Apache 2.0 License**.
