// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let x={1:5,2:10,meow:{type:"red"}};
let z=JSON.stringify(x);
let y=JSON.parse(z);
y.meow.type=8;
y.meow.type="blue";
console.log(x);
console.log(y);
