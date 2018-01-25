// import { connect } from "../../.cache/typescript/2.6/node_modules/@types/mongodb";

/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

var express = require("express");
const app = express();
var mongoose = require("mongoose");
var parser = require("body-parser");
var path = require("path");

mongoose
	.connect(
		"mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon"
	)
	.then(console.log("Succesfully connected!"))
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

const record = require("./controllers/searchRecords");

app.listen(3000);

app.use(parser.json);

app.use("/", record);

