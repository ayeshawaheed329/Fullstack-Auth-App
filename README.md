# Fullstack-Auth-App

This repository contains a full-stack auth module developed using React for the frontend and Nest for the backend, with MongoDB as the database. The module aims to provide users with functionalities like user signup, and signin.

## Table of Contents

- [Introduction](#introduction)
- [Technology Stack](#technology-stack)
- [Functionality Overview](#functionality-overview)
  - [Frontend Features](#frontend-features)
  - [Backend API Structure (RESTful)](#backend-api-structure-restful)
- [Usage](#usage)


## Introduction

This is a full-stack app that enables users to signup and sign with all the validations. 

## Technology Stack

- **Frontend**: React.js
- **User Interface Library**: Ant Design
- **Styling**: Scss
- **Data Management**: Redux
- **HTTP Requests**: Axios (frontend)
- **Backend**: Nest and TypeScript
- **Database**: MongoDB
- **Database Interaction - ORM**: Prisma (backend)
- **Authentication**: JWT token
- **Password Encryption**: bcryptjs
- **Validation**: class-validator and class-transformer
- **Securing HTTP Headers**: Helmet

### Frontend Features

- **Sign Up**: Allows users to register, creating a new account.
- **Sign In**: Authenticates users by sign in form and based on JWT token get access to application home page.
- **Home Page**: Displays application's home page with logout functionality.


### Backend API Structure (RESTful)

- **User Signup API**: Registers users, encrypts passwords using bcryptjs.
- **User Login API**: Generates JWT tokens for authentication.
- **Input Validation**: Uses class-validator for user input validation.

## Usage

1. **Prerequisites**:
   The following depdencies should be installed.
   - Node.js
   - Npm or Yarn
   

2. **Setup**:
   - Clone the repository using https://github.com/ayeshawaheed329/Fullstack-Auth-App.git.

3. **Frontend**:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install depdencies.
   - Run `npm start` to start the React application.

4. **Backend**:
   - Navigate to the `backend` directory.
   - Run `npm install` to install depdencies.
   - Run `npm start` to launch the server.

5. **Access**:
   - Open the browser and visit `http://localhost:3000` to access the front-end application.
   - For making Api requests, use `http://localhost:3001` as base url with end points.




