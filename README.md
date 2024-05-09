# Travelopia 🌎


## Introduction 🔔
Travelopia is a platform dedicated to providing unique travel experiences curated by travel experts. From wildlife encounters to polar expeditions, and from cultural tours to yachting adventures, Travelopia offers a diverse range of travel opportunities designed to offer new perspectives on the world.

## Content
- [Technology Stack](Technology-Stack)
- [Deployed App](https://travelopia-beige.vercel.app/)
- [Directory Structure](#directory-structure)
- [Features](#features)
- [Installation & Getting Started](#installation--getting-started)
- [Design Decisions or Assumptions](#design-decisions-or-assumptions)
- [Credentials](#credentials)

## Technology Stack  ✍️
## Frontend:
- React: A JavaScript library for building user interfaces.
- Material UI:Alibrary used to build navbar,login and signup cpmponent
- Vercel: For deploying the frontend part of the project
## Backend:
- Node.js: A JavaScript runtime for building server-side applications.
- MongoDB: A NoSQL database for storing and managing travel data.
- Express.js: A web application framework for Node.js, used for building RESTful APIs.
- Render: For deploying the backend part data of the project

## Deployed App 🖊️
Frontend: [https://travelopia-beige.vercel.app/]

Backend: [https://travelopia-assignment.onrender.com/]

## Directory Structure
```
Travelopia/
├─ backend/
│  ├─ config/
│  │  └─ db.js
│  ├─ controller/
│  │  └─ usercontroller.js
│  ├─ middleware/
│  │  └─ auth.middleware.js
│  ├─ model/
│  │  ├─ blacklist.model.js
│  │  ├─ trip.model.js
│  │  └─ user.model.js
│  ├─ routes/
│  │  ├─ tripRouters.js
│  │  └─ userRoutes.js
│  └─ index.js
└─ frontend/
   ├─ src/
   │  ├─ public/
   │  ├─ assets/
   │  │  └─ img/
   │  ├─ Components/
   │  │  ├─ AdminDashboard.jsx
   │  │  ├─ AdminLogin.jsx
   │  │  ├─ Login.jsx
   │  │  ├─ Navbar.jsx
   │  │  └─ SignUp.jsx 
   │  │  ├─ Trip.jsx
   │  ├─ middleware/
   │  │  ├─ AuthContext.jsx
   │  ├─ Routes/
   │  │  ├─ AllRoutes.jsx
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  ├─ themejsx
   │  ├─ api.js
   │  └─ index.html
```

## Features
- Travel Planning: Explore and plan unique travel experiences tailored by experts.
- Admin Panel: Access an admin panel for managing trips and user accounts.
- Planned Trips: Browse and discover planned trips with detailed itineraries.

## Credentials
Provided credentials for authenticated pages:

User & Admin Login: admin@gmail.com

Password: admin123

## Video Walkthrough of the project

https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/41964f6e-1625-4487-8e9c-e94161c2f628


## Design
## Homepage
![1t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/933df00d-a270-4967-88fe-456f9cb44456)


## LoginPage
![2t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/7ce8e6b7-2293-4d04-bd72-b3ee7870bfb8)

## SignUp Page
![25t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/d9332c42-9a2a-41e9-b45d-e14576902e09)

## Admin Login Page
![3t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/ef52dc9a-ce81-4b50-9c65-6605c0a5579c)

## Admin Dashboard
![4t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/77dc0358-a7a7-4048-8424-db5cf5e962d7)


## Installation & Getting Started

To run the project locally, follow these steps:
```
## Install the Project
git clone https://github.com/MayankBelwal05/Travelopia-Assignment.git

## Frontend
cd frontend
npm install
npm run dev

## Backend
cd backend
npm install
npm run server
```

## Design Decisions or Assumptions
Use of a modern and minimalist design for enhanced user experience.
Implementation of user authentication to secure user data and access.

## Happy Tavel from the team Travelopia!❤️❤️

