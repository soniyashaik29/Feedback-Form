# 📝 Feedback Form – Backend Project

A backend feedback form application built using Node.js, Express, and MongoDB Atlas.

---

## 🌐 Live Demo
🔗 [Live Demo]- https://soniyashaik29.github.io/Feedback-Form/

---

## 📌 Project Overview
- Collects user feedback
- Accepts feedback data from users
- Stores data in MongoDB Atlas
- Uses environment variables for security
- Beginner-friendly backend project

---

## 🛠️ Backend Requirements

Before running this project, make sure you have:

1. Node.js (v16 or higher)
2. npm (comes with Node.js)
3. MongoDB Atlas account
4. Git installed on your system

---

## 📦 Required NPM Packages

Install the following packages:

```bash

npm install express mongoose dotenv cors

```
---

## 🚀 Server Setup (server.js)

Create server.js file

Import express, mongoose, dotenv

Initialize express app

Connect MongoDB using mongoose

Start server on a port

Server will run on: http://localhost:5000

---

## 🌍 MongoDB Atlas Setup

Go to MongoDB Atlas

Sign up or login

Create a new project

Create a FREE shared cluster

Create a database user (username & password)

Go to Network Access → Add IP address: 0.0.0.0/0

Get MongoDB connection string (URI)

---

## 🔐 Environment Variables

Create a .env file in the root folder:

PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/feedbackform


(Important:Replace username, password, and cluster name

Never push .env file to GitHub

Add .env to .gitignore)

---

```bash
npm install
npm start
```

---

## 📦 Clone the Repository
git clone https://github.com/soniyashaik29/Feedback-form.git

---
