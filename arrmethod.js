let emp1=["senthil",25,7856432109,"tl"];
console.log(emp1[2]);
emp1[1]=29;
console.log(emp1[1]);
console.log(emp1);
console.log(emp1.toString());
console.log(emp1.length);
console.log(emp1[emp1.length-1]);
emp1.push("chennai");
console.log(emp1);
emp1[6]="23/04/1992";
console.log(emp1);
console.log(emp1[0]+" "+emp1.length);
console.log(emp1.at(2));
console.log(emp1.pop());
console.log(emp1);
emp1.pop();
console.log(emp1.shift());
console.log(emp1);
emp1.unshift("akash");6
console.log(emp1);
emp1[emp1.length]="akash@gmial.com";
console.log(emp1);
let emp2=["srimathi",24,8654327194];
people=emp1.concat(emp2);
console.log(people);
let emp3=["sowmiya",24,6380345210];
people=emp1.concat(emp2,emp3);
console.log(people);
let ppl=emp2.concat("da","trichy");
console.log(ppl);
emp3.splice(3,0,"hr","tanjore");
console.log(emp3);
console.log(people);