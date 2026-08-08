# 📝 Blog App

A modern and responsive Blog Application built with **React.js** and **Appwrite**.  
Users can create, read, update, and delete blog posts with authentication and image upload functionality.

## 🌐 Live Demo

🔗 [Visit Blog App](https://blog-app-virid-ten.vercel.app/)

## ✨ Features

- 🔐 User Authentication
  - User Registration
  - User Login
  - User Logout

- 📝 Blog Posts
  - Create new posts
  - Read blog posts
  - Edit posts
  - Delete posts
  - View individual posts

- 🖼️ Image Upload
  - Upload featured images
  - Store images using Appwrite Storage

- 👤 User-based Posts
  - Users can manage their own posts

- 📱 Responsive Design
  - Mobile-friendly
  - Tablet-friendly
  - Desktop-friendly

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- React Router
- React Hook Form

### Backend

- Appwrite Authentication
- Appwrite Database
- Appwrite Storage

### Tools

- Vite
- Git
- GitHub
- VS Code

## 📂 Project Structure

```text
src/
│
├── appwrite/
│   ├── Auth.js
│   ├── Config.js
│   └── Database.js
│
├── components/
│   ├── Header/
│   ├── Footer/
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   └── ...
│
├── store/
│   └── ...
│
├── App.jsx
├── main.jsx
└── index.css
