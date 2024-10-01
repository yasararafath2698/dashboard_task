##Client-Server Project
This project consists of two main components: a client-side React application and a server-side JSON server for a fake API.

##Project Structure
Copyproject-root/
│
├── client/         # React client application
│   └── ...         # React app files
│
└── server/         # JSON server for fake API
    └── db.json     # JSON file containing fake data
    
##Client (React App)
The client-side of the application is built with React and runs on port 3000.
Setup and Running

##Navigate to the client folder:
Copy cd client

##Install dependencies (first time only):
Copynpm install

##Start the React development server:
Copy npm start

The client will be available at http://localhost:3000

##Server (JSON Server)
The server-side uses json-server to create a fake API based on a JSON file. It runs on port 3004.
Setup and Running

##Navigate to the server folder:
Copy cd server

##Install dependencies (first time only):
Copy npm install

##Start the JSON server:
Copy npm run server

The server will be available at http://localhost:3004

##Important Notes

Make sure you're in the correct directory when running npm commands.
The client and server need to be started separately.
Ensure that both the client and server are running for full functionality of the application.
The client runs on port 3000, while the server runs on port 3004.
