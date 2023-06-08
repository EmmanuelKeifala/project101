/** @format */
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

// MongoDB Atlas connection URI
const uri =
	"mongodb+srv://emmanuelkeifala:12345emmanuel@cluster0.voflnui.mongodb.net/test?retryWrites=true&w=majority";

// Enable CORS for all routes
app.use(cors());

app.get("/api/birth-calls", async (req, res) => {
	const dbName = "test";
	const collectionName = "Listing";
	const query = { category: "Birth" };

	try {
		const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection(collectionName);

		const documents = await collection.find(query).toArray();
		console.log("Retrieved documents:", documents);

		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});

app.get("/api/death-calls", async (req, res) => {
	const dbName = "test";
	const collectionName = "Listing";
	const query = { category: "Death" };

	try {
		const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection(collectionName);

		const documents = await collection.find(query).toArray();
		console.log("Retrieved documents:", documents);

		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});
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
app.get("/birth-info/:_id", async (req, res, next) => {
	const dbName = "test";

	try {
		const client = await MongoClient.connect(uri, {
			useUnifiedTopology: true,
		});
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection("Listing");

		const documents = await collection.findOne(
			{ _id: ObjectId(req.params._id) },
			(err, results) => {
				res.send(results);
			},
		);

		console.log("Retrieved documents:", documents);
		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
}),
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});