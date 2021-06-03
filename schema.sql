DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;
USE employeeTracker;

CREATE TABLE department (
    -- id: INT PRIMARY KEY
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    -- name: VARCHAR(30) to hold department name
    name VARCHAR(30) NOT NULL, 
    
);

CREATE TABLE role (
    -- id: INT PRIMARY KEY
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    -- title: VARCHAR(30) to hold role title
    title VARCHAR(30) NOT NULL, 
    -- salary: DECIMAL to hold role salary
    salary DECIMAL(6,2) NOT NULL, 
    -- department_id: INT to hold reference to department role belongs to
    department_id INT NOT NULL, 

);

CREATE TABLE employee (
    -- id: INT PRIMARY KEY
    id INTEGER AUTO_INCREMENT, 
    -- first_name: VARCHAR(30) to hold employee first name
    first_name VARCHAR(30) NOT NULL, 
    -- last_name: VARCHAR(30) to hold employee last name
    last_name VARCHAR(30) NOT NULL, 
    -- role_id: INT to hold reference to employee role
    role_id INTEGER NOT NULL, 
    -- manager_id: INT to hold reference to another employee that is manager of the current employee. This field might be null if the employee has no manager.
    manager_id INTEGER,

);









