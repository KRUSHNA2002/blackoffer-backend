const express = require("express");
const router = new express.Router();
const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://waghumbarekrushna143:Krushna@cluster0.n7hc9to.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/api/insights', async (req, res) => {
    try {
        const database = client.db('Dash');
        const collection = database.collection('dash_data');

        // Extract filters from query parameters
        const filters = {};
        if (req.query.endYear) filters.end_year = parseInt(req.query.endYear);
        // Add other filters similarly

        // Apply filters to the MongoDB query
        const documents = await collection.find(filters).toArray();

        res.json(documents);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;
