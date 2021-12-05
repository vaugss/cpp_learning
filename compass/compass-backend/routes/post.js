const express = require('express')
const { 
	getPosts, 
	createPost, 
	postsByUser, 
	postById, 
	isPoster, 
	updatePost, 
	deletePost,
	singlePost,
	postPhoto,
	like, 
	unlike,
	comment,
	uncomment
 } = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById} = require('../controllers/user')
const { createPostValidator } = require('../validator')
const router = express.Router();

router.get("/posts", getPosts);

//like and unlink
router.put("/post/like", requireSignin, like);
router.put("/post/unlike", requireSignin, unlike);

//comments
router.put("/post/comment", requireSignin, comment);
router.put("/post/uncomment", requireSignin, uncomment);


router.post("/post/new/:userId", requireSignin, createPost, createPostValidator);

router.get("/posts/by/:userId", requireSignin, postsByUser);
router.get("/post/:postId", singlePost);

router.put("/post/:postId", requireSignin, isPoster, updatePost);
router.delete("/post/:postId", requireSignin, isPoster, deletePost);

// photo
router.get("/post/photo/:postId", postPhoto);

//any routes containing: userId, our app will first execute userById()
router.param("userId", userById);
//any routes containing: postId, our app will first execute postById()
router.param("postId", postById);

module.exports = router;