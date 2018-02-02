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
	const find = query => {
		return records
			.aggregate([
				{
					$match: {
						createdAt: {
							$gte: new Date(query.startDate),
							$lte: new Date(query.endDate)
						}
					}
				},
				{
					$project: {
						_id: false,
						createdAt: true,
						key: true,
						totalCount: { $sum: "$counts" }
					}
				},
				{
					$match: {
						totalCount: {
							$gte: parseInt(query.minCount),
							$lte: parseInt(query.maxCount)
						}
					}
				}
			])

			.then(res => {
				return res;
			});
	};
	return {
		find: find
	};
};
