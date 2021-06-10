const express = require("express");
const router = express.Router();

const bibtex = require('bibtex');
const Cite = require('citation-js');

var bibtexParse = require('bibtex-parse-js');

const csl = require("biblatex-csl-converter");
const getById = require("../mysql/getById");
const getAuthorsByPostId = require('../mysql/getAuthorsByPostId');


router.get('/parse', (req, res, next) => {

    const input = `
        
    @InProceedings{mut2011,
   author    = {Pradeep Muthukrishnan and Dragomir Radev and Qiaozhu Mei},
   title     = {Simultaneous Similarity Learning and Feature-Weight Learning for Document Clustering},
   booktitle = {Proceedings of TextGraphs-6: Graph-based Methods for Natural Language Processing},
   month     = {June},
   year      = {2011},
   address   = {Portland, Oregon},
   publisher = {Association for Computational Linguistics},
   url       = {http://www.aclweb.org/anthology/W11-1107},
   doi      = { some_random_text },
   pages = {42--50}
   }
`;

const example = new Cite(input);

let output = example.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US'
  })
  
  console.log(output)
  let csl_json = example.get()
  let next_data = example.get({format: 'real', type: 'json', style: 'bibtex'})
  console.log(next_data);


    res.send(next_data);
}
);

router.post('/parse', (req, res, next) => {
  const cite = Cite(req.body.bibtex);
  let output = cite.get({format: 'real', type: 'json', style: 'bibtex'});
  res.send({ data: output });
});

router.post('/apa', (req, res, next) => {
  console.log(req.body.data);
  const cite = Cite(req.body.data);
  let output = cite.get({format: 'real', type: 'json', style: 'bibtex'});
  let apa = Cite(output);
  console.log(apa);

  output = apa.format('bibliography', {
    format: 'text',
    template: 'apa',
    lang: 'en-US'
  });
  console.log(output);
  res.send({ output });

})
router.post('/vancouver', (req, res, next) => {
  const cite = Cite(req.body.data);
  let output = cite.format('bibliography', {
    format: 'text',
    template: 'vancouver',
    lang: 'en-US'
  });
  res.send({ output });
})
router.post('/bibtex', (req, res, next) => {
  const cite = Cite(req.body.data);
  let output = cite.get({format: 'real', type: 'string', style: 'bibtex'})
  res.send({ output });
})

router.get('/all/:id', (req, res, next) => {
  let bibJSON = {};
  let properties = {};

  getById('publication', req.params.id, (result) => {
    console.log(result)
    // bibJSON.label = result.label;
    // bibJSON.type = result.type;
    properties.title = result.title;
    properties.url = result.link;
    properties.doi = result.DOI;
    properties.date = result.publication_date;

    if(result.publisher_id != null) {

    }
    res.send({ message: "work on progress" });
  })

})
router.post('/all', (req, res, next) => {
  const cite = Cite(req.body.data);
  let vancouver = cite.format('bibliography', {
    format: 'html',
    template: 'vancouver',
    lang: 'en-US'
  });
  let apa = cite.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US'
  });
  let bibtex = cite.get({format: 'real', type: 'html', style: 'bibtex'})
  res.send({ apa, vancouver, bibtex });
})

module.exports = router;