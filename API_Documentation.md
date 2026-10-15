# To-Do List API Documentation

## Base URL

`http://localhost:3000/api/tasks`

## 1. Create Task

- **Method:** POST
- **Endpoint:** `/api/tasks`
- **Success Status:** 201 Created

**Request Body:**

```json
{
  "title": "Learn Express.js",
  "description": "Practice REST APIs",
  "completed": false
}
```

**Expected Response:**

```json
{
  "id": "unique_task_id",
  "title": "Learn Express.js",
  "description": "Practice REST APIs",
  "completed": false
}
```

**Reason:** POST creates a new task. The server generates a unique ID for the task.

## 2. Get All Tasks

- **Method:** GET
- **Endpoint:** `/api/tasks`
- **Success Status:** 200 OK

**Expected Response:**

```json
[
  {
    "id": "unique_task_id",
    "title": "Learn Express.js",
    "description": "Practice REST APIs",
    "completed": false
  }
]
```

**Reason:** GET retrieves all available tasks so the frontend can display them.

## 3. Get Task by ID

- **Method:** GET
- **Endpoint:** `/api/tasks/:id`
- **Success Status:** 200 OK
- **Error Status:** 404 Not Found

**Expected Response:**

```json
{
  "id": "unique_task_id",
  "title": "Learn Express.js",
  "description": "Practice REST APIs",
  "completed": false
}
```

**Reason:** The task ID identifies the specific task requested by the client.

## 4. Update Task

- **Method:** PUT
- **Endpoint:** `/api/tasks/:id`
- **Success Status:** 200 OK
- **Error Status:** 404 Not Found

**Request Body:**

```json
{
  "title": "Learn Express.js",
  "description": "Practice CRUD operations",
  "completed": true
}
```

**Expected Response:** The updated task object.

**Reason:** PUT updates the details of an existing task.

## 5. Delete Task

- **Method:** DELETE
- **Endpoint:** `/api/tasks/:id`
- **Success Status:** 204 No Content
- **Error Status:** 404 Not Found

**Expected Response:** No response body is returned after successful deletion.

**Reason:** DELETE removes the specified task from the task list.

## 6. Mark Task as Completed

- **Method:** PATCH
- **Endpoint:** `/api/tasks/:id/status`
- **Success Status:** 200 OK
- **Error Status:** 404 Not Found

**Request Body:**

```json
{
  "completed": true
}
```

**Expected Response:** The updated task with its completion status set to `true`.

**Reason:** PATCH updates only the completion status without replacing the other task details.

## CRUD Operations Overview

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create | POST | `/api/tasks` |
| Read all tasks | GET | `/api/tasks` |
| Read one task | GET | `/api/tasks/:id` |
| Update | PUT | `/api/tasks/:id` |
| Delete | DELETE | `/api/tasks/:id` |
| Update completion status | PATCH | `/api/tasks/:id/status` |

## Error Handling

- **400 Bad Request:** The request contains invalid input.
- **404 Not Found:** The requested task does not exist.
- **500 Internal Server Error:** An unexpected server-side error occurs.

Error responses should contain a clear message explaining the problem.

## Potential Challenges

1. Generating unique IDs for tasks.
2. Validating required fields such as the task title.
3. Handling requests for tasks that do not exist.
4. Managing database errors.
5. Returning appropriate HTTP status codes.
6. Keeping task data consistent when updating or deleting tasks.

## Conclusion

These REST API endpoints cover the main CRUD operations required for a To-Do List application. They allow the frontend to create, retrieve, update, complete, and delete tasks through HTTP requests.
