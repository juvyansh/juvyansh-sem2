/*//data types in javascript
//primitive data types
let name="hitesh";
console.log(typeof name);
let age=19;
console.log(typeof age);
let isstudent = true;
console.log(typeof isstudent);
let score;
console.log(typeof score);

//non primitive user defined
//object creation
let car=null;
console.log(typeof car);
let person={name:"hitesh kumar",age:19};
console.log(typeof person);
console.log(person);*/

//arithmetic operator
/*let a=10;
let b=5;
console.log(a+b);//15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//2
console.log(a%b);//0
console.log(++a);//11
console.log(a++);//11
console.log(--a);//11
console.log(a--);//11*/
/*
//assignment
let a=10;
console.log(a+=3);
console.log(a-=3);
console.log(a*=3);
console.log(a/=3);*/

//comparison
/*let a=45;
let b="45";
console.log(a==b);//only value checking
console.log(a===b);//data type checking
console.log(a!=b);//data type
console.log(a!==b);//value
console.log(a>b);
console.log(a<b);*/
/*
//string operator
let a="hitesh";
let b=" kumar";
console.log(a+b);*/
/*
//ternary opereator
let age=19;
let status =(age>18)?"adult":"minor";
console.log(status);*/

//condition
/*let age=10;
if(age>18){
    console.log("drive");
}
else if(age>=50){
    console.log("not drive");
}
else{
    console.log("no valid drive");
}*/

//switch statement
/*let day="monday";
switch(day){
    case "monday":
        console.log("start of week");
        break;
    case "tuesday":
        console.log("second day of week");
        break;
    case "wednesday":
        console.log("third day of week");
        break;
    case "thursday":
        console.log("fourth day of week");
        break;
    case "friday":
        console.log("fifth day of week");
        break;
    case "saturday":
        console.log("sixth day of week");
        break;
    case "sunday":
        console.log("end day of week");
        break;
    default:
        console.log("enter correct day");
}*/
/*let marks = 40;

switch (marks) {
  case  90:
    console.log("A");
    break;
  case 80:
    console.log("B");
    break;
  case 70:
    console.log("C");
    break;
  case marks >= 60:
    console.log("D");
    break;
  case marks >= 50:
    console.log("E");
    break;
  case  40:
    console.log("F");
    break;
  case  20:
    console.log("fail");
    break;
  default:
    console.log("enter correct marks");
}*/

//loops
/*for(let i=0;i<=5;i++){
    console.log("for loop iteration: "+i);
}
let count=0;
while(count<3){
    console.log("while loop count: "+count);
    count++;
}
let i=0;
do{
   console.log("do while loop i: "+i);
   i++;
}
while(i<4);
*/
/*let n = prompt("Enter number of subjects");

let total = 0;

for(let i = 1; i <= n; i++) {

    let marks = prompt("Enter marks for subject " + i);

    total = total + Number(marks);

}

alert("Total Marks = " + total);*/

//arrays
/*let students=["amit","sujal","suman"];
console.log(students);
console.log(students.length);
students.push("hitesh");
console.log(students.length);
console.log(students);
students.pop();
console.log(students.length);
console.log(students[0]);*/

/*//objects
let student={
    firstname:"hitesh",
    age:20,
    major:"cse",
};
console.log(student);
console.log(student["firstname"]);
student.age=21;
console.log(student);
let students=[
    {name:"bob",grade:92},
    {name:"hitesh",grade:21},
]
console.log(students[0]);*/
// // functions

// function add(a, b) {
//     return a + b;
// }

// function greet(name){
//     return "Hello "+ name + "!";
// }
// console.log (greet("Aditya"));
// console.log(add(3,4));

// DOM Manupulation & event handling

// It is a way to interact with the HTML elements using JavaScript. We can change the content, style, and structure of the web page dynamically.

// Example of DOM Manupulation
// document.getElementById("myButton").addEventListener("click", function(){
//     document.getElementById("myText").innerHTML = "Button Clicked!";
// });


let newHeading = document.getElementById("heading");
newHeading.style.color = "blue";

let button = document.getElementsByClassName("changeHeading");
button[0].addEventListener("click", function(){
    newHeading.innerHTML = "Heading Changed!";
    newHeading.style.color = "red";
    newHeading.style.fontSize = "100px";
});

let para =document.getElementById("paragraph");
para.addEventListener("click", function(){
    para.innerHTML = "Paragraph Changed!";
    para.style.color = "green";
});
