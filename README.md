
# Mohamed Kamel — Premium Developer Portfolio

> A premium, futuristic, AI-inspired personal portfolio built with pure HTML, CSS, and Vanilla JavaScript.

![Portfolio Preview](https://placehold.co/1200x600/080b10/ffffff?text=Mohamed+Kamel+Portfolio)

---

## ✨ Overview

This project is a modern personal portfolio website designed for  **Mohamed Kamel** , showcasing software engineering experience, technical skills, specializations, projects, and contact information.

The portfolio focuses on a premium **dark / illuminated / futuristic** visual identity inspired by modern developer platforms and AI products.

It is intentionally built without a frontend framework to keep the project:

* Lightweight
* Fast
* Easy to understand
* Easy to customize
* Easy to deploy
* Dependency-free on the application side

---

## 🚀 Live Demo

> Add your live deployment URL here.

```text
https://your-portfolio.vercel.app
```

---

# 🎯 Project Goals

The main goals of this portfolio are:

* Present Mohamed Kamel as a professional Software Engineer.
* Showcase technical skills and proficiency levels.
* Display software engineering specializations.
* Highlight selected projects.
* Present the technology stack.
* Provide a professional contact section.
* Create a strong modern visual identity.
* Provide smooth animations and micro-interactions.
* Maintain excellent responsiveness across devices.
* Keep the codebase simple and maintainable.

---

# 🧩 Features

## 🏠 Hero Section

The landing section includes:

* Personal introduction
* Professional role
* Availability indicator
* Animated typography
* Call-to-action buttons
* Experience/project statistics
* AI-inspired animated visual
* Floating technology cards

---

## 👨‍💻 About Section

Provides a short professional introduction explaining:

* Software engineering mindset
* Product development
* System architecture
* AI
* Cloud technologies
* Continuous learning

It also contains an interactive developer-style terminal component.

---

## 🛠️ Specializations

The portfolio presents four primary areas:

### Full Stack Development

Technologies include:

* Angular
* ASP.NET Core
* Node.js
* REST APIs
* Databases

### Mobile Development

Technologies include:

* Flutter
* Dart
* Supabase
* REST APIs

### AI & Intelligent Systems

Technologies include:

* Python
* Machine Learning
* AI
* TensorFlow

### System Design

Concepts include:

* Scalable Architecture
* Caching
* Redis
* Cloud Infrastructure
* Load Balancing
* Databases
* Distributed Systems

---

# 📊 Skills Visualization

The portfolio includes animated proficiency bars.

Current example skills:

| Technology      | Level |
| --------------- | ----: |
| JavaScript      |   90% |
| C# / .NET       |   88% |
| Flutter / Dart  |   87% |
| Angular         |   85% |
| SQL / Databases |   86% |
| Python          |   82% |
| System Design   |   80% |

> These percentages are placeholders and should be updated according to the actual skill level.

The bars are animated when the skills section enters the viewport.

---

# 💻 Technology Stack

The project itself uses a minimal frontend stack.

### Core

* HTML5
* CSS3
* Vanilla JavaScript

### UI

* Responsive CSS
* CSS Grid
* Flexbox
* CSS Variables
* CSS Gradients
* CSS Animations
* Glassmorphism
* Neon / Glow effects

### Icons

The project uses:

**Lucide Icons**

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

### Fonts

The project uses Google Fonts:

* Inter
* Space Grotesk

---

# 🎨 Design System

The visual identity is based on a futuristic dark interface.

### Primary Background

```text
#05070A
```

### Accent Colors

```text
Purple
#7C5CFF

Cyan
#00E5FF

Green
#51FE00
```

### Design Principles

The UI uses:

* Dark mode
* Glassmorphism
* Soft borders
* Ambient lighting
* Neon gradients
* Large typography
* Generous negative space
* Micro-interactions
* Subtle motion

The design is inspired by modern products such as AI interfaces, developer tools, SaaS platforms, and futuristic dashboards.

---

# ✨ Animations & Interactions

The website includes several custom interactions.

## Scroll Reveal

Sections animate into view when they enter the viewport.

Implemented using:

```javascript
IntersectionObserver
```

---

## Animated Skill Bars

Skill bars start at:

```css
width: 0;
```

and animate to their target percentage when visible.

---

## Cursor Glow

A dynamic radial glow follows the mouse pointer.

---

## Magnetic Buttons

Primary CTA buttons slightly follow the mouse cursor.

---

## Card Tilt

Project and service cards have a subtle 3D tilt effect when the user moves the mouse over them.

---

## Animated Background

The website uses:

* Grid patterns
* Gradient orbs
* Blur effects
* Animated orbital rings

to create the illuminated futuristic environment.

---

## Animated Statistics

The numbers in the Hero section animate from `0` to their target value.

---

# 📁 Project Structure

```text
mohamed-portfolio/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### `index.html`

Contains the complete semantic structure of the website:

* Navigation
* Hero
* About
* Specializations
* Skills
* Projects
* Process
* Contact
* Footer

---

### `style.css`

Contains:

* Design system
* Colors
* Layout
* Responsive design
* Animations
* Components
* Cards
* Buttons
* Background effects
* Typography

---

### `script.js`

Contains:

* Mobile navigation
* Scroll reveal
* Skill animations
* Cursor effects
* Magnetic buttons
* Card tilt
* Active navigation
* Smooth scrolling
* Animated counters
* Project hover effects

---

# ⚙️ Requirements

No backend is required.

No Node.js is required to run the basic version.

No database is required.

No API keys are required.

You only need:

* A modern web browser
* VS Code (recommended)
* Optional: Live Server extension

---

# 🧑‍💻 Run Locally

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Example:

```bash
git clone https://github.com/mohamedkamel/mohamed-portfolio.git
```

---

## 2. Enter the Project

```bash
cd mohamed-portfolio
```

---

## 3. Open in VS Code

```bash
code .
```

---

## 4. Run the Website

### Option 1 — Directly

Open:

```text
index.html
```

in your browser.

### Option 2 — Live Server

Install the VS Code extension:

```text
Live Server
```

Then right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

The website should open at something similar to:

```text
http://127.0.0.1:5500/
```

---

# ✏️ Customization

The portfolio was designed to be easy to customize.

---

## Change Name

Open:

```text
index.html
```

Search for:

```html
Mohamed Kamel
```

Replace it with your desired name.

---

## Change Job Title

Search for:

```text
SOFTWARE ENGINEER · FULL STACK · AI
```

and update it.

Example:

```text
FULL STACK DEVELOPER · AI ENGINEER
```

---

## Change Skills

Inside:

```text
index.html
```

find:

```html
<div class="skill">
```

Example:

```html
<div class="skill">

    <div class="skill-info">
        <span>JavaScript</span>
        <strong>90%</strong>
    </div>

    <div class="progress">
        <span data-width="90%"></span>
    </div>

</div>
```

Change:

```html
90%
```

and:

```html
data-width="90%"
```

to the desired value.

---

# 🔗 Add Social Media Links

Inside the Contact section you will find:

```html
<div class="social-links">

    <a href="#" aria-label="GitHub">
        <i data-lucide="github"></i>
    </a>

    <a href="#" aria-label="LinkedIn">
        <i data-lucide="linkedin"></i>
    </a>

</div>
```

Replace:

```html
href="#"
```

with your real profile.

Example:

```html
<a
    href="https://github.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
>
```

---

# 📧 Add Your Email

Find:

```html
<a href="mailto:hello@example.com">
```

and replace it with your real email.

Example:

```html
<a href="mailto:your@email.com">
```

---

# 🖼️ Adding a Profile Image

The current version uses a futuristic AI visual instead of a profile photo.

If you want to add a real profile image later, create:

```text
assets/
└── profile.jpg
```

Then reference it from HTML:

```html
<img
    src="assets/profile.jpg"
    alt="Mohamed Kamel"
>
```

---

# 🎨 Changing Colors

The main colors are controlled from the top of:

```text
style.css
```

Example:

```css
:root {

    --bg: #05070a;

    --accent: #7c5cff;

    --accent-2: #00e5ff;

    --green: #51fe00;

}
```

This makes it easy to create a different visual identity without changing the entire stylesheet.

---

# 📱 Responsive Design

The website is responsive and optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive breakpoints are implemented using CSS media queries.

Example:

```css
@media (max-width: 700px) {

    /* Mobile styles */

}
```

---

# 🚀 Deployment

The project can be deployed using any static hosting provider.

Recommended platforms:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages

No backend server is required.

---

# ▲ Deploy with Vercel

After pushing the project to GitHub:

1. Open Vercel.
2. Import the GitHub repository.
3. Select the project.
4. No build command is required.
5. Deploy.

Because this is a static website, Vercel can serve the project directly.

---

# 🐙 Push to GitHub

Initialize Git:

```bash
git init
```

Add the files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial portfolio"
```

Add your GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Push:

```bash
git branch -M main
git push -u origin main
```

---

# 🔐 Security

This project currently does not contain:

* API keys
* Passwords
* Database credentials
* Backend secrets
* Authentication tokens

If a backend is added in the future, sensitive environment variables should **never** be committed to GitHub.

Use:

```text
.env
```

and add it to:

```text
.gitignore
```

---

# 🤖 AI & ChatGPT Usage

AI tools can be used as part of the development workflow for:

* UI ideation
* Component structure
* Content generation
* Code refactoring
* Accessibility improvements
* SEO optimization
* Animation ideas
* UX improvements
* Debugging
* Documentation

The portfolio itself is implemented using standard frontend technologies and does not require an AI API to operate.

---

# 🔮 Future Roadmap

The current version is intentionally frontend-only.

Future versions can introduce:

### Version 2

* Backend API
* Dynamic project management
* Dynamic skills management
* Contact form
* Email notifications
* Admin dashboard

### Version 3

* AI Portfolio Assistant
* ChatGPT-powered chatbot
* AI project recommendations
* Natural-language portfolio search

### Version 4

* Analytics dashboard
* Visitor statistics
* Project analytics
* CMS
* Authentication

### Version 5

* Full cloud architecture
* Database
* API Gateway
* Redis caching
* CDN
* Monitoring
* Production deployment

---

# 🧠 Architecture

### Current Architecture

```text
                 ┌─────────────────────┐
                 │       Browser       │
                 └──────────┬──────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │       index.html        │
              └────────────┬────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
       ┌────────────┐              ┌────────────┐
       │  style.css │              │ script.js  │
       └────────────┘              └────────────┘
```

### Future Architecture

```text
                     User
                       │
                       ▼
                 ┌───────────┐
                 │   CDN     │
                 └─────┬─────┘
                       │
                       ▼
               ┌───────────────┐
               │   Frontend    │
               └───────┬───────┘
                       │
                       ▼
               ┌───────────────┐
               │  API Gateway  │
               └───────┬───────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
      Projects      Contact       AI
        API           API         API
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
                  ┌─────────┐
                  │Database │
                  └─────────┘
```

---

# 📈 Performance Philosophy

The portfolio is designed with performance in mind.

The project avoids unnecessary frontend frameworks and heavy dependencies.

Main performance principles:

* Minimal JavaScript
* No frontend framework
* CSS-based animations
* Lazy execution using IntersectionObserver
* Small DOM footprint
* CDN-hosted fonts/icons
* No unnecessary API calls

---

# ♿ Accessibility

The project uses several accessibility practices:

* Semantic HTML structure
* Descriptive `aria-label` attributes
* Readable contrast
* Keyboard-friendly links
* Responsive typography
* Alternative text for future images

Accessibility can be expanded further as the project evolves.

---

# 📜 License

This project is intended to be used as a personal portfolio.

You may use the structure and implementation as inspiration for your own portfolio.

For redistribution or commercial reuse, contact the author.

---

# 👨‍💻 Author

## Mohamed Kamel

**Software Engineer · Full Stack Developer · AI Enthusiast**

Interested in:

* Software Engineering
* Full Stack Development
* Mobile Development
* Artificial Intelligence
* System Design
* Cloud Technologies
* SaaS Products
* Scalable Architecture

---

## 🌐 Connect

Replace the following placeholders with your real profiles:

* GitHub: `https://github.com/YOUR_USERNAME`
* LinkedIn: `https://linkedin.com/in/YOUR_USERNAME`
* Instagram: `https://instagram.com/YOUR_USERNAME`
* Email: `your@email.com`

---

## ⭐ If You Like This Project

If you find this portfolio useful or inspiring:

```text
⭐ Star the repository
🍴 Fork the project
🧑‍💻 Build your own version
🚀 Deploy it
```

---

### Built with HTML · CSS · JavaScript

**Mohamed Kamel © 2026**
