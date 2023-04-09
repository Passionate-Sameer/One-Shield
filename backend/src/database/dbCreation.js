const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const pool = require('./dbConnection')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'dbPassword',
    port: 5432,
});

const createDatabase = async () => {
    try {
        await client.connect();
        await client.query('CREATE DATABASE insurance');
        console.log('Database CREATED successfully');
        return true;
    } catch (error) {
        console.log("==========START============")
        console.error(error.stack);
        console.log("===========END=============")
        return false;
    } finally {
        await client.end();
    }
};

const createDbTable = async () => {
    try {
        const client = await pool.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS premium_amount (
                age INT,
                vehicle_year INT,
                vehicle_type INT,
                min_premium INT,
                max_premium INT
            )
        `);
        console.log('Table CREATED successfully');
        client.release();
        return true;
    } catch (error) {
        console.log("==========START============")
        console.error(error.stack);
        console.log("===========END=============")
        return false;
    }
}

const populateDbTable = async () => {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 25;
    try {
        const client = await pool.connect();
        await client.query(`
            INSERT INTO premium_amount (age, vehicle_year, vehicle_type, min_premium, max_premium)
            SELECT
                age,
                vehicle_year,
                vehicle_type,
                CASE vehicle_type
                    WHEN 2 THEN ROUND(7400 + (age * 100) + ((2023 - (vehicle_year-1))*100), 2)
                    WHEN 3 THEN ROUND(9300 + (age * 100) + ((2023 - (vehicle_year-1))*100), 2)
                    WHEN 4 THEN ROUND(11200 + (age * 100) + ((2023 - (vehicle_year-1))*100), 2)
                END as min_premium,
                CASE vehicle_type
                    WHEN 2 THEN ROUND(8900 + (age * 100) + ((2023 - (vehicle_year-1))*100), 2)
                    WHEN 3 THEN ROUND(10800 + (age * 100) + ((2023 - (vehicle_year-1))*100), 2)
                    WHEN 4 THEN ROUND(12700 + (age * 100) + ((2023 - (vehicle_year-1))*100), 2)
                END as max_premium
            FROM
                generate_series(18, 100) as age
            CROSS JOIN
                generate_series(${minYear}, ${currentYear}) as vehicle_year
            CROSS JOIN
                generate_series(2, 4) as vehicle_type;
        `);
      console.log('Table POPULATED successfully');
      await client.end();
      return true;
    } catch (error) {
        console.log("==========START============")
        console.error(error.stack);
        console.log("===========END=============")
        return false;
    }
}

const initializeDb = async () => {
    const filePath = path.join(__dirname, '.dbtmp');
    const isDbCreated = await createDatabase();
    if (isDbCreated) {
        console.log('Database Created');
        const isTableCreated = await createDbTable();
        if (isTableCreated) {
            console.log('Table Created');
            const isTablePopulated = await populateDbTable();
            if (isTablePopulated) {
                console.log('Table Populated');
            }
        }
    }
    fs.writeFileSync(filePath, 'Database initialized!', 'utf8');
    console.log(`${filePath} created!`);
}

module.exports = { initializeDb };