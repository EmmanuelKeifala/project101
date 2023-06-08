/** @format */

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

app.get("/api/listings", async (req, res) => {
	const url =
		"mongodb+srv://emmanuelkeifala:12345emmanuel@cluster0.voflnui.mongodb.net/test";
	const dbName = "test";

	try {
		const client = await MongoClient.connect(url);
		console.log("Connected successfully to the server");

		const db = client.db(dbName);
		const collection = db.collection("listings");

		const documents = await collection.find({}).toArray();
		console.log("Retrieved documents:", documents);

		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
