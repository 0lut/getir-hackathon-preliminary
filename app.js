const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");

const app = express();

mongoose.connect(
	"mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon"
);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
	console.log("Connected to getir database");
});

const searchRecords = require("./controllers/searchRecords");

app.listen(process.env.PORT || 5000);
app.use(parser.json());
app.use("/", searchRecords);
