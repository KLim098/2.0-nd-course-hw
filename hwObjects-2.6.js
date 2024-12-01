// Задание 1

let str = 'j.s';
let strJS = str.toUpperCase();
console.log(strJS);

// Задание 2

function filter(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

const strings = ['Жираф', 'Бегемонт', 'Жора', 'Динозавр',];
const prefix = 'ж';
const result = filter(strings, prefix);

console.log(result);

// Задание 3

const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

function randomNum() {
    return Math.floor(Math.random() * 10) + 1
}
console.log(randomNum());

// Задание 6

function generateRandomArray(number) {
    if (!Number.isInteger(number) || number <= 0) {
        throw new Error("Введите положительное целое число.");
    }
    
    const length = Math.floor(number / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (number + 1));
        randomArray.push(randomNum);
    }

    return randomArray;
}

const result = generateRandomArray(10);
console.log(result); 

// Задание 7

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandom(10, 19 ));

// Задание 8

let nowDate = new Date();
console.log(nowDate);

// Задание 9

const currentDate = new Date()
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate);

// Задание 10

function formatDay(date) {
    const daysOfWeek= ["Понедельник", "Вторник", "Среда", "Чертверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

const date = new Date(); // текущая дата и время
console.log(formatDay(date));

