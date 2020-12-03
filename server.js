// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app
const app = express();

// Set the port of our application
const port = 3030;

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/phonesController.js");

app.use(routes);


app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});