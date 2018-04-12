// alert("My first alert from a diffrent file");
var x;
x = 2;
console.log(x);

// numbers
var age = 22;
console.log("My age is" ,age);

var price = 4.99;//not "4.99$"< this is a string
console.log("The price is", price ,"$");

var fullName = "Lidia Tolan";
console.log("My name is" , fullName);

var paragraph = "Line 1 \nLine 2"; // \n-new line
console.log(paragraph);

var backslash = "variable with\\";
console.log(backslash);

var quotes = "\"this is a string inside quotes\"";
console.log(quotes);

var differentQuotes = '"another string \'inside quotes"';
console.log(differentQuotes);

var isTrue = true,
    isFalse = false;
console.log(isTrue,isFalse);

var nullValue = null;
console.log("Null value" ,nullValue);

var undefinedValue;
console.log("Undefined value" ,undefined);

var x = 2;
console.log(x);//2
x = undefined;
console.log(x);//undefined

console.log(43 % 10); //3(restul impartirii lui 43 la 10)

console.log(2 == '2');// true
console.log(2 === '2'); //false (ver tipul cat si valoarea)
console.log(2 === 2); //true


console.log(typeof 10);//number
console.log(typeof "text");//string
console.log(typeof true);//boolean
console.log(typeof false);//boolean
console.log(typeof myVariable); //undefined

console.log(typeof nullValue);//object
console.log(typeof nullValue === null); // false

var n = -10;
//var isPositive = n > 0 ? true : false;
var isPositive = n > 0 ? 1 : 0;
console.log("is positive" ,isPositive);


var p = 1 + 1;
var q = p * 2;
console.log(p, q);

var firstName = "Chuck";
var lastName = "Norris";
var fullName = firstName + "" + lastName;
console.log("fullName", fullName);



