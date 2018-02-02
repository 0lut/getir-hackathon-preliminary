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
			const payload = { msg: "Success", code: "0" };
			payload.records = await RecordsModel.find(body);
			res.json(payload).end();
		} catch (err) {
			res.sendStatus(500).end();
		}
	}
});

module.exports = router;
