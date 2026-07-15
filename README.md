# Orangeflow

Orangeflow is a modern, responsive knowledge and discovery platform that lets users explore interesting topics, browse curated content, and manage a personalized account experience.

## Overview

Orangeflow combines a rich learning experience with secure authentication and a polished dashboard. Users can discover content across categories such as culture, science, travel, technology, wildlife, history, and more.

## Some Features

- Search users in the database with id(Search by flow id on the search icon on the navbar)
- Report issues notification goes to a discord webhook 
- Users can login with email, phone or username

### 1. User Authentication

- Sign up, login, and logout
- Forgot password and reset password flows
- Change password
- Edit profile details
- Delete account securely
- Protected routes for authenticated users

### 2. Personalized Dashboard

- User profile overview
- Account settings shortcuts
- Activity and account management tools
- Secure access to private pages

### 3. Explore Experience

- Browse curated content by topic
- Category-based discovery pages for:
  - Architecture
  - Artificial Intelligence
  - Automobile
  - Aviation
  - Countries
  - Education
  - Fashion
  - Food and Cuisine
  - Healthcare
  - History
  - Science and Research
  - Space and Astronomy
  - Travel and Tourism
  - Wildlife
  - Wonders Dashboard

### 4. Content and Discovery Features

- Featured slides and highlights
- Fact widgets
- World facts and daily knowledge snippets
- Aviation information resources
- Wonders and travel-inspired content
- Community guidelines and support resources

### 5. Helpful Site Pages

- Home page with featured content
- About page
- Contact page
- Help and Support page
- Privacy Policy
- Copyright Policy
- FAQ section

### 6. UI and Experience

- Responsive design for desktop and mobile
- Modern navigation bar and dropdown menus
- Search experience
- Notifications and login history views
- Smooth carousel and category sliders

## Tech Stack
- MERN Stack 

### Frontend

- React
- Vite
- React Router
- Zustand for state management
- Axios for API calls
- Tailwind CSS
- Framer Motion
- Sonner for toast notifications
- Lucide for icons 

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT-based authentication
- Cookie-based session handling
- Email support for password recovery

## Project Structure

- client/: React frontend
- server/: Express backend and API routes

## Local Development

### Prerequisites

- Node.js
- npm
- MongoDB connection available

### Run the frontend

cd client
npm install
npm run dev
```

### Run the backend

cd server
npm install
npm run dev
```

## Deployment

The project is prepared for deployment on Vercel with separate frontend and backend setups.

## Notes

Orangeflow is designed to be both an informative content platform and a secure, user-friendly web application.
