
/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const router = require("express").Router();

// module.exports = records => {
// 	router.post("/searchRecords", (req, res) => {
// 		records.findByKey(req.body.key, (err, data) => {
// 			if (err) {
// 				res.sendStatus(404);
// 			} else {
// 				res.send(data);
// 			}
// 		});
// 	});
// 	return router;
// };

router.post("/searchRecords", (req, res) => {
	
	// return router;
});

module.exports = router;