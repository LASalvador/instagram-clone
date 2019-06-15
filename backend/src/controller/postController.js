const Post = require('../models/post');

module.exports = {
	async index(req, res) {
		const posts =  await Post.find().sort('-createdAt');
		return res.json(posts);
	},
	async store(req, res){
		// console.log(req.body);
		const { author , place , description, hastags} = req.body;
		const {filename: image} = req.file

		const post = await Post.create({
			author,
			place,
			description,
			hastags,
			image,
		})

		req.io.emit("post", post);
		return res.json(post);
	}

};