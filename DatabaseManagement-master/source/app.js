const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRoutes = require("../routes/postRoutes");
const userRoutes = require("../routes/userRoutes");
const journalRoutes = require('../routes/journalRoutes');
const conferenceRoutes = require('../routes/conferenceRoutes');
const bookRoutes = require('../routes/bookRoutes');
const authorRoutes = require('../routes/authorRoutes');
const publisherRoutes = require('../routes/publisherRoutes');
const citationRoutes = require('../routes/citationRoutes.js');
const departmentRoutes = require('../routes/departmentRoutes.js');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

try {
  app.use("/api/posts", postsRoutes);
  app.use("/api/journal", journalRoutes);
  app.use("/api/book", bookRoutes);
  app.use("/api/conference", conferenceRoutes);
  app.use("/api/author", authorRoutes);
  app.use('/api/publisher', publisherRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/citation", citationRoutes);
  app.use("api/department", departmentRoutes);
  app.use("**", (req, res, next) => {
    res.status(404).send('<h1>Sorry, Page Not Found </h1>');
  });
} catch (error) {
  console.error(error);
  res.status(401).json({
    message : "Error occured"
  })
}


module.exports = app;