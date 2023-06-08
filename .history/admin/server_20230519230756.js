/** @format */
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

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
app.get("/death-info/:id", async (req, res, next) => {
	const dbName = "test";

	try {
		const client = await MongoClient.connect(uri, {
			useUnifiedTopology: true,
		});
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection("Listing");

		const documents = await collection.findOne({
			_id: new ObjectId(req.params.id),
		});

		console.log("Retrieved documents:", documents);
		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
}),
	app.get("/birth-info/:id", async (req, res, next) => {
		const dbName = "test";

		try {
			const client = await MongoClient.connect(uri, {
				useUnifiedTopology: true,
			});
			console.log("Connected successfully to the MongoDB Atlas cluster");

			const db = client.db(dbName);
			const collection = db.collection("Listing");

			const documents = await collection.findOne({
				_id: new ObjectId(req.params.id),
			});

			console.log("Retrieved documents:", documents);
			res.json(documents);

			client.close();
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ error: "An error occurred" });
		}
	}),
	app.put("/api/applications/:id/accept", async (req, res) => {
		const dbName = "test";
		const applicationId = req.params.id;

		try {
			const client = await MongoClient.connect(uri, {
				useUnifiedTopology: true,
			});
			console.log("Connected successfully to the MongoDB Atlas cluster");
			const db = client.db(dbName);
			// Step 1: Retrieve application data from the old collection
			const oldApplication = await db
				.collection("Listings")
				.findOne({ _id: applicationId });
			if (!oldApplication) {
				return res.status(404).json({ error: "Application not found" });
			}

			// Step 2: Save application data to the new "Accepted" collection
			await db.collection("Accepted").insertOne(oldApplication);

			// Step 3: Delete application data from the old collection
			await db.collection("Listings").deleteOne({ _id: applicationId });

			// Step 4: Send acceptance email to the user (implement your email sending logic here)
			sendAcceptanceEmail(oldApplication.email);

			res.json({ message: "Application accepted successfully" });

			client.close();
		} catch (error) {
			console.error("Error accepting application:", error);
			res
				.status(500)
				.json({ error: "An error occurred while accepting the application" });
		}
	}),
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
