const express = require("express");
const router = express.Router();
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const search = require("../mysql/search");
const deletion = require('../mysql/delete');
const getAuthorsByPostId = require('../mysql/getAuthorsByPostId');
const getAllByColumn = require("../mysql/getAllByColumn");


router.get('/name', (req, res, next) => {
    const column = ['author_id', 'first_name', 'last_name'];
    getAllByColumn('author', column, (results) => {
        console.log(results);

        res.send(results);
    })
})
router.get('/:id', (req, res, next) => {
    getById('author', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/', (req, res, next) => {
    getAll('author', (results) => {
        res.send(results);
    })
})

router.post('/search', (req, res, next) => {
    search('author', req.body.field, req.body.value, (results) => {
        res.send(results);
    })
})

router.get('/post/:id', (req, res, next) => {
    getAuthorsByPostId(req.params.id, (results) => {
        console.log(results);
        res.send(results);
    })
})

router.post('/create', (req, res, next) => {
    insert('author', req.body, (result) => {
        if (!result) res.status(401).send({
            message: 'Cannot insert data'
        });
        res.send(result);
    })
})

router.post('/edit/:id', (req, res, next) => {
    update('author', req.body, req.params.id, (result) => {
        res.send(result);
    })
})

router.post('/delete/:id', (req, res, next) => {
    deletion('author', req.params.id, (result) => {
        res.send(result);
    })
})
module.exports = router;