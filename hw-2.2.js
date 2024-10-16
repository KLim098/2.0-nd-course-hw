// Задание 1
let password = String('пароль');
let userInputPassword = prompt('Введите Пароль');
if (userInputPassword === password) {
    alert('Пароль введен верно')
}
else {
    alert('Пароль введен неправильно')
};

// Задание 2
let c = ('2');
if (c > 0 && c < 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};

// Задание 3
let d = '50', e = '55';
if (d > 100 || e > 100) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};

// Задание 4
let a = '2';
let b = '3';
console.log(Number(a) + Number(b));

// Задание 4
let monthNumber = prompt('Введите порядковый номер месяца')
switch (monthNumber) {
    case "1":
        alert('Январь (Зима)')

        break;
    case "2":
        alert('Февраль (Зима)')
        break;

    case "3":
        alert('Март (Весна)')
        break;

    case "4":
        alert('Апрель (Весна)')

        break;
    case "5":
        alert('Май (Весна)')

        break;
    case "6":
        alert('Июнь (Лето)')

        break;
    case "7":
        alert('Июль (Лето)')

        break;
    case "7":
        alert('Август (Лето)')

        break;
    case "8":
        alert('Сентябрь (Осень)')

        break;
    case "10":
        alert('Октябрь (Осень)')

        break;
    case "11":
        alert('Ноябрь (Осень)')

        break;
    case "12":
        alert('Декабрь (Зима)')

        break;

    default:
        alert('Хочешь придумать новый месяц?')
        break;
}
