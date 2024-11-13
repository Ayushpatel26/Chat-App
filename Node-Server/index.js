const http = require("http");
const socketIo = require("socket.io");

// Create an HTTP server
const server = http.createServer();

// Attach Socket.io to the server
const io = socketIo(server);

// Start the server on port 8000
server.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

// Initialize users object
const users = {};

// Listen for client connections
io.on("connection", socket => {
    // Listen for a new user joining
    socket.on('new-user-joined', naam => {
        console.log("Naya user", naam);
        users[socket.id] = naam;
        socket.broadcast.emit('user-joined', naam);
    });

    // Listen for a message being sent
    // socket.on('send', message => {
    //     socket.broadcast.emit('receive', { message: message, naam: users[socket.id] });
    // });
});