const students =[
    {id :10, name:"Al Amin"},
    {id :11, name:"Osman"},
    {id :12, name:"Tanisha"},
    {id :13, name:"Alif"}
];

const name = students.map(stu => stu.name);
console.log(name);

const stuId = students.map(stu => stu.id);
console.log(stuId);
