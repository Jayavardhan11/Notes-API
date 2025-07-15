# 📝 Notes REST API

A beginner-friendly Node.js + Express project to manage personal notes with full CRUD operations and middleware logging.

---

## 📁 Features

- Get all notes
- Get a note by ID
- Add a new note
- Update a note by ID
- Delete a note by ID
- Middleware logs request method and URL

---

## 🚀 How to Run Locally

### 1. Clone or download the repo
```
git clone https://github.com/Jayavardhan11/notes-api.git
cd notes-api
```

### 2. Install dependencies
```
npm install
```

### 3. Start the server
```
npm start
```

### 4. Visit
```
http://localhost:3000/
```

---

## 📌 API Endpoints

All endpoints are prefixed with `/api`.

| Method | Route           | Description        |
|--------|------------------|--------------------|
| GET    | /api/notes       | Get all notes      |
| GET    | /api/notes/:id   | Get note by ID     |
| POST   | /api/notes       | Add new note       |
| PUT    | /api/notes/:id   | Update note        |
| DELETE | /api/notes/:id   | Delete note        |

---

## 📦 Project Structure

```
notes-api/
├── server.js
├── routes/
│   └── noteRoutes.js
├── data/
│   └── notes.json
├── package.json
├── .gitignore
└── README.md
```

---

## 📜 License

This project is licensed under the [MIT License](./License) © 2024 Jayavardhan Atti.
