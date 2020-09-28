let num1 = 2;
let num2 = 5;

function biggerParam(num1, num2) {
  if (num1 > num2) {
    console.log(`Wiekszy parametr to 'num1'. Wartosc tego parametru to: ${num1}`);
    return num1;
  } else if (num1 < num2) {
    console.log(`Wiekszy parametr to 'num2'. Wartosc tego parametru to: ${num2}`);
    return num2;
  } else {
    console.log(`Nie podales wartosci 'number'`);
  }


}

console.log(biggerParam(num1, num2));