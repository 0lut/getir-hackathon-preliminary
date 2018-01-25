/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const mongoose = require("mongoose");
module.exports = () => {
	const RecordSchema = mongoose.Schema(
		{
			startDate: String,
			endDate: String,
			minCount: Number,
			maxCount: Number
		},
		{ collection: "records" }
	);

	const records = mongoose.model("Records", RecordSchema);

	const find = (query, callback) => {
		records
			.find()
			// .where(RecordSchema.minCount)
			// .gt(query.minCount)
			// .where(RecordSchema.maxCount)
			// .lt(query.maxCount)
			.then(res => console.log(res))
			.catch(err => console.error(err));
	};
	return {
		find
	};
};
