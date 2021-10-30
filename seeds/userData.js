const {User} = require('../models');

const userData = [
    {
        "username": "Johnnystorm",
        "email": "johnny@mail.com",
        "password": "password"
    },
    {
        "username": "Spaceman22",
        "email": "spaceman@mail.com",
        "password": "password"
    },
    {
        "username": "masterchief",
        "email": "masterchief@mail.com",
        "password": "password"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;