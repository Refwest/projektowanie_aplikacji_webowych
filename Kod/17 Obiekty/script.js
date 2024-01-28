let person = {
    firstName: 'Jan',
    lastName: 'Kowalski',

    introduce: function () {
        console.log('Nazywam się ' + this.firstName + ' ' + this.lastName);
    },
}

person.introduce();
person.firstName = 'Adam';
person.introduce();


function Car(brandValue, modelValue) {
    this.brand = brandValue;
    this.model = modelValue;

    this.showDetails = function () {
        console.log('Car: ' + this.brand + ' ' + this.model);
    };
}

let car = new Car('Fiat', '126p');
car.showDetails();

class House {
    constructor(windowsCount, doorsCount) {
        this.windowsCount = windowsCount;
        this.doorsCount = doorsCount;
    }

    showDetails() {
        console.log('W domu jest: liczba okien: ' + this.windowsCount + ', liczba drzwi: ' + this.doorsCount);
    }
}

let house = new House(20, 10);
house.showDetails();