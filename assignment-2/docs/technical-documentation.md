

# Technical Documentation

## 1. Overview

This technical documentation outlines the architecture, technology stack, and structural design of the Personal Portfolio Website. The project is structured cleanly to ensure maintainability, responsiveness, and seamless local execution without requiring a backend server.

## 2. Technology Stack & Implementation

* **HTML5 (`index.html`):** Provides the core semantic structure, breaking the web page down into logical sections (`About Me`, `Projects`, and `Contact`).
* **CSS3 (`css/styles.css`):** Manages all visual styling, layout responsiveness, and dark mode transitions using modern techniques:
* **Flexbox:** Implemented in the *About Me* section for flexible alignment and wrapping.
* **CSS Grid:** Implemented in the *Projects* section using `auto-fit` and `minmax()` for adaptable grid cards across different viewports.


* **JavaScript (`js/script.js`):** Handles client-side interactivity by listening for click events on the theme toggle button to switch the `body` class between light and dark modes.

## 3. Project Directory Architecture

The project files are organized into dedicated subfolders for clarity and separation of concerns:
```text
assignment-1/
│
├── index.html                  # Main entry point and document structure
├── css/
│   └── styles.css              # Custom styles and dark mode overrides
├── js/
│   └── script.js               # DOM(Document Object Model) manipulation and event listeners
│ 
├── images/                      # Media directory for profile and project images
│   ├── JOOD-3.png
│   ├── NET.jpeg
│   └── seraj.png                 
└── docs/
   ├── ai-usage-report.md      # Documentation of AI integration and usage
   └── technical-documentation.md # System architecture and implementation details
```

## 4. Responsive Design & Compatibility

* **Viewport Adaptability:** Tested using browser Developer Tools to ensure seamless scaling across mobile devices, tablets, and desktop displays.
* **Relative Asset Pathing:** All resources (stylesheets, scripts, and images) utilize relative paths pointing to their respective directories (`css/`, `js/`, `images/`) to ensure broken link prevention and smooth cross environment execution.