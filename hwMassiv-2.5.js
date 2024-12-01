// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {
        break
    }
}

// Задание 2
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
        break
    }
}

// Задание 3
const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');

console.log(result);

// Задание 4
const result = [];
for (let i = 0; i < 3; i++) {
    result.push([]);
    for (let j = 0; j < 3; j++) {
        result[i].push(1);
    }
}

console.log(result);

// Задание 5
const numbers = [1, 1, 1];
numbers.push(2, 2, 2);

console.log(numbers);

//Задание 6
const array = [9, 8, 7, 'a', 6, 5];
array.sort();
const result = array.filter(item => typeof item !== 'string')
console.log(result)

// Задание 7
const arr = [9, 8, 7, 6, 5];
let userInput = prompt('Введите число от 0 до 9:');
let userNumber = Number(userInput);
if (!isNaN(userNumber)) {
    if (arr.includes(userNumber)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
} else {
    alert('Пожалуйста, введите корректное число.');
}

// Задание 8

let string = 'abcdef';
string = string.split(' ');
console.log(string);
string.reverse();
string = string.join(' ');
console.log(string);

// Задание 9
const arr = [[1, 2, 3], [4, 5, 6]];
const arrNew = [];
for (let i = 0; i < arr.length; i++) {
    arrNew.push(...arr[i]);
}
console.log(arrNew);

// Задание 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
        console.log(arr[i] + arr[i + 1]);
    }
}

// Задание 11
function square(arr) {
    return arr.map(item => item ** 2);

}

console.log(square([1, 2, 3]));

// Задание 12
function getLength(arr) {
    return arr.map(item => item.length)
}
console.log(getLength(['my', 'name is', 'klim']));

// Задание 13
function negativNumbers(arr) {
    return arr.filter(item => item < 0)
}

console.log(negativNumbers([1, 2, -5, -89213, 5]));


// Задание 14
function rundomNumber() {
    return Math.floor(Math.random() * 10)
}
const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(rundomNumber())
}
console.log(arr);

const evenArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i])

    }
}

console.log(evenArr);


// Задание 15
let array = [];
for (let i = 0; i < 6; i++) {
    array.push(Math.floor(Math.random() * 10) + 1);
}

let sum = array.reduce((acc, num) => acc + num, 0);
let average = sum / array.length;


console.log("Сгенерированный массив:", array);
console.log("Среднее арифметическое:", average);