const router = require('express').Router();
const { User } = require('../models');

// Homepage
// Get posts
router.get('/', async (req, res) => {
    try {
        

res.render('homepage', {

})

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;