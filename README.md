# Frontend React App

This project is a consumer-facing web application built with **React** and **Vite**. It features modern tooling, fast development with hot module replacement, and uses **TailwindCSS** for styling. The app includes essential pages for user onboarding, authentication, profile management, and order history.

## Features
- ⚡ Fast development with Vite
- 🎨 Styled with TailwindCSS
- 🔄 Routing with React Router
- 🧑‍💼 Pages: Landing, Signup, Login, Profile, Order History
- 📦 Linting with ESLint

## Getting Started

<h1>Clone and npm install --legacy-peer-deps </h1>

### Prerequisites
- [Node.js](https://nodejs.org/) (v22.16.0)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (for containerization)

### Development
```bash
npm run dev
```

## Folder Structure
```
frontend/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images and other assets
│   ├── components/   # Reusable React components
│   │   ├── consumer/ # Consumer-specific components
│   │   └── farmer/   # Farmer-specific components
│   ├── pages/
│   │   ├── consumer/ # Consumer-facing pages
│   │   └── farmer/   # Farmer-facing pages
│   ├── App.jsx       # Main app component with routes
│   ├── main.jsx      # App entry point
│   └── index.css     # Global styles (TailwindCSS)
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── ...
```

## Main Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh


## License
This project is licensed under the terms of the [LICENSE](LICENSE) file.
