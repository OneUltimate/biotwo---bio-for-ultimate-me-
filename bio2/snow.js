function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Случайные параметры
    const startLeft = Math.random() * 100;
    const animationDuration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;
    const scale = 0.5 + Math.random();
    
    // Применяем стили
    snowflake.style.left = `${startLeft}%`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.transform = `scale(${scale})`;
    
    document.querySelector('.snowflakes').appendChild(snowflake);
    
    // Удаление снежинки после анимации
    setTimeout(() => snowflake.remove(), (animationDuration + delay) * 1000);
}

// Инициализация снегопада
function initSnow() {
    // Создаем контейнер для снежинок
    const container = document.createElement('div');
    container.className = 'snowflakes';
    document.body.appendChild(container);

    // Запускаем генератор снежинок
    setInterval(createSnowflake, 300);
    
    // Очистка при изменении размера окна
    window.addEventListener('resize', () => {
        container.innerHTML = '';
    });
}

// Запускаем после полной загрузки страницы
window.addEventListener('DOMContentLoaded', initSnow);