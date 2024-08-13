# Simple HBS Project - Postman Collection

This repository contains a Postman collection for the `simple-hbs-project`, which is a Node.js application using Express and Handlebars (HBS) as the template engine.

## Requirements

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Postman](https://www.postman.com/) or [Newman](https://www.npmjs.com/package/newman) to run the collection

## Installation

1. **Clone the project repository:**
    ```bash
    git clone https://github.com/your-username/simple-hbs-project.git
    cd simple-hbs-project
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm start
    ```
    The server will start at the URL: `http://localhost:3000`.

## Using Routes and Forms

### 1. Personalized Greeting Route

- **URL:** `http://localhost:3000/hello/:firstName/:lastName`
- **Example:** `http://localhost:3000/hello/Lucas/Angelo`
- **Description:** 
  - This route displays a simple HTML page showing a personalized greeting using the `firstName` and `lastName` parameters passed in the URL.
  - To access it, open a browser and enter the URL with the desired parameters. For example, visiting `http://localhost:3000/hello/Lucas/Angelo` will display the message "Hello, Lucas Angelo!".

### 2. User Creation Form

- **URL:** `http://localhost:3000/form`
- **Description:**
  - This route displays a form in the browser that allows you to create a new user by filling out the `name`, `email`, and `address` fields.
  - To access the form, open your browser and go to `http://localhost:3000/form`.
  - After filling in the details, click the "Send" button to submit the form. The data will be sent via POST to the `/users` route, where it will be stored and displayed as JSON.

### 3. User Listing Route

- **URL:** `http://localhost:3000/users`
- **Description:**
  - This route returns a list of all users that have been created via the form or POST requests.
  - You can view the list of users by sending a GET request to `http://localhost:3000/users`.

## Development with `npm run dev`

- **Using Nodemon:**
  - For easier development, you can use `nodemon`, which automatically restarts the server whenever a change in the code is detected.
  - To start the server with `nodemon`, use the command:
    ```bash
    npm run dev
    ```
  - This will automatically restart the server after any modification, making it ideal for development.

## Postman Collection Requests

### 1. `create user`
- **Method:** POST
- **URL:** `http://localhost:3000/users`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body (JSON):**
    ```json
    {
        "name": "Lucas Ângelo",
        "email": "lucasangelo@lucasangelo.com",
        "address": "Rua do Lucas"
    }
    ```
- **Description:** Creates a user with the provided data.

### 2. `get users`
- **Method:** GET
- **URL:** `http://localhost:3000/users`
- **Description:** Returns the list of created users.

### 3. `hello your name`
- **Method:** GET
- **URL:** `http://localhost:3000/hello/Lucas/Angelo`
- **Description:** Displays a personalized greeting with the provided parameters.

## Running the Collection

1. **Run in Postman:**
   - After importing the collection, select the desired request and click "Send" to send the request.

2. **Run with Newman (CLI):**
   - Alternatively, you can run the collection in the terminal using Newman:
     ```bash
     newman run simple-hbs-project.postman_collection.json
     ```

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
