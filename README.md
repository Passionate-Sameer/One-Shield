One-Shield
This is a simple full stack web application that generates insurance quotes for customers.

Steps to run:
1. Download the zip file or clone the repo.
2. Install the postgres (https://postgresapp.com/).
3. CD to backend and run below command:
    npm install && npm start
4. CD to frontend and run below command:
    npm install && npm run dev
5. Open browser and paste http://localhost:5173/
6. Go to the bottom of the site and use "Get a Quick Estimate".
7. Execute "npm test" to run unit tests in frontend.

Front-end Implementation:
- ReactJS

Back-end Implementation:
- NodeJS
- ExpressJS
- PostgreSQL

Architecture:
One server serving static files and reverse proxying to the middleware server. (Port: 5050)
One server as a middleware. (Port: 5060)
One server as an API connecting to the PostgreSQL database. (Port: 5070)
One table in database that holds user data age, vehicle year, vehicle type. Along with insurance amount.
Client is available on http://localhost:5173/

Notes:
- Dummy data will be automatically generated on the initial run of the backend (code is written in /backend/src/database/dbCreation.js).
- Only Quick Quote functionality is availble as of now.
- postgres usename and password are mentioned in plain text. Ideally it should be read from environment variables/.env file.


Limitations:
Due to time constraints following was adopted.
- Javascript instead of Typescript
- Plain CSS instead of SCSS
- For simplicity one Database table was used instead of multiple tables. However, it has lot of duplicate data that could be reduced by creating multiple tables and then using JOIN to get the required data. Also, db indexing could be done to improve read performance.
- Only one unit test case was created instead of many relevant test cases in the frontend.