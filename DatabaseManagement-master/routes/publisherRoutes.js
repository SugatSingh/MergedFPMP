const express = require("express");
const router = express.Router();
const async = require("async");
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const search = require("../mysql/search");
const deletion = require('../mysql/delete');
const getAllByColumn = require("../mysql/getAllByColumn");

router.get('/name', (req, res, next) => {
    const column = ['publisher_id', 'publisher_name'];
    getAllByColumn('publisher', column, (results) => {
        res.send(results);
    })
})
router.get('/:id', (req, res, next) => {
    getById('publisher', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/', (req, res, next) => {
    getAll('publisher', (results) => {
        res.send(results);
    })
})

router.post('/search', (req, res, next) => {
    search('publisher', req.body.field, req.body.value, (results) => {
        res.send(results);
    })
})

router.post('/create', (req, res, next) => {
    async.waterfall([
        function(next) {
            insert('publisher', req.body, (result) => {
                if (!result) res.status(401).send({
                    message: 'Cannot insert data'
                });
                console.log(result)
                next(null, result.insertId);
            })
        },
        function(id, next) {
            getById('publisher', id, (publisher) => {
                console.log(publisher);
                res.send(publisher);
            })
        }

    ], (error) => {
        res.status(401).send({
            message: 'Cannot insert data'
        });
    })
    
})

router.post('/edit/:id', (req, res, next) => {
    update('publisher', req.body, req.params.id, (result) => {
        res.send(result);
    })
})

router.post('/delete/:id', (req, res, next) => {
    deletion('publisher', req.params.id, (result) => {
        res.send(result);
    })
})
module.exports = router;