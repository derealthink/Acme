# Acme

A web agency website project with a React frontend and a separate Node.js backend. This repository is separate from my 42 School curriculum collection.

## Project structure

| Directory | Purpose |
| --- | --- |
| `src/` | React pages and components, including the homepage, pricing, FAQ, login and registration |
| `src/context/` | Authentication context |
| `Acme_backend/` | Backend server, database configuration, middleware, models and routes |

## Frontend development

Requires Node.js and npm compatible with the Vite version in `package.json`.

```sh
git clone https://github.com/derealthink/Acme.git
cd Acme
npm ci
npm run dev
```

Use the local URL printed by Vite.

```sh
npm run build    # create the frontend production bundle
npm run preview  # serve that bundle locally
npm run lint     # run ESLint
```

## Backend

The backend has its own `package.json` and database configuration. Review `Acme_backend/server.js`, `Acme_backend/config/database.js` and the authentication middleware before configuring a local backend. The frontend development server alone does not start backend services or provide working account flows.

## Stack

React, React Router, Vite, Tailwind CSS, React Hook Form and a separate JavaScript backend. The repository currently provides application source rather than a documented production deployment.
