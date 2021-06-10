const express = require("express");
const router = express.Router();
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const getAuthorsByBook = require("../mysql/getAuthorsByBook");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const search = require("../mysql/search");
const deletion = require("../mysql/delete");
const getAllByColumn = require('../mysql/getAllByColumn');

router.get('/name', (req, res, next) => {
    getAllByColumn('book', ['book_id', 'book_title'], (results) => {
        res.send(results);
    });
})
router.get('/getbookauthor', (req, res, next) => {
    getAuthorsByBook(req.query.book_id, (results) => {
      res.send(results);
    })
  });
  
router.get('/:id', (req, res, next) => {
    getById('book_view', req.params.id, (result) => {
        res.send(result);
    })
})
router.get('/', (req, res, next) => {
    getAll('book_view', (results) => {
        res.send(results);
    })
})

router.post('/search', (req, res, next) => {
    search('book_view', req.body.field, req.body.value, (results) => {
        res.send(results);
    })
})

router.post('/create', (req, res, next) => {
    insert('book', req.body, (result) => {
        if (!result) res.status(401).send({
            message: 'Cannot insert data'
        });
        res.send(result);
    })
})

router.post('/edit/:id', (req, res, next) => {
    update('book', req.body, req.params.id, (result) => {
        res.send(result);
    })
})

router.post('/delete/:id', (req, res, next)=> {
    deletion('book', req.params.id, (result) => {
        res.send(result);
    })
} )
module.exports = router;