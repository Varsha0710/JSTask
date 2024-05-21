let employees = [ {id:1,name:"akash",salary:30000},{id:2,name:"sindhu",salary:20000},{id:3,name:"bala",salary:40000}]
console.log(employees);
employees.forEach((emp)=>console.log(emp));
highlyPagesEmployees=employees.filter(emp=>emp.salary>30000);
console.log(highlyPagesEmployees);
employees.map((emp)=>emp.salary=10000);
let upraisedEmployee = employees.map(emp=>{
 let newEmp = Object.assign({},emp);
 newEmp.salary=emp.salary + (emp.salary*10)/100;
 return newEmp;
});
console.log(upraisedEmployee)
let ages = [22,24,26]
console.log(ages.map(a=>a+2));
employees.push({id:4,name:"abinaya",salary:20000});
employees.push({id:5,name:"lokesh",salary:30000},{id:6,name:"lavanya",salary:10000});
console.log(employees);
employees.pop();
console.log(employees);
employees.unshift({Id:4,name:"abinaya",salary:20000});
console.log(employees);
employees.shift();
console.log(employees);
console.log(employees.slice(1,3));
employees.splice(1,2,{id:6,name:"lavanya",salary:10000});
console.log(employees);

let age= [22,20,30,25,35]
console.log(age.some(a=>a>30));
console.log(age.every(x=>x>20));
let months = [3,2,4,5,4,3,2,5];
console.log(months.indexOf(2));
console.log(months.lastIndexOf(2));
let array1=[1,2,3]; 
let array2=[4,5,6];
let array3 = array1.concat(array2);
console.log(array3);
let array4 = array1.join();
console.log(array4);
console.log(employees.find(x=>x.id==5));
console.log(employees.findIndex(x=>x.id==4));
for(let emp of employees)
 console.log(emp);
for(let index in employees)
 console.log(index);
for(let [index,emp] of employees.entries())
 console.log(index,emp);