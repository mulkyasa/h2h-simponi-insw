var express = require('express');
var router = express.Router();
const dataController = require('../controller');

/* POST */
router.post('/', dataController.addData);
router.get('/', dataController.getAllData);
router.delete('/:id', dataController.deleteData);

module.exports = router;
