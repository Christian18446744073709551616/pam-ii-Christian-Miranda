/*function socialization() {

   return console.log("hello World");
    
}
var socialization = socialization();
console.log(socialization);*/

let num1 = 1;
let num2 = 2;
var msg = "Hello Friends! This is my neeeeeeeeeeew Nummmba: ";
console.log(msg + num1);
console.log(num1 + num2);
console.log(msg + num2);
console.log(typeof num1);
console.log(typeof msg);



function soma() {
   var n1 = 4
var n2 = 4
 console.log( n1 + n2) 

}
console.log(soma())

function somacomparametros(n1,n2) {

   let resultado = "o resultado :" + (n1 + n2);
   console.log(resultado);
}
somacomparametros(16,32)
somacomparametros(16,14)
somacomparametros(22,11)
somacomparametros(57,98)
somacomparametros(100,100)


const test = (n) => 
{
let result = n%2
if (result == 1) {
   return "numero impar"
}
   return "numero par"

}


console.log(test(2));
console.log(test(7));
test(5)