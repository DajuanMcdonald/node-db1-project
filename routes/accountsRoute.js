const express = require('express');
const db = require('../data/seeds/accounts');

const router = express.Router();

router.get('/', async (req, res, next) => {
    // const path = await path(__filename, 'index.html')
    res.status(200).send('<h1>Introduction to Relational Databases</h1>')

})

module.exports = router;