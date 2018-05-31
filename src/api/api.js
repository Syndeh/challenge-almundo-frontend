var express = require("express"),
    app = express(),
    data = require("../data/data.json"),
    bodyParser  = require("body-parser"),
    _ = require("lodash");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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