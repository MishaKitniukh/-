// Получаем элементы DOM //
const clickButton = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');

// Инициализируем переменные //
let clickCount = parseInt(localStorage.getItem('clickCount')) ||0;

// Обновляем количество кликов на странице
clickCountElement.textContent = clickCount;

// Обработчик клика на кнопке
clickButton.addEventListener('click', () => {
    // Увеличичваем количество кликов
    clickCount++;
    // Обновляем отображение количества кликов 
    clickCountElement.textContent = clickCount;
    // Сохраняем количество кликов в localStorage
    localStorage.setItem('clickCount', clickCount);
});
