// require the Express module
const express = require("express");

// creates an instance of an Express server
const app = express();

// convert params and body into usable JSON
app.use(express.json());

// server.js, any file with a created and configured Express app
app.use(express.static('./public'));

// import cartItems route
const cartItems = require('./cartItems');

// use and setup items route
app.use('/', cartItems);

// define the port
const port = 4322;

// run the server
app.listen(port, () => console.log(`Listening at http://localhost:${port}/cart-items ...`));








// const express = require("express");
// const cartItems = require("./cartItems");
// // const cartData = require("./cartData");

// const app = express();
// app.use(express.json());

// app.use("/", cartItems);

// const port = 9000;

// // run the server
// app.listen(port, () => console.log(`Listening at http://localhost:${port}/cart-items`))