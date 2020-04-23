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
        db('accounts').where({id : req.params.id}).first()
        .then( acc => {
            if(acc) {
            res.status(200).jsonp({account: acc})
            } else {
                res.status(404).json({message: "No such account in database with that Id"})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Server error'})
        })

})

//update an account in db : UPDATE
router.put('/:id', (req, res) => {
const changes = req.body
db('accounts').where({id: req.params.id}).update(changes)
.then( acc => {
    if(!changes.name || !changes.budget) {
        res.status(404).json({message: "Please provide contents to update"})
    } else {
        res.status(200).jsonp({account: `Account updated successfully`, acc})
    }
    
})
.catch(err => {
    res.status(500).json({message: "Server error."})
})

})


//remove account from db : REMOVE/DELETE 
router.delete('/:id', (req, res) => {
    db('accounts').where({id: req.params.id}).del()
    .then( acc => {
        if (acc > 0) {

            res.status(200).json({message: 'Record deleted Successfully.'})
        } else {
            res.status(404).json({message: "Account not found"})
        }
    }).catch(err => {
        res.status(500).json({message: "There was a server error"})
    })
})


module.exports = router;