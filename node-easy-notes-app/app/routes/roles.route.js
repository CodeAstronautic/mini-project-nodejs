const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const roles_controller = require('../controllers/roles.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', roles_controller.test);
router.post('/role', roles_controller.createRole);

router.get('/roles/:id', roles_controller.getRole);
router.put('/role/:id', roles_controller.updateRole);
router.delete('/role/:id', roles_controller.deleteRole);

module.exports = router;