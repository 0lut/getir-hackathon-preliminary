/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const router = require("express").Router();
const RecordsModel = require("../models/searchRecords")();

router.post("/searchRecords", async (req, res) => {
	const body = { ...req.body };
	if (body.startDate >= body.endDate)
		res
			.status(400)
			.send("Start date cannot be gte then end date")
			.end();
	else {
		try {
			const data = await RecordsModel.find(body);
			res.json( data );
			// console.log(data);
		} catch (err) {
			res.sendStatus(500);
			console.error(err);
		}
		let cnt = 0;
		// for (const i of data) cnt += 1;

		// data
		// 	.then(fulfill => {
		// 		res.send({ fulfill }).end();
		// 	})
		// 	.catch(err => {
		// 		res.send({ statusCode: 400, message: "Something went wrong lol" }).end();
		// 		console.error(err);
		// 	});
	}
});

module.exports = router;
