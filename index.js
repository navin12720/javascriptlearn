// run `node index.js` in the terminal
console.log('------------JS---------------');
let a = [10, 20, 30, 40];
console.table(a);
let b = new Array(1, 2, 3, 4);
console.log(b);
let c = new Array('navin', 30, true, { m1: 30, m2: 65, m3: 100 });
console.table(c);
// ----------------Foreach----------------------
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//value,index,array
number.forEach((value, index) => {
  console.log('value :' + value + ' ' + 'index :' + index);
});
let total = 0;
number.forEach((num) => {
  total += num;
});
console.log(total);
const doublearray = [];
const evennumber = [];
number.forEach((num) => {
  doublearray.push(num * 2);
  if (num % 2 == 0) {
    evennumber.push(num);
  }
});
console.log(doublearray);
console.log(evennumber);
// -------------reduce-----------
/*array(function(accumulator,currentvalue,currentindex,array){

},initialvalue);*/
let sum = number.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue
);
console.log(sum);
//-------flattening array--------------
let nestedarray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let flattening = nestedarray.reduce((sum, value) => sum.concat(value));
console.log(flattening);
// example
let colors = ['red', 'blue', 'yellow', 'red', 'black', 'yellow', 'orange'];
let colorcount = colors.reduce((total, currentvalue) => {
  if (currentvalue in total) {
    total[currentvalue]++;
  } else {
    total[currentvalue] = 1;
  }
  return total;
}, {});
console.log(colorcount);
//------------anotherexample---------------
let people = [
  { name: 'navin', age: 20, city: 'chennai' },
  { name: 'hari', age: 20, city: 'chengalpattu' },
  { name: 'kanni', age: 20, city: 'chennai' },
];
let countcity = people.reduce((total, currentvalue) => {
  if (currentvalue.city in total) {
    total[currentvalue.city].push(currentvalue);
  } else {
    total[currentvalue.city] = [currentvalue];
  }
  return total;
}, {});
console.log(countcity);
//--------sort--------
//for string
let names = ['navin', 'reethu', 'dillibai', 'kanni'];
let sort = names.sort();
console.log(sort);
//for number
let shufflednum = [6, 9, 4, 3, 10, 8, 7, 2, 5, 1];
shufflednum.sort((a, b) => {
  return a - b;
}); //ase    a+b for des
console.log(shufflednum);
//for object
let persons = [
  {
    name: 'John Doe',
    age: 30,
    salary: 50000,
    role: 'Developer',
  },
  {
    name: 'Jane Smith',
    age: 28,
    salary: 55000,
    role: 'Designer',
  },
  {
    name: 'Bob Johnson',
    age: 35,
    salary: 60000,
    role: 'Manager',
  },
  {
    name: 'Alice Brown',
    age: 25,
    salary: 48000,
    role: 'Tester',
  },
];
//age sort in object
persons.sort((a, b) => {
  return a.age - b.age;
});
console.table(persons);
//name sort in object
persons.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
console.table(persons);
