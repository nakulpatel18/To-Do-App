📝 MERN To-Do App
A full-stack To-Do list application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can add, delete, and view tasks in a clean and responsive interface.

📚 Features
✅ Create new tasks

🗑️ Delete existing tasks

📄 View all tasks

💾 Persistent storage with MongoDB

⚡ RESTful API using Express.js

🎨 Stylish frontend built with React

🛠️ Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express
Database	MongoDB (Mongoose)
API Protocol	REST
🚀 Getting Started
Prerequisites
Node.js & npm installed

MongoDB (local or Atlas)

Git (optional but helpful)

📁 Folder Structure
bash
Copy code
root/
├── backend/           # Node.js + Express server
│   └── models/
│   └── routes/
│   └── server.js
├── frontend/          # React app
│   └── src/
│       └── components/
│       └── App.js
│       └── api.js
├── .env
└── README.md

🔧 Backend Setup (Node.js + Express)
bash
Copy code
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file and add your MongoDB URI
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo-app

# Start the server
node server.js
The server will run on http://localhost:5000.

🎨 Frontend Setup (React.js)
bash
Copy code
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
Frontend will be running on http://localhost:3000.

🔗 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Add a new task
DELETE	/tasks/:id	Delete a task by ID
🖼️ Screenshots
Add screenshots here if desired
Example: ./screenshots/homepage.png

📦 Deployment
You can deploy this app using:

Vercel or Netlify (Frontend)

Render or Railway (Backend)

MongoDB Atlas (Database)

🙌 Acknowledgments
Thanks to the MERN community and open source contributors.

Icons from Heroicons

