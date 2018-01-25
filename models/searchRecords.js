/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const mongoose = require("mongoose");
module.exports = () => {
	const RecordSchema = mongoose.Schema(
		{
			_id: Number,
			key: String,
			value: String,
			createdAt: Date,
			counts: Array
		},
		{ collection: "records" }
	);

	const records = mongoose.model("Records", RecordSchema);
	// I will do it I PROMISE, JK!
	const find = (query, callback) => {
		return records
			.find({
				createdAt: {
					$gte: new Date(query.startDate),
					$lte: new Date(query.endDate)
				}
			})
			.count()
			.then(res => {
				return res;
			})
			.catch(err => console.error(err));
		
	};
	return {
		find: find
	};
};
