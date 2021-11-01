const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Homepage
// Get posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username']}],
        });
        const posts = postData.map(post => post.get({plain:true}));
        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
        console.log('posts grabbed');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username']},
        { model: Comment, attributes: ['content']}],
        });
        const post = postData.map((post) => post.get({plain:true}));
        res.render('post', {post, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Dashboard 
router.get('/dashboard', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{model:Post, attributes: ['title', 'content']}],
        });
        const user = userData.get({plain:true});
        res.render('dashboard', {user, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});


module.exports = router;