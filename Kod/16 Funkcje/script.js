function simpleFunction() {
    console.log('Wywowanie funkcji simple function');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt('Hello');

function sumOfTwo(a, b) {
    let sum = a + b;
    console.log(a + '+' + b + '=' + sum);
}

sumOfTwo(2, 2);

function functionWithReturn() {
    return 'Jakiś zwrócony tekst';
}

function showReturned() {
    console.log(functionWithReturn());
}

showReturned();

// Nie działa przeładowanie metod
function f(p3) {
    console.log('Jeden parametr ' + p3);
}


function f(p1, p2) {
    console.log('Dwa parametry: ' + p1 + ', ' + p2);
}

f(1, 2);
f(3);
