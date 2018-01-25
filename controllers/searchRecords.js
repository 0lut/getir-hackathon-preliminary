
/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/


const router = require("express").Router();
const findRecords = require("../models/searchRecords");

router.post("/searchRecords", (req, res) => {
	
	findRecords(req.body);
	res.end("hirrime");
});

module.exports = router;

