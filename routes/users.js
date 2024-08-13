var express = require('express');
var router = express.Router();

let users = { items: [] };

router.post('/', (req, res) => {
    users.items.push(req.body);
    res.json(users);
});

router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;
