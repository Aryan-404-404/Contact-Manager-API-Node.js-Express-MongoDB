# Contact Manager App

A simple Contact Manager App built with Node.js, Express.js, and MongoDB. This application allows users to register, log in, and manage their contacts securely.

## Features

- User Registration and Authentication
- JWT-based Authentication
- Create, Read, Update, and Delete (CRUD) operations for contacts
- Custom error handling middleware
- MongoDB integration for data storage

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt.js
- jsonwebtoken
- dotenv

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Contact_Manager_App.git
   cd Contact_Manager_App
2. Install dependencies: npm install
3. Create a .env file in the root directory and add the environment variables:
4. Start the server: npm start


User Routes
   POST /api/user/register:    Register a new user
   POST /api/user/login:       Log in a user
   GET /api/user/info:         Get information about the logged-in user (protected route)

Contact Routes
   GET /api/contacts:        Get all contacts for the logged-in user (protected route)
   POST /api/contacts:       Create a new contact (protected route)
   GET /api/contacts/:id:    Get a specific contact by ID (protected route)
   PUT /api/contacts/:id:    Update a contact by ID (protected route)
   DELETE /api/contacts/:id: Delete a contact by ID (protected route)
