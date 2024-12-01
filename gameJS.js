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