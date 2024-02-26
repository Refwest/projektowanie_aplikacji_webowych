window.onload = function () {

    // Pojedyńczy element po ID
    /*
        document.getElementById('box-one').style.border = '3px solid red';
    */


    // Pojedyńczy element za pomocą selektora
    /*document.querySelector('#box-one').style.border = '3px solid red';*/

    // Jeden element za pomocą classy .boxes
/*
    document.querySelector('.boxes').style.border = '5px solid blue';
*/


    // Wiele elementó po nazwie klasy - bez ".", bo to jest wyszukiwanie konkretnie z klas
    /*let arr = document.getElementsByClassName('boxes');*/


    //Wiele elementów po nazwie znacznika
    /*let arr = document.getElementsByTagName('div');*/


    //Wiele elementów z różnych selektorów
    /*let arr = document.querySelectorAll('#big-box div');*/


    /*    for (let element of arr) {
            element.style.border = '5px solid blue';
        }*/


    let element = document.getElementById('box-two');
    // Węzeł dziecka
    /*element.style.border = ' 3px solid red';*/

    // Węzeł rodzica
    /*element.parentNode.style.border = '3px solid blue';*/

    //Węzeł sąsiadów
    /*element.previousElementSibling.style.border = '5px solid green';
    element.nextElementSibling.style.border = '3px solid yellow';*/

    let elementBigBox = document.getElementById('big-box');
    elementBigBox.style.border = '4px solid black';

    elementBigBox.firstElementChild.style.border = '4px solid blue';
    elementBigBox.lastElementChild.style.border = '4px solid green';




};