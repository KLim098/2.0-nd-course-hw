// Задание 1
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4))
console.log(min(6, 6))


//Задание 2

function isEven(n) {
    if (n % 2 === 0) {
        return 'Четное число';
    } else {
        return 'Нечетное число';
    }

}

console.log(isEven(12))
console.log(isEven(17))


//Задание 3

function square(number) {
    console.log(number ** 2);
}

square(75);


// Задание 4

function userAge() {
    const age = prompt("Сколько вам лет?");

    const ageNumber = Number(age);
    if (isNaN(ageNumber) || ageNumber < 0) {
        alert('Вы ввели неправильное значение');
    } else if (ageNumber >= 0 && ageNumber <= 12) {
        alert('Привет, друг!');
    } else if (ageNumber >= 13) {
        alert('Добро пожаловать!');
    }
}

userAge();

// Задание 5

function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(calc(5, 5))
console.log(calc('d', 5))

// Задание 6

function cubeNumber() {
    let number = prompt('Ведите число')
    if (isNaN(number)) {
        return 'Переданный параметр не является сислом'
    } else {
        return `${number} в кубе равняется ${number ** 3}`
    }
}

console.log(cubeNumber())


// Задание 7


function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodgetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodgetPerimeter: getPerimeter,
}

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());



