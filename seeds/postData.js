const { Post } = require('../models');

const postData = [
    {
        "title": "Welcome to the tech-blog",
        "content": "Here, users can create posts, or comment on existing ones. Sign up to begin.",
        "user_id": 1
    },
    {
        "title": "Has anyone had any luck finding new graphics cards?",
        "content": "Seems like every time they're available they're swept up in a second. I'm not paying scalper prices.",
        "user_id": 2
    },
    {
        "title": "Is the i5 6600k a good CPU?",
        "content": "I found one for like $100. I'm trying to play Fortnite.",
        "user_id": 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;