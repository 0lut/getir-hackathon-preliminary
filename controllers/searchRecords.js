/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const router = require("express").Router();
const RecordsModel = require("../models/searchRecords")();

router.post("/searchRecords", (req, res) => {
	const data = RecordsModel.find(req.body);
	data
		.then(fulfill => {
			res.send({ fulfill }).end();
		})
		.catch(err => {
			res.send({ statusCode: 400, message: "Something went wrong lol" }).end();
			console.error(err);
		});
});

module.exports = router;
