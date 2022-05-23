require('dotenv').config();

module.exports = {
    HOST: process.env.RDB_CONNECTION,
    PORT: "1434",
    USER: process.env.RDB_USER_NAME,
    PASSWORD: process.env.RDB_PASSWORD,
    DB: process.env.RDB_DATABASE,
    dialect: "mssql",
    "dialectOptions": {
        "options": {
             "encrypt": true
         },
    driver: "tedious",
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    
};