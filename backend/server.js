const express = require("express");
const axios = require("axios");
const cors = require('cors');


const app = express();
app.use(cors());


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.use(express.json());
app.listen(300);

app.get("/", (req, res) => {
	res.send("Hello to my football API");
});

app.get("/inplay", async (req, res) => {
	const query = await axios.get('https://api.football-data.org/v4/matches/', {
		headers: {
			'X-Auth-Token': 'a730affc45cf4fe6a666e00a8efbb99f',
		},
		params: {
			status: 'LIVE',
		},
	});
	res.send(query.data);
});