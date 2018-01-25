
// import { connect } from "../../.cache/typescript/2.6/node_modules/@types/mongodb";

/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const parser = require("body-parser");
const path = require("path");

mongoose.connect(
	"mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon"
);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {

	console.log("icerdeyiz");
});




const record = require("./controllers/searchRecords");

app.listen(process.env.PORT || 5000);
app.use(parser.json());
app.use("/", record);
