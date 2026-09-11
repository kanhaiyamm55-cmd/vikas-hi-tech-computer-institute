# Vikas Hi Tech Computer Institute

Full-stack website for **Vikas Hi Tech Computer Institute Pvt. Ltd., Nagar Panchayat Rampur**.

## Features

- Institute home page
- Online course catalog
- Offline course/admission enquiry
- Course details
- Student registration/login UI
- Student dashboard
- Admin dashboard UI
- Express.js REST API starter
- MongoDB/Mongoose models
- Responsive design
- Institute poster asset included

## Technology

- Frontend: React + Vite
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose
- Styling: CSS
- Authentication: JWT-ready structure

## Folder structure

```text
vikas-hi-tech-computer-institute/
├── client/
│   ├── src/
│   ├── public/assets/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── package.json
└── README.md
```

## Run locally

### 1. Install dependencies

```bash
npm run install-all
```

### 2. Configure MongoDB

Copy:

```text
server/.env.example
```

to:

```text
server/.env
```

Then set your MongoDB connection string.

### 3. Start frontend + backend

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

## Important

This is a GitHub-ready development starter. Before using it for real payments or real student accounts, add production authentication, payment-gateway verification, secure video delivery, validation, rate limiting, and deployment environment variables.
