const express = require("express");
const router = express.Router();
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const search = require("../mysql/search");
const deletion = require("../mysql/delete");

router.get('/:id', (req, res, next) => {
    getById('conference', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/', (req, res, next) => {
    getAll('conference', (results) => {
        res.send(results);
    })
})

router.post('/search', (req, res, next) => {
    search('conference', req.body.field, req.body.value, (results) => {
        res.send(results);
    })
})

router.post('/create', (req, res, next) => {
    insert('conference', req.body, (result) => {
        if (!result) res.status(401).send({
            message: 'Cannot insert data'
        });
        res.send(result);
    })
})

router.post('/edit/:id', (req, res, next) => {
    update('conference', req.body, req.params.id, (result) => {
        res.send(result);
    })
})

router.post('/delete/:id', (req, res, next) => {
    deletion('conference', req.params.id, (result) => {
        res.send(result);
    } )
})
module.exports = router;