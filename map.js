const roadmap = new Map();
roadmap.set('name', 'JavaScript');
roadmap.set('type', 'dynamic');
roadmap.set('year', 1995);
console.log(roadmap);
console.log(roadmap.get('name'));
roadmap.delete('year');
console.log(roadmap.has('year')); 
console.log(roadmap.size); 
roadmap.clear();
console.log(roadmap.size); 
//filter
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(numbers); 
console.log(evenNumbers); 
//set
const road= new Set();
road.add('JavaScript');
road.add('JavaScript');
road.add('dynamic');
road.add(1995);
console.log(road.size);
console.log(road.has('JavaScript')); 
road.delete('JavaScript');
console.log(road.has('JavaScript')); 
console.log(road.size); 