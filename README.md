**##Client-Server Project**<br>
This project consists of two main components: a client-side React application and a server-side JSON server for a fake API.<br>

**##Project Structure**<br>
Copyproject-root/<br>
│<br>
├── client/   &nbsp;&nbsp;      # React client application<br>
│ &nbsp; &nbsp; └── ...         # React app files<br>
│<br>
└── server/   &nbsp;&nbsp;      # JSON server for fake API<br>
   &nbsp;&nbsp; └── db.json &nbsp;&nbsp;    # JSON file containing fake data<br>

**##Step 1: clone Project**<br>
copy git clone https://github.com/yasararafath2698/dashboard_task<br>
    
**##Client (React App)**<br>
The client-side of the application is built with React and runs on port 3000.<br>
Setup and Running<br>

**##Navigate to the client folder:**<br>
Copy cd client<br>

**##Install dependencies (first time only):**<br>
Copynpm install<br>

**##Start the React development server:**<br>
Copy npm start<br>

The client will be available at http://localhost:3000<br>

**##Server (JSON Server)**<br>
The server-side uses json-server to create a fake API based on a JSON file. It runs on port 3004.<br>
Setup and Running<br>

**##Navigate to the server folder:**<br>
Copy cd server<br>

**##Install dependencies (first time only):**<br>
Copy npm install<br>

**##Start the JSON server:**<br>
Copy npm run server<br>

The server will be available at http://localhost:3004<br>

**##Important Notes**

Make sure you're in the correct directory when running npm commands.<br>
The client and server need to be started separately.<br>
Ensure that both the client and server are running for full functionality of the application.<br>
The client runs on port 3000, while the server runs on port 3004.<br>
