const express = require('express');
const router = express.Router();

/*
 * GET status:
 * 200 - OK
 * 404 - Not found
 *
 * POST status:
 * 201 - Created
 * 400 - Empty body
 * 409 - SQL Conflict
 *
 * DELETE status:
 * 200 - OK
 * 409 - Conflict
 */

router.use('/workers', require('./workers') );
router.use('/jobs', require('./jobs') );
router.use('/depts', require('./depts') );
router.use('/entries', require('./entries') );

module.exports = router;
