USE employeeTracker;

-- INSERT INTO department
INSERT INTO department (name)
VALUES 
('Sales'),
('IT'),
('HR');


-- -- INSERT INTO role
INSERT INTO role  (title, salary, department_id)

VALUES 
('Manager', 800000, 1),
('Intern', 30000, 4),
('Volunteer', 900000, 6);

-- INSERT INTO employee
INSERT INTO employee  (first_name, last_name, role_id, manager_id)
VALUES
('Dexter', 'Morgan', 1, 23),
('Rita', 'Bennett', 2, 22),
('Debra', 'Morgan', 3, 5);
