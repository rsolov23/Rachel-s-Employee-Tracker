const cTable = require("console.table");
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
  console.table([
    `
  ╔═══╗─────╔╗
  ║╔══╝─────║║
  ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗
  ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣
  ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣
  ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝
  ───────║║──────╔═╝║
  ───────╚╝──────╚══╝
  ╔═╗╔═╗
  ║║╚╝║║
  ║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
  ║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
  ║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
  ╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
  ──────────────╔═╝║
  ──────────────╚══╝`,
  ])
);
db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
