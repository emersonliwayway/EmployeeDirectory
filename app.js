import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const random = Math.floor(Math.random() * 10);
  res.send(employees[random]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => {
    return e.id === +id;
  });

  if (!employee) {
    return res.status(404).send("There is no employee with that ID.");
  }
  res.send(employee);
});
