const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "@UTbootcamp23",
    database: "employeeTracker",
  },
  console.log("Connected to the Employee Tracker Database.")
);
db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
// call once somewhere in the beginning of the app
// const cTable = require('console.table');
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20
