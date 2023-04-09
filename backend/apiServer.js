const cors = require("cors");
const express = require("express");
const fs = require('fs');
const path = require('path');

const { initializeDb } = require("./src/database/dbCreation")
const { fetchEstimateDataFromDB } = require("./src/helper/fetch-data");

// Initialize the Database
if (!fs.existsSync(path.join('./src/database', '.dbtmp'))) {
  initializeDb();
}

// Server
const apiServer = express();

// Middlewares
apiServer.use(cors());
apiServer.use(express.json());
apiServer.use(express.urlencoded({ extended: false }));

// Routes
apiServer.post("/api/v1/quick_quote", fetchEstimateDataFromDB);

// Start server
const port = process.env.PORT || 5070;
apiServer.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

