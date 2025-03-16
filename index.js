const chislo = Math.floor(Math.random()*(15-3+1))+3;

fizz = chislo/3;
buzz = chislo/5;

if (Number.isInteger(fizz)) {
    console.log('Fizz');
} else if (Number.isInteger(buzz)) {
    console.log('Buzz');
} else {
    console.log('FizzBuzz');
}