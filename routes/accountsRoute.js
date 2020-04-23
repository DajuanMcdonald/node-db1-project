const express = require('express');
const db = require('../data/dbConfig');
const accounts = require('../data/seeds/accounts')

const router = express.Router();


//add account to db: CREATE
router.post('/', (req, res) => {

    if(!req.body.name || !req.body.budget) {
        res.status(404).json({message: "Please provide name and budget"})
    }
    else {

        db('accounts').insert(req.body, 'id')
        .then( ids => {
        res.status(201).jsonp({account: ids})
        }).catch(err => {
            res.status(500).json({message: "Server error"})
        })
    }
})

//find all accounts in db READ
router.get('/', (req, res) => {
    db.select('*').from('accounts')
    .then( acc => {
        res.status(200).jsonp({account: acc})
    }).catch(err => {
        res.status(500).json({message: "Server Error"})
    })

})


//find by id :  READ
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