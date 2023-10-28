const Employee = require("../../../models/employee");
var jwt = require("jsonwebtoken");

module.exports.signup = async function (req, res) {
  try {
    var EmployeeNameExit = await Employee.findOne({
      EmployeeName: req.body.EmployeeName,
    });

    if (EmployeeNameExit) {
      return res.json(422, {
        message: "Employee Exist",
      });
    }

    var employee = await Employee.create(req.body);
    return res.json(200, {
      message: `Employee Created ${employee}`,
    });
  } catch (err) {
    return res.json(500, {
      message: `Error on creating ${err}`,
    });
  }
};

module.exports.signin = async function (req, res) {
  console.log(req.body);
  try {
    var employee = await Employee.findOne({
      EmployeeName: req.body.EmployeeName,
    });

    //if username doesn't exit
    if (!employee) {
      return res.json("422", {
        message: " User Name doesnot exits",
      });
    }
    //password mis-match
    if (employee.Password != req.body.Password) {
      return res.json("422", {
        message: " Username/Password mis-match",
      });
    }

    return res.json("200", {
      message: "Log in successfull. Keep the token safe",
      data: {
        token: jwt.sign(employee.toJSON(), "Employee", { expiresIn: "600000" }), // return  jwt for the Employee
      },
    });
  } catch (err) {
    return res.json(500, {
      message: `log in error ${err}`,
    });
  }
};
