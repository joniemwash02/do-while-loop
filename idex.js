/*x=1
do{
  document.write(x+'Hello james'+ '<br>')
  x++

}while(x<=10);

//check if the number is prime number;
number=11113
primeNumber=true;
if(number===1){
  document.write('one is undefined')
}else if(number>1){
  for(i=2; i<=number/2; i++){
    if(number%i==0){
      primeNumber=false
      break;
    }
  }
    if(primeNumber==true){
      document.write(' prime number')
    } else{
      document.write(' not prime number')
    }
   
}
else{
  document.write(' not prime number')
}
*/
//check factorial of a number

let number = 4;
let factorial = 1;

do {
  factorial *= number;
  number--;
} while (number > 0);

document.write(`The factorial is: ${factorial}`);
 