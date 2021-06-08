const inquirer = require("inquirer");
const db = require("./db/connection");

let listOfDepartments = [];

const startApp = async () => {
  populateDepartments();
  let response = await inquirer.prompt([
    {
      name: "selection",
      type: "list",
      message: "Please make your selection.",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);

  console.log(response);
  switch (response.selection) {
    case "View all departments":
      viewDept();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployee();
      break;
  }
};

startApp();

const viewDept = () => {
  const query = `SELECT * FROM department;`;
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    startApp();
  });
};
// startApp();
const viewRoles = () => {
  let queryString = `
    SELECT title, salary, department.name AS department 
    FROM role
    JOIN department
    WHERE department_id = department.id`;

  db.query(queryString, (err, data) => {
    if (err) throw err;
    console.table(data);

    startApp();
  });
};

const viewEmployees = () => {
  const query = `SELECT * FROM employee;`;

  db.query(query, (err, data) => {
    if (err) throw err;
    console.table(data);

    startApp();
  });
};
// viewEmployee();
function populateDepartments() {
  listOfDepartments = [];
  db.query(`SELECT * FROM department`, (err, data) => {
    data.forEach((index) => {
      listOfDepartments.push(index.name);
    });
  });
}
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "departmentNew",
        message: "What is the name of your new Department?",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO department(name) VALUES (?)",
        [response.departmentNew],
        (err, data) => {
          if (err) throw err;
          console.log(data);
          startApp();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "newRole",
        message: "What is the name of the new Role?",
      },
      {
        name: "salary",
        message: "How much cash money?",
      },
      {
        name: "depID",
        message: "Which department does this new role belong to?",
        type: "list",
        choices: listOfDepartments,
      },
    ])
    .then((response) => {
      console.log(listOfDepartments.indexOf(response.depID) + 1);
      db.query(
        "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)",
        [
          response.newRole,
          response.salary,
          listOfDepartments.indexOf(response.depID) + 1,
        ],
        (err, data) => {
          if (err) throw err;
          console.log(data);
          startApp();
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "newName",
        message: "Please enter first name",
      },
      {
        name: "lastName",
        message: "Please enter last name",
      },
      {
        name: "employeeRole",
        message: "Please enter employee role",
      },
      {
        name: "newManager",
        message: "Please enter manager",
      },
    ])
    .then((response) => {
      console.log(
        listOfDepartments.indexOf(
          response.employeeRole.id,
          response.newManager.id
        ) + 1
      );
      db.query(
        "INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)",
        [
          response.newName,
          response.lastName,
          response.employeeRole,
          response.newManager,
        ],
        (err, data) => {
          if (err) throw err;
          console.log(data);
          startApp();
        }
      );
    });
};

const updateEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseEmployee",
        message: "Please choose an employee to update.",
        choices: [],
      },
      {
        type: "list",
        name: "roleList",
        message: "Please choose the new role for this employee",
        choices: [],
      },
    ])
    .then((response) => {
      console.log(listOfDepartments.indexOf(response.viewEmployees()) + 1);
      db.query(
        "UPDATE employee SET role_id ? WHERE last_name ?",
        [response.employeeRole, response.lastName],
        (err, data) => {
          if (err) throw err;
          console.log(data);
          startApp();
        }
      );
    });
};
