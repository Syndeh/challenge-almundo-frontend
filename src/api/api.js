var express = require("express"),
    app = express(),
    data = require("../data/data.json"),
    bodyParser  = require("body-parser"),
    _ = require("lodash");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var router = express.Router();

router.get('/hotels', function(req, res) {
    var filter = {};
    req.query.stars && (filter.stars = (+req.query.stars));
    req.query.name && (filter.name = req.query.name);
    res.json(_.filter(data, filter));
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
