# Task Manager with Filesystem

A simple and elegant task management web application built with Node.js and Express.

## Overview

This project is a task manager that allows users to create, view, and manage tasks through a clean, modern web interface. Tasks are stored using the filesystem, making it easy to get started without requiring a database.

## Features

- **Create Tasks**: Add new tasks with a simple form interface
- **View Tasks**: Display all created tasks in a responsive card layout
- **Modern UI**: Built with Tailwind CSS for a sleek, contemporary design
- **File-based Storage**: Tasks are stored as files in the filesystem

## Tech Stack

- **Backend**: Node.js with Express.js
- **Template Engine**: EJS
- **Styling**: Tailwind CSS
- **Development**: Nodemon for hot-reload during development

## Project Structure

```
.
├── index.js              # Main Express application
├── package.json          # Project dependencies and metadata
├── public/               # Static files
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
├── views/                # EJS template files
│   └── index.ejs         # Main page template
└── tasks/                # Task storage directory
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LearnBackend
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

Run the application in development mode with hot-reload:
```bash
nodemon index.js
```

### Production

Run the application normally:
```bash
node index.js
```

The server will start on `http://localhost:3000`

## API Routes

- `GET /` - Display the task manager home page with all tasks
- `GET /profile/:username` - View profile page for a specific user

## How It Works

1. **Task Storage**: Tasks are stored as individual files in the `tasks/` directory
2. **Rendering**: The application reads the tasks directory on each request and renders them dynamically
3. **Display**: Tasks are displayed as cards with options to view more details

## Future Enhancements

- Add task deletion functionality
- Implement task editing
- Add task categories or tags
- Improve task details view
- Add search and filtering capabilities

## License

ISC

## Author

Mohit Saini
