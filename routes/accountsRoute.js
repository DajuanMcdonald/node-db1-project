const express = require('express');
const db = require('../data/dbConfig');
const accounts = require('../data/seeds/accounts')

const router = express.Router();

//find all accounts in db 
router.get('/', (req, res) => {
    db.select('*').from('accounts')
    .then( acc => {
        res.status(200).jsonp({account: acc})
    }).catch(err => {
        res.status(500).json({message: "Server Error"})
    })
     
    

})


//find by id : 
router.get('/:id', (req, res) => {
        db('accounts').where({id : req.params.id})
        .then( item => {
            res.status(200).jsonp({account: item})
        })
        .catch(err => {
            res.status(500).json({message: 'Server error'})
        })



})

module.exports = router;