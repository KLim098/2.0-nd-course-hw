// Задание 1
let welcome = 0;
while (welcome < 2) {
    console.log('Привет');
    welcome++;

}

// Задание 2
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// Задание 3
let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

// Задание 4
let obj = {
    "Kolya": "200$",
    "Vasya": "300$",
    "Petya": "400$"
};
for (let key in obj) {
    console.log(`${key} ${obj[key]}`)
}

// Задание 5
let n = 1000;
let stop = 0;
while (n >= 50) {
    n /= 2;
    stop++;

}
console.log(n);
console.log(stop)

// Задание 6
let firstFriday = 7;
for (let f = firstFriday; f <= 31; f += 7)
console.log (`Сегодня пятница, ${f}-число. Необходимо подготовить отчет. `)









