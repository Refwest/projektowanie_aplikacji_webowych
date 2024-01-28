//Zadanie 4.1
function podzielnaDwa(number) {
    if (number % 2 == 0) {
        console.log('Liczba parzysta');
    } else {
        console.log('Liczba nieparzysta');
    }
}

podzielnaDwa(46);

//Zadanie 4.2
function oneToHundredByThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0)
            console.log(i);
    }
}

oneToHundredByThree();