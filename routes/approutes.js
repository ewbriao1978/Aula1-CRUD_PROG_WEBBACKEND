const express=require('express');
const router = express.Router();
var myController = require("../controllers/my_controller");


router.get('/',myController.showForm);
router.post('/',myController.insertData);

module.exports = router