const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const leads_controller = require("../controllers/leads.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", leads_controller.test);
router.post("/leads", leads_controller.createLead);
router.get("/leads", leads_controller.getLeads);
router.put("/leads/:id", leads_controller.updateLead);
router.get("/lead/:id", leads_controller.getLead);
router.delete("/leads/:id", leads_controller.deleteLead);

module.exports = router;
