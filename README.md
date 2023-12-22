# Task Management API

I have created a Task Management API as an assignment task at **Neoma.ai**,
with implemented authorization for **registration** and **login** using **JWT** and **bcrypt** for storing the creadentials in hash.

All the **CRUD** operations are implemented successfully.
users can thus **create tasks**, **fetch tasks**, **update tasks**, or **delete the tasks**.

The **filter system** is also implemented as required to view the tasks by their **status: incomplete, in-progress or completed**.



## Table of Contents

- [Project Title](#task-management-api)
- [Description](#description)
- [Features](#features)
- [Usage with Example](##usage-with-example)
  - [Step 1 (User Registration)](#step-1-user-registration)
  - [Step 2 (User Login)](#step-2-user-login)
  - [Step 3 (Create a Task)](#step-3-create-a-task)
  - [Step 4 (Update by :id)](#step-4-update-by-id)
  - [Step 5 (Delete by :id)](#step-5-delete-by-id)
  - [Get All Tasks](#get-all-tasks)
  - [Get Task by :id](#get-task-by-id)
  - [Get Task by Status](#get-task-by-status)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Contributions](#contributions)



## Description

I have developed a robust Task Management API as part of an assignment at Neoma.ai. Find the deployed backend at https://taskmanagementneoma.onrender.com/

The API incorporates essential features for user registration, login, and task management,along with filter system ensuring a secure and efficient way
in which I have implemented a set of following features...



## Features

**Authentication and Authorization**
For user security, the API implements a secure **user registration and login system.** The credentials are stored in a hashed format using **bcrypt**, enhancing data protection. The use of **JSON Web Tokens (JWT)** facilitates secure authentication and authorization processes, ensuring that only authorized users can access the API functionalities.

**CRUD Operations**
All fundamental **CRUD (Create, Read, Update, Delete)** operations have been successfully implemented. This means users can perform the following actions:

**Create Tasks:** Users can create new tasks by providing task descriptions. The API associates tasks with the respective user who created them, ensuring **data integrity.**

**Fetch Tasks:** Users can retrieve task information, including details such as **task description, completion status, and timestamps.** This feature allows users to view their tasks easily.

**Update Tasks:** Task details, such as descriptions and completion status, **can be modified**. This flexibility enables users to keep their task information up-to-date.

**Delete Tasks:** Unwanted tasks **can be deleted** from the system, providing users with the ability to manage their task lists effectively.

**Filter System**
The API incorporates a sophisticated filter system to streamline task viewing. Users can filter tasks based on their status, allowing for **focused retrieval of information.** The status options include:

**Incomplete:** Shows tasks that are **not marked as completed (incomplete) or in-progress**.

**In-Progress:** Displays tasks that are **currently in progress**.

**Completed:** Presents tasks that have been **marked as completed**.
This filter system provides list of tasks based on their current status. Whether users need an overview of incomplete tasks, tasks in progress, or completed tasks, the API efficiently delivers the requested information.

The comprehensive set of features, coupled with a **secure authentication system and flexible task management capabilities**, makes the Task Management API a valuable tool for users looking to organize and track their tasks effectively.


## Usage with example

(postman is used for this demonstration)

### Step 1 (user registration):
for a user to register successfully using the api endpoint **/users/register**

**POST request at**

https://taskmanagementneoma.onrender.com/users/register

**EXAMPLE BODY**

```bash

{
  "name": "UserOne",
  "email": "UserOne.email@anymail.com",
  "password": "UserOnePassword"
}
```

**RESPONSE**

```bash

{
    "user": {
        "name": "UserOne",
        "email": "UserOne.email@anymail.com",
        "password": "$2b$08$ImoBws/iUgNQ7ky228rDcuyK6g6nEBNdusZGXkiIOBfIEAJb2/rWe",
        "_id": "6585458c8c2600c2a1875547",
        "createdAt": "2023-12-22T08:15:08.161Z",
        "updatedAt": "2023-12-22T08:15:08.161Z",
        "__v": 0
    },
    "message": "User Created Successfully"
}
```


### Step 2 (user login):
for a user to login successfully using the api endpoint **/users/login**

**POST request at**

https://taskmanagementneoma.onrender.com/users/login

**EXAMPLE BODY**

```bash

{
  "email": "UserOne.email@anymail.com",
  "password": "UserOnePassword"
}
```

**RESPONSE**

```bash

{
    "user": {
        "_id": "6585458c8c2600c2a1875547",
        "name": "UserOne",
        "email": "UserOne.email@anymail.com",
        "password": "$2b$08$ImoBws/iUgNQ7ky228rDcuyK6g6nEBNdusZGXkiIOBfIEAJb2/rWe",
        "createdAt": "2023-12-22T08:15:08.161Z",
        "updatedAt": "2023-12-22T08:15:08.161Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1NDU4YzhjMjYwMGMyYTE4NzU1NDciLCJpYXQiOjE3MDMyMzM0NzN9.3hruC9UnYYHchXb4RyBuh2cwMJV_Vwv-O12hgHKhfmQ",
    "message": "Logged in successfully"
}
```
(as we see the token is generated successfully we can use go ahead creating tasks for the user)

### Step 3 (create a task)
I will be creating four tasks with different status

**Task 1 (for completed)**

**POST request at**

https://taskmanagementneoma.onrender.com/tasks

**EXAMPLE BODY**

```bash

{
  "description": "Task First",
  "completed": true
}

```

**RESPONSE**

```bash
{
    "task": {
        "description": "Task First",
        "completed": true,
        "owner": "6585458c8c2600c2a1875547",
        "_id": "65854a708c2600c2a187554b",
        "createdAt": "2023-12-22T08:36:00.511Z",
        "updatedAt": "2023-12-22T08:36:00.511Z",
        "status": "completed",
        "__v": 0
    },
    "message": "Task Created Successfully"
}

```

**TASK 2 (incomplete)**

**BODY** 

```bash

{
  "description": "Task Second",
  "completed": false
}


```

**RESPONSE**

```bash

{
    "task": {
        "description": "Task Second",
        "completed": false,
        "owner": "6585458c8c2600c2a1875547",
        "_id": "65854afa8c2600c2a187554e",
        "createdAt": "2023-12-22T08:38:18.583Z",
        "updatedAt": "2023-12-22T08:38:18.583Z",
        "status": "incomplete",
        "__v": 0
    },
    "message": "Task Created Successfully"
}
```

**TASK 3 (in-progress)** 


**BODY** 

```bash

{
  "description": "Task third",
  "completed": false,
  "status":"in-progress"
}


```

**RESPONSE**

```bash
{
    "task": {
        "description": "Task third",
        "completed": false,
        "status": "in-progress",
        "owner": "6585458c8c2600c2a1875547",
        "_id": "65854be88c2600c2a1875551",
        "createdAt": "2023-12-22T08:42:16.616Z",
        "updatedAt": "2023-12-22T08:42:16.616Z",
        "__v": 0
    },
    "message": "Task Created Successfully"
}

```

**TASK 4 (for update)** 


**BODY** 

```bash

{
  "description": "Task four",
  "completed": false,
  "status":"in-progress"
}


```

**RESPONSE**

```bash
{
    "task": {
        "description": "Task four",
        "completed": false,
        "status": "in-progress",
        "owner": "6585458c8c2600c2a1875547",
        "_id": "65854c658c2600c2a1875554",
        "createdAt": "2023-12-22T08:44:21.740Z",
        "updatedAt": "2023-12-22T08:44:21.740Z",
        "__v": 0
    },
    "message": "Task Created Successfully"
}

```


## STEP 4 (update by :id)

### EXAMPLE

**PATCH request at**

https://taskmanagementneoma.onrender.com/tasks/65854c658c2600c2a1875554

**BODY** 

```bash

{
  "description": "Updated Task four",
  "completed": true
}

```

**RESPONSE**

```bash
{
    "message": "Task Updated Successfully"
}
```


## STEP 5 (delete by :id)

### EXAMPLE

**DELETE request at**

https://taskmanagementneoma.onrender.com/tasks/65854c658c2600c2a1875554



**RESPONSE**

```bash
{
    "task": {
        "_id": "65854c658c2600c2a1875554",
        "description": "Updated Task four",
        "completed": true,
        "status": "in-progress",
        "owner": "6585458c8c2600c2a1875547",
        "createdAt": "2023-12-22T08:44:21.740Z",
        "updatedAt": "2023-12-22T08:55:04.343Z",
        "__v": 0
    },
    "message": "Task Deleted Successfully"
}
```


## GET all tasks

**GET request at**

https://taskmanagementneoma.onrender.com/tasks

**RESPONSE**

```bash
{
    "tasks": [
        {
            "_id": "65854a708c2600c2a187554b",
            "description": "Task First",
            "completed": true,
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:36:00.511Z",
            "updatedAt": "2023-12-22T08:36:00.511Z",
            "status": "completed",
            "__v": 0
        },
        {
            "_id": "65854afa8c2600c2a187554e",
            "description": "Task Second",
            "completed": false,
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:38:18.583Z",
            "updatedAt": "2023-12-22T08:38:18.583Z",
            "status": "incomplete",
            "__v": 0
        },
        {
            "_id": "65854be88c2600c2a1875551",
            "description": "Task third",
            "completed": false,
            "status": "in-progress",
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:42:16.616Z",
            "updatedAt": "2023-12-22T08:42:16.616Z",
            "__v": 0
        }
    ],
    "count": 3,
    "message": "Tasks Fetched Successfully"
}
```

## GET task by :id

**GET request at**

https://taskmanagementneoma.onrender.com/tasks/65854be88c2600c2a1875551

**RESPONSE**
```bash
{
    "task": {
        "_id": "65854be88c2600c2a1875551",
        "description": "Task third",
        "completed": false,
        "status": "in-progress",
        "owner": "6585458c8c2600c2a1875547",
        "createdAt": "2023-12-22T08:42:16.616Z",
        "updatedAt": "2023-12-22T08:42:16.616Z",
        "__v": 0
    },
    "message": "Task Fetched Successfully"
}
```
## GET task by status

**GET request at (completed)**

https://taskmanagementneoma.onrender.com/tasks?status=completed

**RESPONSE**

```bash

{
    "tasks": [
        {
            "_id": "65854a708c2600c2a187554b",
            "description": "Task First",
            "completed": true,
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:36:00.511Z",
            "updatedAt": "2023-12-22T08:36:00.511Z",
            "status": "completed",
            "__v": 0
        }
    ],
    "count": 1,
    "message": "Tasks Fetched Successfully"
}
```

**GET request at (incomplete)**

https://taskmanagementneoma.onrender.com/tasks?status=incomplete

**RESPONSE**

```bash
{
    "tasks": [
        {
            "_id": "65854afa8c2600c2a187554e",
            "description": "Task Second",
            "completed": false,
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:38:18.583Z",
            "updatedAt": "2023-12-22T08:38:18.583Z",
            "status": "incomplete",
            "__v": 0
        },
        {
            "_id": "65854be88c2600c2a1875551",
            "description": "Task third",
            "completed": false,
            "status": "in-progress",
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:42:16.616Z",
            "updatedAt": "2023-12-22T08:42:16.616Z",
            "__v": 0
        }
    ],
    "count": 2,
    "message": "Tasks Fetched Successfully"
}
```

**GET request at (completed)**

https://taskmanagementneoma.onrender.com/tasks?status=in-progress

**RESPONSE**

```bash

{
    "tasks": [
        {
            "_id": "65854be88c2600c2a1875551",
            "description": "Task third",
            "completed": false,
            "status": "in-progress",
            "owner": "6585458c8c2600c2a1875547",
            "createdAt": "2023-12-22T08:42:16.616Z",
            "updatedAt": "2023-12-22T08:42:16.616Z",
            "__v": 0
        }
    ],
    "count": 1,
    "message": "Tasks Fetched Successfully"
}
```

### For all the above a token was used that has been generated while login





## API Endpoints

### POST /users/register
Create a user
### POST /users/login
User login
### POST /tasks
Create a task
### PATCH /tasks/:id
Update task by id
### DELETE /tasks/:id
Delete task by id

### GET /tasks
Get all tasks
### GET /tasks/:id
Get task by id
### GET /tasks?status=(:status)
Get task by status where status:completed, incomplete, in-progress, all status defaults all tasks if not provided
### GET /
Homepage stating if task manager API is working


## Installation

This backend is built using Node.js, Express, and MongoDB. Follow the steps below to set up and run the backend server on localhost.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB server is running)

### Clone the Repository

```bash
git clone https://github.com/DeshmukhSahil/NeomaAssignment.git
```

Install Dependencies
```bash
npm install
```
Configure Environment Variables
Create a .env file in the root of your project and add the following variables:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/DatabaseName
```

Adjust the values based on your preferences and MongoDB configuration.


Start the Server
```bash
npm start
```
The server will be running at http://localhost:3000 by default. You can change the port in the .env file.


## Contributions

### Your suggestions, contributions and feedbacks are welcomed looking forward to hear from you.


 
