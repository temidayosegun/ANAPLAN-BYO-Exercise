require("dotenv").config();

//Express Application Set Up
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

//mySQL client setup
const mysql = require("mysql2");
const dbkeys = require('./databaseKeys');

const pool = mysql.createPool({
    host: dbkeys.host,
    port: dbkeys.port,
    user: dbkeys.user,
    password: dbkeys.password,
    database: dbkeys.database,
});

//Express Route Definitions
app.get("/", (req, res) => {
    res.send("Express Server here")
})

app.get("/dashboards", (req, res) => {
    let sql = "SELECT * FROM dashboards;"
    pool.execute(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express Server is running on port ${PORT}`))
