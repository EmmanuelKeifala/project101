/** @format */
const express = require("express");
const cors = require("cors");
const sendMail = require("./sendMail");

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
	const query = {
		$and: [{ category: "Birth" }, { status: "pending" }],
	};

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
	const query = {
		$and: [{ category: "Death" }, { status: "pending" }],
	};
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
app.get("/api/accepted", async (req, res) => {
	const dbName = "test";

	try {
		const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection("AcceptedApplications");

		const documents = await collection.find({}).toArray();
		console.log("Retrieved documents:", documents);
		res.json(documents);

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});
app.get("/api/declined", async (req, res) => {
	const dbName = "test";

	try {
		const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const collection = db.collection("DeclinedApplications");

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
	app.put("/api/applications/accept/:id", async (req, res) => {
		const dbName = "test";
		const collectionName = "Listing";
		const acceptedCollectionName = "AcceptedApplications";
		const { id } = req.params;

		try {
			const client = await MongoClient.connect(uri, {
				useUnifiedTopology: true,
			});
			console.log("Connected successfully to the MongoDB Atlas cluster");

			const db = client.db(dbName);
			const listingsCollection = db.collection(collectionName);
			const acceptedCollection = db.collection(acceptedCollectionName);

			// Find the application by ID
			const application = await listingsCollection.findOne({
				_id: new ObjectId(req.params.id),
			});

			if (!application) {
				throw new Error("Application not found");
			}

			// Update the status of the application in the Listings collection
			await listingsCollection.updateOne(
				{ _id: new ObjectId(req.params.id) },
				{ $set: { status: "accepted" } },
			);
			// Create a copy of the application object with the updated status
			const acceptedApplication = { ...application, status: "accepted" };

			// Move the accepted application to the AcceptedApplications collection
			await acceptedCollection.insertOne(acceptedApplication);

			// Send acceptance email
			// try {
			// 	await sendMail({
			// 		email: application.email,
			// 		subject: "Birth Certificate",
			// 		message: `Hello ${application.fullname}, We are very happy to inform you that your application for a birth certificate has been vetted and it has been accepted`,
			// 	});
			// 	res.status(201).json({
			// 		success: true,
			// 		message: `email sent!`,
			// 	});
			// } catch (error) {
			// 	throw new Error(error.message, 500);
			// }

			res.json({ message: "Application accepted and email sent" });

			client.close();
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ error: "An error occurred" });
		}
	});
app.put("/api/applications/decline/:id", async (req, res) => {
	const dbName = "test";
	const collectionName = "Listing";
	const acceptedCollectionName = "DeclinedApplications";
	const { id } = req.params;

	try {
		const client = await MongoClient.connect(uri, {
			useUnifiedTopology: true,
		});
		console.log("Connected successfully to the MongoDB Atlas cluster");

		const db = client.db(dbName);
		const listingsCollection = db.collection(collectionName);
		const acceptedCollection = db.collection(acceptedCollectionName);

		// Find the application by ID
		const application = await listingsCollection.findOne({
			_id: new ObjectId(req.params.id),
		});

		if (!application) {
			throw new Error("Application not found");
		}

		// Update the status of the application in the Listings collection
		await listingsCollection.updateOne(
			{ _id: new ObjectId(req.params.id) },
			{ $set: { status: "declined" } },
		);
		// Create a copy of the application object with the updated status
		const acceptedApplication = { ...application, status: "declined" };

		// Move the accepted application to the AcceptedApplications collection
		await acceptedCollection.insertOne(acceptedApplication);

		// Send acceptance email
		// try {
		// 	await sendMail({
		// 		email: application.email,
		// 		subject: "Birth Certificate",
		// 		message: `Hello ${application.fullname}, We are very happy to inform you that your application for a birth certificate has been vetted and it has been accepted`,
		// 	});
		// 	res.status(201).json({
		// 		success: true,
		// 		message: `email sent!`,
		// 	});
		// } catch (error) {
		// 	throw new Error(error.message, 500);
		// }

		res.json({ message: "Application accepted and email sent" });

		client.close();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
