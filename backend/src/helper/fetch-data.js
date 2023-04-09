const pool = require("../database/dbConnection");

const fetchEstimateDataFromDB = async (req, res) => {
  try {
    const { age, zipCode, vehicleYear, vehicleType } = req.body;

    // Some sanity check
    if (!age || !zipCode || !vehicleYear || !vehicleType) {
      console.log(age, zipCode, vehicleYear, vehicleType)
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const ageInt = parseInt(age);
    const zipCodeInt = parseInt(zipCode);
    const vehicleYearInt = parseInt(vehicleYear);
    const vehicleTypeInt = parseInt(vehicleType);

    const dbSelectQuery = `SELECT min_premium, max_premium FROM premium_amount WHERE age = ${ageInt} AND vehicle_year = ${vehicleYearInt} AND vehicle_type = ${vehicleTypeInt}`

    // Get the estimate amount from the database
    const client = await pool.connect();
    const result = await client.query(dbSelectQuery);
    client.release();
    if (result.length === 0){
      return res.status(400).json({ error: 'Incorrect data supplied' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

module.exports = { fetchEstimateDataFromDB };
