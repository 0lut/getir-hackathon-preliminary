/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const express = require("express");
const axios = require("axios");
const app = express();
const parser = require("body-parser");
app.use(parser.json());

app.listen(3000);
app.post("/searchRecords", (req, res) => {
	axios
		.post(
			"https://getir-bitaksi-hackathon.herokuapp.com/searchRecords",
			req.body
		)
		.then(x => {
			res.setHeader("Content-Type", "application/json");
			res.send(JSON.stringify(x.data)).end();
		})
		.catch(err => {
			res.send({message: "Error occured" }).end();
		});
});
