const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const routes = require('./routes')
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://root:123@cluster0-rseib.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
})

app.use((req, res, next)=> {
	req.io = io;
	next();
})
app.use(cors());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));

server.listen(8081);