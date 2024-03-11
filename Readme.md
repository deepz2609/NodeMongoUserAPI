


# NodeMongoUserAPI

NodeMongoUserAPI is a web application built with Node.js (Express) and MongoDB, providing a simple API for user-related functionality.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB server running locally or accessible via a connection string

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deepz2609/NodeMongoUserAPI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NodeMongoUserAPI
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure MongoDB connection:

   Update the MongoDB connection string in `connection.js`:

   ```javascript
   // connection.js
   connectMongoDb('mongodb://localhost:27017/userDB');
   ```

5. Start the server:

   ```bash
   npm start
   ```

The server will be running at http://127.0.0.1:8080.

## Usage

### User Routes

#### Get All Users

- **Endpoint:** `/user`
- **Method:** `GET`
- **Description:** Retrieve a list of all users.
- **Example Response:**
  ```json
  [
    {
      "_id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "jobTitle": "Developer",
      "gender": "Male"
    },
    // ... other users
  ]
  ```

#### Get User by ID

- **Endpoint:** `/user/:id`
- **Method:** `GET`
- **Description:** Retrieve a user by their ID.
- **Example Response:**
  ```json
  {
    "_id": "user_id",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "jobTitle": "Designer",
    "gender": "Female"
  }
  ```

#### Create User

- **Endpoint:** `/user`
- **Method:** `POST`
- **Description:** Create a new user.
- **Request Body:**
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "job_title": "Developer",
    "gender": "Male"
  }
  ```
- **Example Response:**
  ```json
  {
    "msg": "User created successfully"
  }
  ```

#### Update User by ID

- **Endpoint:** `/user/:id`
- **Method:** `PUT`
- **Description:** Update a user by their ID.
- **Request Body:**
  ```json
  {
    "first_name": "Updated",
    "last_name": "Name",
    "email": "updated.email@example.com",
    "job_title": "Updated Job",
    "gender": "Other"
  }
  ```
- **Example Response:**
  ```json
  {
    "status": "Success"
  }
  ```

#### Delete User by ID

- **Endpoint:** `/user/:id`
- **Method:** `DELETE`
- **Description:** Delete a user by their ID.
- **Example Response:**
  ```json
  {
    "status": "Success"
  }
  ```

### Middleware

- Request and response logging is implemented using the `logReqRes` middleware. Logs are written to 'log.txt'.

## Contributing

If you'd like to contribute to NodeMongoUserAPI, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

