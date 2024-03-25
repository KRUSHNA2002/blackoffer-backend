const express = require('express');
const cors = require('cors');
const Insight = require('./models/Insight');
const { MongoClient } = require('mongodb');
require("./db/conn");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const router = require("./routes/all_routes.js");

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

app.use(router);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
