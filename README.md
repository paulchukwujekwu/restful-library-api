# RESTful Library API

This is a RESTful API for a library system, built with Node.js, Express, and MongoDB. The API allows users to perform CRUD operations on library resources such as books and users.

## Features

- Rate limiting to prevent abuse
- CORS support for cross-origin requests
- Environment variable configuration using dotenv
- Fetch data from external APIs
- Error handling and logging

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/restful-library-api.git
    cd restful-library-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:
    ```properties
    PORT=5000
    API_BASE_URL=https://jsonplaceholder.typicode.com
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```

2. The server will start on `http://localhost:5000`.

## Endpoints

### Users

- **GET /users**
    - Fetches a list of users from the external API.

## Example

To fetch users, send a GET request to:
http://localhost:5000/users


## Rate Limiting

The API implements rate limiting to prevent abuse. Each IP is limited to 100 requests per minute. If the limit is exceeded, the server will respond with a `429 Too Many Requests` status and the following message:

## Code Overview

### [server.js](http://_vscodecontentref_/1)

- Sets up the Express server
- Configures rate limiting
- Enables CORS
- Parses JSON and URL-encoded data
- Defines routes

### [usersRoutes.js](http://_vscodecontentref_/2)

- Fetches users from an external API
- Handles errors and logs them

## Dependencies

- express
- cors
- dotenv
- node-fetch
- https

## License

This project is licensed under the MIT License.

To call the live API from render use below: dashboard.render.com
https://restful-library-api.onrender.com/users


