for (i = 1; i < 21 ; i++ ) {
  console.log("The numbers from 1 to 20" ,i );
}


for (i = 1; i < 21; i++) {
  if((i % 2)!=0) {
    console.log("The odd numbers from 1 to 20" ,i);
  }
}


var numbers = [11, 24, 3, 34 ];
var sum = 0;

for( var i = 0; i < numbers.length; i++ ) {
  sum += numbers[i];
}

console.log('The sum of array is', sum);


var arr = [3, 4, 7, 324];
var max = 0;
for (var i = 0; i < arr.length; i++) {
   if(arr[i] > max) {
    max = arr[i];
    console.log('The maximum of this array is' ,max);
   }
}


var array = [4, 7, 3, 4, 10, 4,32];
var search = 4;

var count = array.reduce(function(n, val) {//refa
  return n + (val === search);
}, 0);
console.log("The element 4 appears in an array" ,count ,"times");