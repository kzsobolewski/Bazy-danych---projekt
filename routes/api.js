const express = require('express');
const router = express.Router();



router.use('/workers', require('./workers') );
router.use('/jobs', require('./jobs') );
router.use('/depts', require('./depts') );

module.exports = router;
