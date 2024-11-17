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