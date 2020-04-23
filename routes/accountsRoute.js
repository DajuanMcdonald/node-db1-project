const express = require('express');
const db = require('../data/dbConfig');
const accounts = require('../data/seeds/accounts')

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*').from('accounts')
    .then( acc => {
        res.status(200).jsonp({data: acc})
    }).catch(err => {
        res.status(500).json({message: "Server Error"})
    })
     
    

})

router.get('/:id', async (req, res, err, next) => {
    try {

    }
    catch {
        err 
        res.status(500).json({message: "Server error"})
        
    }
    const [id] = req.params;
    // const path = await path(__filename, 'index.html')
    res.status(200).json(`<h1>Introduction to Relational Databases</h1>, ${id}`)

})

module.exports = router;