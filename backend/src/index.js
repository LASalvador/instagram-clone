require('dotenv').config({ path: __dirname + '/../.env' });

const path = require('path')
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(process.env.URL_MONGODB, {
    useNewUrlParser:true,
    useUnifiedTopology: true 
});

app.use(cors());
app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use('/files_resize', express.static(path.resolve(__dirname, '..', 'uploads', 'resizes')))
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(require('./routes'));

server.listen(3333, () => console.log('pai to online'));