const socket = io("http://localhost:8000");

const messageContainer = document.querySelector(".container");

const naam = prompt("Enter your name to join");

socket.emit('new-user-joined', naam);