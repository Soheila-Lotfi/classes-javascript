// import our Company constructor
var Company = require("./company.js");

// create a new instance of Company
var myCompany = new Company("smartgardening", 10, true);

// add a 3 new employees to the instance of this company by calling the addEmployee method on your new company object

myCompany.addEmployee("mina", "web - developer", 55000, true);
myCompany.addEmployee("soli", "web - developer", 55000, true);
myCompany.addEmployee("mh", "web - developer", 55000, false);

// console.log your new object
console.log(myCompany);

// console.log the number of employees working your new company
console.log(myCompany.numberOfEmployees);
