# Travelopia 🔔

## Introduction
Travelopia is a platform dedicated to providing unique travel experiences curated by travel experts. From wildlife encounters to polar expeditions, and from cultural tours to yachting adventures, Travelopia offers a diverse range of travel opportunities designed to offer new perspectives on the world.

## Content
- [Technology Stack](#Technology-Stack)
- [Deployed App](#deployed-app)
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
Travelopia/
├─ backend/
│  ├─ config/
│  │  └─ db.js
│  ├─ controller/
│  │  └─ usercontroller.js.js
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
   │  ├─ src/
   |  │  ├─ assets/
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

## Features
- Travel Planning: Explore and plan unique travel experiences tailored by experts.
- Admin Panel: Access an admin panel for managing trips and user accounts.
- Planned Trips: Browse and discover planned trips with detailed itineraries.
## Video Walkthrough of the project

## Design
## Homepage
![1t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/7bdbbc9a-a40c-4b32-bf65-74b9a9c7ba8e)

## LoginPage
![2t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/384795c6-968e-408f-8ea7-bde10e338145)

## Admin Login Page
![3t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/cda8a0ee-4ba7-4670-b3da-7e289147061c)

## Admin Dashboard
![4t](https://github.com/MayankBelwal05/Travelopia-Assignment/assets/147751671/a3bfad87-3713-4968-bea9-36268f4996f9)

## Credentials
Provided credentials for authenticated pages:

User & Admin Login: admin@gmail.com
Password: admin123


## Installation & Getting Started

To run the project locally, follow these steps:

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


## Design Decisions or Assumptions
Use of a modern and minimalist design for enhanced user experience.
Implementation of user authentication to secure user data and access.

## Happy Tavel from the team Travelopia!❤️❤️

