const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ Message: "The API is up!" });
});

module.exports = router;