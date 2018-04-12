var a = 2;// fs globala


function displayVariables() {
  var b = 3;//fs locala
  
  c = 4;//fs golobala
  
  console.log('a inside function',a);//2
  console.log('b inside function', b);//3
  console.log('c inside function',c);//4
}

displayVariables();

 console.log('a outside function',a);//2
 console.log('b outside function', typeof b);//uncaught reference. typeof->undefined
 console.log('c outside function',c);//4



//-----------------------------------------

var x = 1;

function firstFunction() {
  var y = 2;//locala pt firstFunction
  
  function secondFunction() {
    var z = 3;
    console.log('Second x =' ,x); //1
    console.log('second y =', y); //2
    console.log('Second z =', z); //3
    
    function thirdFunction(z) {
      z = 5;//nu este global pt ca e definit ca parametru
     console.log('Third x =' ,x); //1
     console.log('Third y =', y); //2
     console.log('Third z =', z); //5
    }
    thirdFunction(z);
  }
  secondFunction();
  
     console.log('First x =' ,x); //1
     console.log('First y =' ,y); //2
     console.log('First z =',typeof z); //undefined
}
firstFunction();


//------------Hoisting---------------------

(function demoHoisting() {
  var a = 1000;
  console.log(a + "" + b);
  var b = 2000;
})(); //IIFE ->se autoapeleaza

//this is identical with
(function demoHoisting() {
  var a = 1000;
  var b ;
  console.log(a + "" + b);
  b = 2000;
  })(); //IIFE ->se autoapeleaza


