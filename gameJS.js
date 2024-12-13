function gameRandom() {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let attempts = 0;

    while (guess !== randomNumber) {
        guess = Number(prompt("Угадайте число от 1 до 100:"));
        attempts++;

        if (isNaN(guess)) {
            alert("Пожалуйста, введите действительное число.");
            continue;
        }

        if (guess < randomNumber) {
            alert("Загаданое число больше! Попробуйте еще раз.");
        } else if (guess > randomNumber) {
            alert("Загаданое число меньше! Попробуйте еще раз.");
        } else {
            alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} раз.`);
        }
    }
}

function arefmetics() {

    // Функция для генерации случайной арифметической задачи
    function generateRandomTask() {
        const operators = ['+', '-', '*', '/'];
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = operators[Math.floor(Math.random() * operators.length)];

        let task = `${num1} ${operator} ${num2}`;
        let correctAnswer;

        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                correctAnswer = (num1 / num2).toFixed(2);
                break;
        }

        return { task, correctAnswer };
    }

    const { task, correctAnswer } = generateRandomTask();

    let userAnswer = prompt(`Решите задачу: ${task}`);

    userAnswer = parseFloat(userAnswer);

    if (userAnswer === correctAnswer) {
        alert('Верно!');
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }
}


function text() {
    function reverseText() {
        const userInput = prompt("Введите текст:"); 
        
        if (userInput !== null) {
            const reversed = userInput.split('').reverse().join('');
    
            alert("Перевернутый текст: " + reversed);
        } else {
            alert("Текст не был введен.");
        }
    }
    
    reverseText();
}

function quiz() {
    // Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Функция для проведения викторины
function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        let userAnswer = prompt(`${question.question}\n${question.options.join('\n')}`);
        
        if (parseInt(userAnswer) === question.correctAnswer) {
            score++;
        }
    }
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}

runQuiz();
}

function rockScissorsPaper() {
    // Массив с возможными вариантами
const options = ["камень", "ножницы", "бумага"];

// Запрашиваем у пользователя выбор
let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага").toLowerCase();

// Проверяем, является ли выбор пользователя допустимым
if (!options.includes(userChoice)) {
    alert("Неверный выбор! Пожалуйста, выберите камень, ножницы или бумагу.");
} else {
    // Генерируем случайный выбор компьютера
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    // Определяем победителя
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    // Выводим результаты
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}
}