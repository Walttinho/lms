# Online Course Registration System     

[API Documentation](https://lms-8ajl.onrender.com/docs)   |   [Code Documentation](https://lms-8ajl.onrender.com/documentation)

This project is an API for managing online courses, with functionalities for teachers and students.

## Table of Contents

- [Installation](#installation)
- [Running with Docker](#running-with-docker)
- [Database Migrations and Seeding](#database-migrations-and-seeding)
- [API Endpoints](#api-endpoints)
- [Contribution](#contribution)
- [License](#license)

## Installation

To run the project locally, follow these steps:

1. Clone the repository from the master branch. `https://github.com/Walttinho/lms.git`
2. Navigate to the project directory. `cd lms`
3. Install dependencies using npm or yarn: `npm install` or `yarn install`.
4. Set up your environment variables as needed. ` touch .env && echo -e "DATABASE_URL=\nPORT=\nJWT_SECRET=" >> .env`
5. Run the application: `npm run start:dev` or `yarn start:dev`.

## Running with Docker

To run the project using Docker, follow these steps:

1. Install Docker on your machine if you haven't already.
2. Build the Docker image: `docker build -t lms-backend .`
3. Run the Docker container: `docker run -p 3000:3000 lms-backend`

## Database Migrations and Seeding

To apply database migrations and seeding, follow these steps:

1. Run database migrations: `prisma migrate dev`
2. Seed the database with initial data: `prisma db seed`

### Simulating Different Access Types

- **Administrator Access**: Use the appropriate token in the request header to simulate administrator access.
- **Professor Access**: Use the appropriate token in the request header to simulate professor access.
- **Student Access**: Use the appropriate token in the request header to simulate student access.

## API Endpoints

For detailed information on each endpoint, click on the endpoint name. Additionally, you can visit the interactive documentation at [Swagger](https://lms-8ajl.onrender.com/docs) to explore and test the API endpoints directly in your browser.

- [POST /user](#1-create-a-new-user): Create a new user.
- [GET /user/all](#2-list-all-users): List all users.
- [GET /user](#3-find-a-user-by-id): Find a user by ID.
- [DELETE /user/:id](#4-delete-a-user-by-id): Delete a user by ID.
- [PATCH /user](#5-update-a-user): Update a user.
- [POST /auth](#6-user-login): User login.
- [POST /courses](#7-create-a-new-course): Create a new course.
- [POST /courses/:courseId/lessons](#8-create-a-new-lesson): Create a new lesson for a specific course.
- [GET /courses](#9-list-all-courses): List all courses.
- [GET /courses/:courseId/lessons](#10-list-all-lessons-for-a-specific-course): List all lessons for a specific course.
- [GET /courses/:id](#11-find-a-course-by-id): Find a course by ID.
- [GET /courses/:courseId/lessons/:id](#12-find-a-lesson-by-id-for-a-specific-course): Find a lesson by ID for a specific course update watching lesson for Students.
- [PUT /courses/:id](#13-update-a-course-by-id): Update a course by ID.
- [PUT /courses/:courseId/lessons/:id](#14-update-a-lesson-by-id-for-a-specific-course): Update a lesson by ID for a specific course.
- [DELETE /courses/:id](#15-delete-a-course-by-id): Delete a course by ID.
- [DELETE /courses/:courseId/lessons/:id](#16-delete-a-lesson-by-id-for-a-specific-course): Delete a lesson by ID for a specific course.

## Contribution

We appreciate all contributors who have helped make this project what it is today. If you are interested in contributing, please follow the instructions below:

1. Fork the project.
2. Create a branch with the name of your feature or fix (`git checkout -b feature/my-new-feature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to your branch (`git push origin feature/my-new-feature`).
5. Open a Pull Request.

Please ensure your code is in line with the project's style guidelines and that all test checks are passing.

### License

Nest is [MIT licensed](LICENSE).

### 1. [Create a New User](#api-endpoints)

**Route:** `POST /user`

**Description:** Creates a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john.doe@example.com",
  "password": "SecurePassword123!",
  "role": "STUDENTS"
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417400",
  "name": "John Doe",
  "username": "johndoe",
  "email": "john.doe@example.com",
  "role": "STUDENTS"
}
```

### 2. [List All Users](#api-endpoints)

**Route:** `GET /user/all`

**Description:** Lists all users available.

**Response:**

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-42661417400",
    "name": "John Doe",
    "username": "johndoe",
    "email": "john.doe@example.com",
    "role": "STUDENTS"
  },
  {
    "id": "123e4567-e89b-12d3-a456-42661417401",
    "name": "Jane Smith",
    "username": "janesmith",
    "email": "jane.smith@example.com",
    "role": "PROFESSOR"
  }
]
```

### 3. [Find a User by ID](#api-endpoints)

**Route:** `GET /user`

**Description:** Finds a user by ID.

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417400",
  "name": "John Doe",
  "username": "johndoe",
  "email": "john.doe@example.com",
  "role": "STUDENTS"
}
```

### 4. [Delete a User by ID](#api-endpoints)

**Route:** `DELETE /user/:id`

**Description:** Deletes a user by ID.

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

### 5. [Update a User](#api-endpoints)

**Route:** `PATCH /user`

**Description:** Updates a user.

**Request Body:**

```json
{
  "name": "Johnathan Doe",
  "username": "johnathandoe",
  "email": "johnathan.doe@example.com",
  "password": "NewSecurePassword123!",
  "role": "ADMINISTRATOR"
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417400",
  "name": "Johnathan Doe",
  "username": "johnathandoe",
  "email": "johnathan.doe@example.com",
  "role": "ADMINISTRATOR"
}
```

### 6. [User Login](#api-endpoints)

**Route:** `POST /auth`

**Description:** Logs in a user.

**Request Body:**

```json
{
  "email": "johnathan.doe@example.com",
  "username": "johnathandoe",
  "password": "NewSecurePassword123!"
}
```

**Response:**

```json
{
  "user": {
    "id": "123e4567-e89b-12d3-a456-42661417400",
    "name": "Johnathan Doe",
    "username": "johnathandoe",
    "email": "johnathan.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OCwidXNlcm5hbWUiOiJqb2huYWRvbm9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### 7. [Create a New Course](#api-endpoints)

**Route:** `POST /courses`

**Description:** Creates a new course.

**Request Body:**

```json
{
  "name": "Introduction to Programming",
  "description": "Learn the basics of programming.",
  "banner": "https://example.com/images/programming.jpg"
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417402",
  "name": "Introduction to Programming",
  "description": "Learn the basics of programming.",
  "banner": "https://example.com/images/programming.jpg",
  "createdAt": "2023-04-01T00:00:00Z",
  "updatedAt": "2023-04-01T00:00:00Z"
}
```

### 8. [Create a New Lesson](#api-endpoints)

**Route:** `POST /courses/:courseId/lessons`

**Description:** Creates a new lesson for a specific course.

**Request Body:**

```json
{
  "name": "Getting Started with Python",
  "description": "Learn how to write your first Python program.",
  "content": "In this lesson, you will learn how to write a simple Python program.",
  "role": "TEXT",
  "courseId": "123e4567-e89b-12d3-a456-42661417402"
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417403",
  "name": "Getting Started with Python",
  "description": "Learn how to write your first Python program.",
  "content": "In this lesson, you will learn how to write a simple Python program.",
  "role": "TEXT",
  "courseId": "123e4567-e89b-12d3-a456-42661417402"
}
```

### 9. [List All Courses](#api-endpoints)

**Route:** `GET /courses`

**Description:** Lists all courses available.

**Query Parameters:**

- `page`: Page number (optional, default 1)
- `size`: Number of items per page (optional, default 10)

**Response:**

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-42661417402",
    "name": "Introduction to Programming",
    "description": "Learn the basics of programming.",
    "banner": "https://example.com/images/programming.jpg",
    "createdAt": "2023-04-01T00:00:00Z",
    "updatedAt": "2023-04-01T00:00:00Z"
  },
  {
    "id": "123e4567-e89b-12d3-a456-42661417404",
    "name": "Advanced Python Programming",
    "description": "Dive deeper into Python programming.",
    "banner": "https://example.com/images/advanced-python.jpg",
    "createdAt": "2023-04-02T00:00:00Z",
    "updatedAt": "2023-04-02T00:00:00Z"
  }
]
```

### 10. [List All Lessons for a Specific Course](#api-endpoints)

**Route:** `GET /courses/:courseId/lessons`

**Description:** Lists all lessons for a specific course.

**Query Parameters:**

- `page`: Page number (optional, default 1)
- `size`: Number of items per page (optional, default 10)

**Response:**

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-42661417403",
    "name": "Getting Started with Python",
    "description": "Learn how to write your first Python program.",
    "content": "In this lesson, you will learn how to write a simple Python program.",
    "role": "TEXT",
    "courseId": "123e4567-e89b-12d3-a456-42661417402"
  },
  {
    "id": "123e4567-e89b-12d3-a456-42661417405",
    "name": "Variables and Data Types",
    "description": "Understand variables and data types in Python.",
    "content": "In this lesson, you will learn about variables and data types in Python.",
    "role": "TEXT",
    "courseId": "123e4567-e89b-12d3-a456-42661417403"
  },
  {
    "id": "123e4567-e89b-12d3-a456-42661417406",
    "name": "Control Flow",
    "description": "Learn about loops and conditionals in Python.",
    "content": "In this lesson, you will learn how to use loops and conditionals in Python.",
    "role": "TEXT",
    "courseId": "123e4567-e89b-12d3-a456-42661417402"
  }
]
```

### 11. [Find a Course by ID](#api-endpoints)

**Route:** `GET /courses/:id`

**Description:** Finds a course by ID.

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417402",
  "name": "Introduction to Programming",
  "description": "Learn the basics of programming.",
  "banner": "https://example.com/images/programming.jpg",
  "createdAt": "2023-04-01T00:00:00Z",
  "updatedAt": "2023-04-01T00:00:00Z"
}
```

### 12. [Find a Lesson by ID for a Specific Course](#api-endpoints)

**Route:** `GET /courses/:courseId/lessons/:id`

**Description:** Finds a lesson by ID for a specific course and watching lesson for students.

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417403",
  "name": "Getting Started with Python",
  "description": "Learn how to write your first Python program.",
  "content": "In this lesson, you will learn how to write a simple Python program.",
  "role": "TEXT",
  "courseId": "123e4567-e89b-12d3-a456-42661417402"
}
```

### 13. [Update a Course by ID](#api-endpoints)

**Route:** `PUT /courses/:id`

**Description:** Updates a course by ID.

**Request Body:**

```json
{
  "name": "Advanced Introduction to Programming",
  "description": "Dive deeper into the basics of programming.",
  "banner": "https://example.com/images/advanced-programming.jpg"
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417402",
  "name": "Advanced Introduction to Programming",
  "description": "Dive deeper into the basics of programming.",
  "banner": "https://example.com/images/advanced-programming.jpg",
  "createdAt": "2023-04-01T00:00:00Z",
  "updatedAt": "2023-04-02T00:00:00Z"
}
```

### 14. [Update a Lesson by ID for a Specific Course](#api-endpoints)

**Route:** `PUT /courses/:courseId/lessons/:id`

**Description:** Updates a lesson by ID for a specific course.

**Request Body:**

```json
{
  "name": "Advanced Python Programming",
  "description": "Dive deeper into Python programming.",
  "content": "In this lesson, you will learn advanced Python programming concepts.",
  "role": "TEXT"
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-42661417403",
  "name": "Advanced Python Programming",
  "description": "Dive deeper into Python programming.",
  "content": "In this lesson, you will learn advanced Python programming concepts.",
  "role": "TEXT",
  "courseId": "123e4567-e89b-12d3-a456-42661417402"
}
```

### 15. [Delete a Course by ID](#api-endpoints)

**Route:** `DELETE /courses/:id`

**Description:** Deletes a course by ID.

**Response:**

```json
{
  "message": "Course deleted successfully"
}
```

### 16. [Delete a Lesson by ID for a Specific Course](#api-endpoints)

**Route:** `DELETE /courses/:courseId/lessons/:id`

**Description:** Deletes a lesson by ID for a specific course.

**Response:**

```json
{
  "message": "Lesson deleted successfully"
}
```
