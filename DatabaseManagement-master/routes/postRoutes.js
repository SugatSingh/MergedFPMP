const express = require("express");
const getAll = require("../mysql/getAll");
const getById = require("../mysql/getById");
const insert = require("../mysql/insert");
const update = require('../mysql/update');
const searchPost = require("../mysql/searchPost");
const deletion = require('../mysql/delete');
const insertMultipleContribution = require("../mysql/insertMultipleContribution");
const async = require('async');
const getProceedingList = require('../mysql/getProceedingList');

const router = express.Router();
const post_type = ['journal_article', 'conference_article', 'book_chapter', 'proceeding'];

router.post('/search', (req, res, next) => {
  console.log(req.body);
  searchPost(req.body.search_criteria, req.body.field, req.body.value, (results) => {
    res.send(results);
  })
});

router.get('/proceedinglist', (req, res, next) => {
  console.log('here');
  getProceedingList((results) => {
    res.send(results);
  });
});

router.get('/:id', (req, res, next) => {

  getById('publication', req.params.id, (result) => {
    res.send(result);
  })
})
router.get('/', (req, res, next) => {
  getAll('publication', (results) => {
    res.send(results);
  })
})


router.use('/:type/:action', (req, res, next) => {
  if (!post_type.includes(req.params.type)) {
    res.status(404).send({
      message: "Error: No such publication found"
    })
  }
  next();

})
router.get('/:type/search', (req, res, next) => {
  searchPost({}, 'publication_type', req.params.type, (results) => {
    res.send(results);
  })
})

router.post('/:type/create', (req, res, next) => {
  // serarch if already exist
  async.waterfall([
    function (callback) {
      insert('publication', req.body.publication_data, (result) => {
        if (!result) {
          res.status(401).send({
            message: 'Cannot insert data'
          });
        } else {
          console.log("result", result);
          req.body.specific_data.publication_id = result.insertId;
          callback(null, req.params.type, req.body.specific_data, result.insertId);
        }
      });

    },
    function (type, specific_data, id, callback) {
      insert(type, specific_data, (data) => {
        if (!data) res.status(401).send({
          message: 'Cannot insert data'
        });
        console.log('author data', req.body.author_data);
        author_array = req.body.author_data.map(author => {
          return { author_id: author, publication_id: id };
        });
        callback(null, author_array, id);

      })

    },
    function (authors, id, callback) {
      // arg1 now equals 'three'
      insertMultipleContribution('contribution', authors, (contribution) => {
        if (!contribution) res.status(401).send({
          message: 'Authors insert failed'
        })
        res.send({
          message: "Insertion Successful",
          publication_id: id
        });
      callback(null, 'done');

      })
    }
  ], function (err, result) {
    // result now equals 'done'
  });

})

router.post('/:type/edit/:id', (req, res, next) => {
  update('publication', req.body, req.params.id, (result) => {
    res.send(result);
  })
})

router.post('/:type/delete/:id', (req, res, next) => {
  async.waterfall([
    function(callback) {
      deletion('contribution', req.params.id, (result)=> {
        console.log(result);
        callback(null);
      })
    },
    function(callback) {
      deletion(req.params.type, req.params.id, (result) => {
        console.log(result);
        callback(null);
      })
    },
    function(callback) {
      deletion('publication', req.params.id, (result) => {
        console.log(result);
        res.send({ message: "Deletion Completed" });
        callback(null);
      })
    }
  ], (error) => {
    res.status(401).send({ message: "error" });
  })


})
module.exports = router;