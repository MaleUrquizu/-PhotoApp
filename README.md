# PhotoApp - Project Documentation

Welcome to the documentation of PhotoApp, an exciting web application that allows you to view user photos, create, edit, and delete your own posts. Here you will find important information on how to install and use PhotoApp, as well as the components and technologies that make this application possible.

 [![home.png](https://i.postimg.cc/2yJzDJjW/home.png)](https://postimg.cc/4H6CvW94)

## Project Description

PhotoApp is a web application designed for sharing images and special moments. Its key features include:

- Viewing user photos.
- Creating, editing, and deleting your own posts.
- Cloud-based image storage using Backblaze B2.
- Data storage using MongoDB Atlas.
- Frontend developed in React.
- Backend built with Node and Express.js.

## Prerequisites

Make sure you have the following prerequisites before getting started:

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).

## Installation

Follow these steps to set up and run PhotoApp on your local machine:

1. Clone the repository

   ```bash
   git clone https://github.com/MaleUrquizu/-PhotoApp.git

## ``Backend``
- In the project's root folder, run: 
   ```bash
      npm install

- Then, start the server: 
   ```bash
      nodemon
      
Make sure it's connected to the MongoDB database.

## ``Frontend``
- In the "client" folder of the project, run: 
   ```bash
      npm install

- Next, start the frontend application: 
   ```bash
      npm start

This will open your browser and allow you to view the web application.

## ``Running Tests``
- If you want to run tests on the backend, use the following command:
   ```bash
      npx jest --config jest.config.cjs

This will automatically run the tests.

## ``Project Development``
To develop this project, technologies were chosen to provide comfort while presenting a challenge. Here is an overview of the key choices:

### Frontend: 
React was the choice for frontend development. An architecture based on Atomic Design principles was followed for an organized environment. React features, including hooks, were extensively used.
### Backend: 
 Express.js was used for the backend. A Model-View-Controller (MVC) architecture was implemented for an organized and efficient structure.
### Image Storage: 
For image uploading, Multer was used, and integration with the Backblaze B2 cloud storage service was done to improve performance and scalability.
### Database: 
MongoDB Compass was used as the database to store project data.

Thank you for choosing PhotoApp. We hope you enjoy sharing your photos and special moments with this web application!
