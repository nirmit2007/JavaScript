var data = [
    {
        name: "Tata Consultancy Services",
        employees: [
            {
                name: "Rahul Sharma",
                position: "Software Developer",
                salary: 800000
            },
            {
                name: "Priya Patel",
                position: "Project Manager",
                salary: 1500000
            },
            {
                name: "Amit Kumar",
                position: "QA Engineer",
                salary: 700000
            }
        ]
    },
    {
        name: "Infosys",
        employees: [
            {
                name: "Neha Shah",
                position: "Frontend Developer",
                salary: 750000
            },
            {
                name: "Rohit Verma",
                position: "Backend Developer",
                salary: 900000
            },
            {
                name: "Sneha Joshi",
                position: "HR Manager",
                salary: 1200000
            }
        ]
    },
    {
        name: "Reliance Industries",
        employees: [
            {
                name: "Vikas Mehta",
                position: "Data Analyst",
                salary: 850000
            },
            {
                name: "Kajal Singh",
                position: "Business Analyst",
                salary: 1000000
            },
            {
                name: "Arjun Desai",
                position: "Senior Manager",
                salary: 1800000
            }
        ]
    }
];
/* 
Find the company whose name is "Infosys".
Get all employees from all companies into a single array.
Find the employee whose name is "Neha Shah".
Get all employees whose salary is greater than 1000000.
Create an array containing only the names of all companies.
Get all employee names from every company in a single array.
Get all employees whose position contains "Developer".
Create an array containing every company's name and total number of employees. */

var findName = data.find((n)=>n.name == "Infosys")
console.log(findName);

var emp = data.flatMap((e)=>e.employees.map((e)=>e.name))
console.log(emp);

var nehaShah = data.flatMap((n)=>n.employees).find((n)=>n.name == "Neha Shah")
console.log(nehaShah);

var checkSal = data.flatMap((e)=>e.employees).filter((s)=>s.salary > 1000000)
console.log(checkSal);

var companyName = data.flatMap((c)=>c.name)
console.log(companyName);

var pos = data.flatMap((e)=>e.employees).filter((n)=>n.position.includes("Developer"))
console.log(pos);

var nameNum = data.map((e)=>e.name + " " + e.employees.length)

/* var nameNum = data.map((e) => 
{
    return {
        name : e.name,
        num : e.employees.length
    };
});
 */
console.log(nameNum);