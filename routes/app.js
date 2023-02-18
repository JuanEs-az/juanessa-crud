
const {Router} = require('express');
const router = Router();
const {getPasswords} = require("../controllers/app");

router.get('/pw', getPasswords);

module.exports = router;