const a1 = ["A","B","C","D","E","F","G","H"];
// Poping last element form Array
var a = a1.pop();
console.log(a);
console.log(a1);
// Splic Remove last Array element
var b = a1.splice(3,2);
console.log(b);
console.log(a1);
// Splice form Array-2
var c = a1.splice(2,2,"Z");
console.log(c);
console.log(a1);
// Push add element in last of Array
var d = a1.push("C","D","E","F");
console.log(d);
console.log(a1);
// Merge Two Array
const a2 = ["H","I","J","K"];
var e = a1.concat(a2);
console.log(a1);
console.log(a2);
console.log(e);
// Search Element in Array
var f = a1.includes("Z");
console.log(f);
console.log(a1);
// Return Index of Array
var g = a1.indexOf("Z");
console.log(g);
console.log(a1);
// Return Part Of Array
// var h = a1.slice(2,2);
// console.log(h);
// console.log(a1);
// Filter From Array
