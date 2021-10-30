const { Comment } = require('../models');

const commentData = [
    {
        "content": "Check newegg, they have a lottery.",
        "user_id": 1,
        "post_id": 2
    },
    {
        "content": "For fortnite, it's fine, but what kind of graphics card do you have?",
        "user_id": 2,
        "post_id": 3
    },
    {
        "content": "I have a RTX 2060",
        "user_id": 3,
        "post_id": 3
    },
    {
        "content": "Whoa, no, you'll need a better CPU.",
        "user_id": 2,
        "post_id": 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;