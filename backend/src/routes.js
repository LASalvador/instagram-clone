const express = require('express'); 
const multer = require('multer');
const postController = require('./controller/postController');
const likeController = require('./controller/likeController');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image') ,postController.store); 
routes.get('/posts', postController.index);
routes.post('/posts/:id/like', likeController.store);
module.exports = routes;