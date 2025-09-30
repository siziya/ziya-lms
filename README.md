# Ziya LMS

A full-stack Learning Management System built with:

- **Frontend**: Next.js (App Router), TailwindCSS, Redux Toolkit
- **Backend**: Node.js, Express.js, Prisma ORM
- **Database**: PostgreSQL

## Project Structure

```
/
  frontend/   ← Next.js frontend
  backend/    ← Express API, Prisma, PostgreSQL config
```

## Getting Started

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

### 2. Frontend

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

## Environment Variables

See `/backend/.env.example` and `/frontend/.env.local.example` for required variables.
