const express = require("express");
const router = express.Router();
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const search = require("../mysql/search");
const deletion = require("../mysql/delete");
const getAllByColumn = require('../mysql/getAllByColumn');

router.get('/name', (req, res, next) => {
    getAllByColumn('department', ['department_id', 'department_name'], (results) => {
        res.send(results);
    });
})

router.get('/count', (req, res, next) => {
    getDepartmentCount('department', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/posts', (req, res, next) => {
    getDepartmentPosts('department', req.params.id, (result) => {
        res.send(result);
    })
})
  
router.get('/:id', (req, res, next) => {
    getById('department', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/', (req, res, next) => {
    getAll('department', (results) => {
        res.send(results);
    })
})

router.post('/search', (req, res, next) => {
    search('department', req.body.field, req.body.value, (results) => {
        res.send(results);
    })
})

router.post('/create', (req, res, next) => {
    insert('department', req.body, (result) => {
        if (!result) res.status(401).send({
            message: 'Cannot insert data'
        });
        res.send(result);
    })
})

router.post('/edit/:id', (req, res, next) => {
    update('department', req.body, req.params.id, (result) => {
        res.send(result);
    })
})

router.post('/delete/:id', (req, res, next)=> {
    deletion('department', req.params.id, (result) => {
        res.send(result);
    })
} )
module.exports = router;