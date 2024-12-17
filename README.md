# Wellness Center Project

## Overview

The Wellness Center Project is a full-stack web application designed to provide users with a platform to manage wellness services, appointments, and user authentication. Built with Flask for the backend and React for the frontend, this application aims to enhance user experience in scheduling wellness services.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Creation and management of appointments
- Browsing and management of wellness services
- Responsive design for various devices
- Comprehensive testing for reliability

## Technologies Used

- **Frontend**: React,CSS
- **Backend**: Flask, Flask-SQLAlchemy, Flask-Migrate
- **Database**: SQLite (for development), PostgreSQL (for production)
- **Testing**: Unittest for Python

## Installation

### Prerequisites

Make sure you have the following installed:

- Python 3.x
- Node.js
- npm 

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/iparainnocent/wellness-app-pitch.md.git
   cd wellness-app-pitch.md
2. Create a virtual environment:
       [pipenv install]
3. Activate the virtual environment:
       [pipenv shell]
4. Install the required packages:
    [pip install -r requirements.txt]
5.  Set up the database:

    [flask db init]
    [flask db migrate -m "Initial migration."]
    [flask db upgrade]

### Frontend Setup
1. Navigate to the frontend directory:
      [cd ../frontend  # Adjust this path as necessary]
2. Install the frontend dependencies:
       [npm install]

# Usage
### Running the Backend
1. Make sure your virtual environment is activated.
2. Run the Flask application:
     [flask run]
The backend will run on http://127.0.0.1:5555.

### Running the Frontend
1. Navigate to the frontend directory
2. Start the React application:
       [npm start]
The frontend will run on http://localhost:3000.

# Contributing
We welcome contributions to this project! If you'd like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/YourFeature).
- Make your changes and commit them (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/YourFeature).
- Open a pull request.

# Contributors

- [Steve](https://github.com/steviemurigi) 
- [Innocent](https://github.com/iparainnocent)
- [Shukri](https://github.com/shukri2022)
- [Margret](https://github.com/wambui01ndungu)
- [Abdirahman](https://github.com/Abdirahman004)