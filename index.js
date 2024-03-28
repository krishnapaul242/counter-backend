const express = require("express");
const app = express(); // creating an express instance
var mysql = require("mysql");

const utils = require("./utils");
const queries = require("./queries");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "counter",
});

connection.connect();

const port = 3000;

var counter = 0;

connection.query(
  queries.getCounterValue(utils.getFormattedDate()),
  function (error, results, fields) {
    if (error) throw error;
    const currentCounterValue = results[0].counterValue;
    counter = currentCounterValue;
  }
);

app.get("/counter", async (request, response) => {
  const formattedDate = utils.getFormattedDate();
  const query = queries.getCounterValue(formattedDate);
  await connection.query(query, function (error, results, fields) {
    if (error) throw error;
    const currentCounterValue = results[0].counterValue;
    counter = currentCounterValue;
    response.send("Counter: " + currentCounterValue);
  });
});

app.get("/increase-counter", async (request, response) => {
  const formattedDate = utils.getFormattedDate();
  const query = queries.increaseCounterValue(formattedDate, counter);
  await connection.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log("Results: ", results);
    response.send("Counter increased.");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
