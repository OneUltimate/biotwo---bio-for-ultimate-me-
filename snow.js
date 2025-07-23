function createChar() {
    const chars = '01';
    const char = chars[Math.floor(Math.random() * chars.length)];
    
    const element = document.createElement('div');
    element.className = 'falling-char';
    element.textContent = char;
    element.style.color = '#3d918c'; 
    
    
    const startLeft = Math.random() * 100;
    const animationDuration = 3 + Math.random() * 5;
    const delay = Math.random() * 2;
    const fontSize = 14 + Math.random() * 20;
    const rotate = Math.random() * 360;
    

    element.style.left = `${startLeft}%`;
    element.style.animationDuration = `${animationDuration}s`;
    element.style.animationDelay = `${delay}s`;
    element.style.fontSize = `${fontSize}px`;
    element.style.transform = `rotate(${rotate}deg)`;
    
    document.querySelector('.chars-container').appendChild(element);
    
    
    setTimeout(() => element.remove(), (animationDuration + delay) * 1000);
}


function initCharsFall() {
    const container = document.createElement('div');
    container.className = 'chars-container';
    document.body.appendChild(container);

    setInterval(createChar, 150);
    
    window.addEventListener('resize', () => {
        container.innerHTML = '';
    });
}

window.addEventListener('DOMContentLoaded', initCharsFall);


const strings = [
    "Приятно познакомиться, Алексей, но не Zitraks",
    "Сегодня не завтра, завтра не сегодня",
    "Упал вставай пай чокопай",
    "shadow never more",
    "icantbeliveletyougetaway",
    "© 2025 Алексей Индастриз. Все права защищены."
];

const element = document.getElementById('animated-text');
let currentString = 0;
let currentChar = 0;
let isDeleting = false;
const typingSpeed = 100;
const deleteSpeed = 50;
const pauseBetween = 1500;

function typeText() {
    const text = strings[currentString];
    
    if (!isDeleting) {
        element.textContent = text.slice(0, currentChar + 1);
        currentChar++;
        
        if (currentChar === text.length) {
            isDeleting = true;
            setTimeout(typeText, pauseBetween);
            return;
        }
    } else {
        element.textContent = text.slice(0, currentChar - 1);
        currentChar--;
        
        if (currentChar === 0) {
            isDeleting = false;
            currentString = (currentString + 1) % strings.length;
        }
    }

    setTimeout(typeText, isDeleting ? deleteSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeText);
