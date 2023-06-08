/** @format */

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 3001;

// MongoDB Atlas connection URI
const uri =
	"mongodb+srv://emmanuelkeifala:12345emmanuel@cluster0.voflnui.mongodb.net/test?retryWrites=true&w=majority";

app.get("/api/listings", async (req, res) => {
	const dbName = "test";

	try {
		const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection("Listing");

		const documents = await collection.find({}).toArray();
		console.log("Retrieved documents:", documents);

		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});

app.use(
	cors({
		origin: "http://localhost:3001",
	}),
);
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
