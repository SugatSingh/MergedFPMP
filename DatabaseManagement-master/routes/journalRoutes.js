const express = require("express");
const router = express.Router();
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const search = require("../mysql/search");
const deletion = require("../mysql/delete");
const getAllByColumn = require("../mysql/getAllByColumn");
const getJournalByPostId = require('../mysql/getJournalByPostId');
router.get('/name', (req, res, next) => {
    const columns = ['journal_id', 'journal_name'];
    getAllByColumn('journal', columns,  (results) => {
        res.send(results);
    })
});
router.get('/post/:id', (req,res, next)=> {
    getJournalByPostId(req.params.id, (results) => {
        res.send(results);
    })
})
router.get('/:id', (req, res, next) => {
    getById('journal_view', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/', (req, res, next) => {
    getAll('journal_view', (results) => {
        res.send(results);
    })
})


router.post('/search', (req, res, next) => {
    search('journal_view', req.body.field, req.body.value, (results) => {
        console.log(results);
        res.send(results);
    })
})

router.post('/create', (req, res, next) => {
    console.log(req.body)
    insert('journal', req.body, (result) => {
        if (!result) res.status(401).send({
            message: 'Cannot insert data'
        });
        res.send(result);
    })
})

router.post('/edit/:id', (req, res, next) => {
    update('journal', req.body, req.params.id, (result) => {
        res.send(result);
    })
})

router.post('/delete/:id', (req, res, next)=> {
    deletion('journal', req.params.id, (result)=> {
        res.send(result);
    })
})
module.exports = router;