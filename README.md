# Simple CRUD

Welcome to your full-stack Node.js and React application! This README.md file provides instructions on how to run and set up both the backend and frontend parts of the application.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/)
- MySQL: [Download MySQL](https://dev.mysql.com/downloads/)
- Git: [Download Git](https://git-scm.com/downloads)

## Backend Setup

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/AntonHlushchuk/simpleCRUD
   npm install
   
### Configuration

Create a `.env` file in the backend directory and add the following environment variables:
- DB_HOST=your_database_host
- DB_USER=your_database_user
- DB_PASSWORD=your_database_password
- DB_DATABASE=your_database_name

Note: We're using port 3001 for the backend.

### Running the backend

Start the Node.js server for the backend:

`npm start`

The backend should now be running on http://localhost:3001

## Backend Setup

### Installation

- Navigate to the project's frontend directory:
`cd /client
`
- Install frontend dependencies:
`npm install`

### Running the frontend

Start the React development server for the frontend:

`npm start`

The frontend should now be running on http://localhost:3000. You can access it in your web browser.

## Testing 

In the main directory run `mocha getrequest.test.js` - currently there is only one test