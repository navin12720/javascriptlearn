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
//-----------multiply way of clone a array-----------
let arrayorginal=[1,2,3,4,5];
//spread operator
let clone=[...arrayorginal];
console.log(clone);
//slice()
let clone2=arrayorginal.slice();
console.log(clone2);
//concat
let clone3=[].concat(arrayorginal);
console.log(clone3);
//Array.from()
let clone4=Array.from(arrayorginal);
console.log(clone4);
//json.parse(),json.stringify()
let clone5=JSON.parse(JSON.stringify(arrayorginal));
console.log(clone5);
//------------different way to create objects------------
//1.object literal notation
let users={
  name:"navin",
  age:20,
  place:"chennai",
  about:function(){
    return `this is ${this.name} from ${this.place}`
  },
  eligiblity:function(){
    return this.age>=18;
  }
};
console.table(users);
console.log(users.about());
 //-----for many objects----------
 //2.prototype inheritence
 const studentmethod={
  about:function(){
    return `this is ${this.name} from ${this.city}`
  },
  eligiblity:function(){
    return this.age>=18;
  }
 };

 function addstudent(name,age,father,address,city){
  const user=Object.create(studentmethod);
  user.name=name;
  user.age=age;
  user.father=father;
  user.address=address;
  user.city=city;
  // user.about=studentmethod.about;
  // user.eligiblity=studentmethod.eligiblity;
  return user;
 };
 console.table(addstudent("navin",20,"dilli","anna nagar","chennai"));


 //-----------creating objects--------
 //1.using object literals:
 const students={
  name:"navin",
  age:30,
  job:"software developer"
 };
 console.log(students);
 //2.using the object constructor:
 const student2=new Object();
 student2.name="navin1";
 student2.age=31;
 student2.job="developer";
 console.log(student2);
 //3.using the Object.create() method:
//Object.create(prototype,propertiesObject);
const  personproto={
  sayhello:function(){
    console.log(`Hello , My name is ${this.name}`);
  }
}
const person1=Object.create(personproto);
person1.name="Navin";
person1.age=23;
person1.job="developer";
console.log(person1);
person1.sayhello();

//4.Using class
class Personss{
  constructor(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
  }
}
const person3=new Personss("Navin",20,"software");
console.log(person3);

//iterating through js objects
//using the for-in loop
for(let key in student2){
  console.log(`${key} : ${student2[key]}`);
}
//using Object.keys()
const keys=Object.keys(student2);
console.log(keys);
keys.forEach(key=>{
  console.log(`${key} : ${student2[key]}`);
})
//using Object.values()
const values=Object.values(student2);
console.log(values);
values.forEach(value=>{
  console.log(`value : ${value} `);
})
//using Object.entries()
const entries=Object.entries(student2);
console.log(entries);
entries.forEach(entry=>{
  console.log(`${entry[0]} : ${entry[1]}`);
})
 //normal loop

 for(let i=0;i<entries.length;i++){
  console.log(`${entries[i][0]} : ${entries[i][1]}`);
 }

 //diffence bwt rest parameter and spread operator
//Rest parameter:
function myfun(first,second,...rest){
  console.log(first);
  console.log(second);
  console.log(rest);
}
myfun(10,20,30,40);

//spread operator
const myarray=[1,2,3];
const spread=[...myarray,4,5,6];
console.log(spread);
 //parameter destructing for objects
 function hello({name,age}){
  console.log(`hello ${name}!`);
  console.log(`age is ${age}`);
 }
 hello(users);
 //getter and setter
 /* 1.create a class called circle
 2.Radius values a constructor
 3.Getter and setteer function called diameter
 4.Getter area()
  */
 class Circle{
  constructor(radius){
    this.radius= radius;
  }
  get diameter(){
    return this.radius*2;
  }
  set diameter(diameter){
    this.radius=diameter/2;
  }
  get area(){
    return Math.PI*this.radius*this.radius;
  }
 }
 const mycircle=new Circle(5);
 console.log(mycircle.radius);
 console.log(mycircle.diameter);
 console.log(mycircle.area);
 mycircle.diameter=12;
 console.log(mycircle.radius);
 console.log(mycircle.diameter);
 console.log(mycircle.area);
 //static method and property
 class Myclass{
  static mystaticpro="hiii";
  static mystatic(){
    console.log("hello navin");
  }
 }
 Myclass.mystatic();
 console.log(Myclass.mystaticpro);