const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const purchaseModelRoutes = require('./routes/purchaseModelRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/zakup', purchaseModelRoutes);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
