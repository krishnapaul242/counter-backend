const express = require("express");
const app = express(); // creating an express instance
const port = 3000;

var counter = 0;

app.get("/counter", (request, response) => {
    response.send("Counter: " + counter);
})

app.get("/increase-counter", (request, response) => {
    counter++;
    response.send("Counter:" + counter);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
