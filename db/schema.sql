DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    -- id: INT PRIMARY KEY
    id INTEGER AUTO_INCREMENT PRIMARY KEY , 
    -- name: VARCHAR(30) to hold department name
    name VARCHAR(30)
    );

CREATE TABLE role (
    -- id: INT PRIMARY KEY
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    -- title: VARCHAR(30) to hold role title
    title VARCHAR(30), 
    -- salary: DECIMAL to hold role salary
    salary DECIMAL(10,2),
    -- department_id: INT to hold reference to department role belongs to
    department_id INTEGER,
    
    -- CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE

   );

CREATE TABLE employee (
    -- id: INT PRIMARY KEY
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    -- first_name: VARCHAR(30) to hold employee first name
    first_name VARCHAR(30), 
    -- last_name: VARCHAR(30) to hold employee last name
    last_name VARCHAR(30),
    -- role_id: INT to hold reference to employee role
    role_id INTEGER, 
    -- manager_id: INT to hold reference to another employee that is manager of the current employee. This field might be null if the employee has no manager.
    manager_id INTEGER,

    FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE
    
    -- CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,

    -- CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE CASCADE

);









