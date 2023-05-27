const express = require("express");
const axios = require("axios");


const app = express();

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
			status: 'IN_PLAY',
		},
	});
	res.send(query.data);
});