# Task Management App
This is a simple task management application built with React (frontend) and Spring Boot (backend). The app allows users to create, view, and delete tasks, with a minimalistic interface. It uses TypeScript for type safety in the frontend and H2 in-memory database for easy setup and testing in the backend.

## Features
- Create, View, and Delete Tasks: Users can add new tasks, view the list of tasks, and delete tasks when completed.
- Frontend with React and TypeScript: Ensures type safety and modular components for better maintainability.
- Backend with Spring Boot: Uses a RESTful API structure with a Controller-Service-Repository pattern.
- In-memory Database (H2): For quick testing.
- Error Handling: Includes validation and error handling.

## Tech Stack
- **Frontend:** React, TypeScript
- **Backend:** Spring Boot, Spring Data JPA
- **Database:** H2 (in-memory)

# Setup
Clone the repository:

```
git clone https://github.com/WhyYouNotStudyForExam/task-management.git
cd task-management
```
## Run the Backend:

Go to the backend folder.
Run the application with Gradle:
```
./gradlew bootRun
```

The backend should start at http://localhost:8080.

## Run the Frontend:

Go to the frontend folder.
Install dependencies and start the React app:
```
npm install
npm start
```
The frontend should start at http://localhost:3000.
