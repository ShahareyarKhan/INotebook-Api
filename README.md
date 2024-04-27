# iNotebook Backend

This is the backend server for the iNotebook application. It provides APIs for user authentication and managing notes.

## Installation

1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
2. Clone this repository: `git clone https://github.com/your_username/iNotebook-backend.git`
3. Navigate to the project directory: `cd iNotebook-backend`
4. Install dependencies: `npm install`

## Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables to the `.env` file:

Replace `your_mongodb_uri` with your MongoDB URI and `your_jwt_secret` with your JWT secret.

## Usage

To start the server, run:


The server will start running at `http://localhost:5000`.

## API Routes

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

### Notes

- `GET /api/notes`: Fetch all notes.
- `POST /api/notes/add`: Add a new note.
- `PUT /api/notes/update/:id`: Update a note by ID.
- `DELETE /api/notes/delete/:id`: Delete a note by ID.

For detailed information on each route, refer to the API documentation.

## Environment Variables

- `MONGODB_URI`: MongoDB connection URI.
- `JWT_SECRET`: Secret key for JWT token generation.

## Deployment

To deploy the server to a production environment, follow your hosting provider's instructions for Node.js applications.

## Contributing

Contributions are welcome! Please submit bug reports, feature requests, and pull requests through GitHub.


