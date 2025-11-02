const quotes = document.querySelectorAll('.quote-item');
let currentQuote = 0;

// Kayan Yıldızlar (Aşağıdan yukarı doğuya)
function createShootingStar() {
    const star = document.createElement('span');
    star.innerHTML = '✨';
    star.className = 'shooting-star';
    star.style.bottom = '0';
    star.style.left = '-50px';
    star.style.animationDuration = (Math.random() * 5 + 5) + 's';
    star.style.fontSize = (Math.random() * 4 + 10) + 'px';
    star.style.color = '#fff';
    document.querySelector('.shooting-stars').appendChild(star);
    setTimeout(() => star.remove(), 10000);
}
setInterval(createShootingStar, 800);

// Pembe kalp yağmuru
function createPinkHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '💕';
    heart.className = 'pink-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
    heart.style.fontSize = (Math.random() * 8 + 12) + 'px';
    document.querySelector('.hearts-float').appendChild(heart);
    setTimeout(() => heart.remove(), 16000);
}
setInterval(createPinkHeart, 1200);

// Hızlı Rengarenk Emoji Yağmuru
const emojis = ['💖', '💕', '💗', '⭐', '✨', '🌸'];
const colors = ['#ff69b4', '#ff1493', '#ffd700', '#ffd700', '#ffffff', '#ffc0cb'];
function createRainEmoji() {
    const emoji = document.createElement('span');
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    emoji.innerHTML = randomEmoji;
    emoji.className = 'rain-emoji';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 1 + 1) + 's';
    emoji.style.color = randomColor;
    emoji.style.fontSize = (Math.random() * 10 + 12) + 'px';
    document.querySelector('.emoji-rain').appendChild(emoji);
    setTimeout(() => emoji.remove(), 2500);
}
setInterval(createRainEmoji, 150);

// Tarih Hesaplamaları
function calculateDays(pastDate) {
    const now = new Date();
    const diff = now - new Date(pastDate);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function initDates() {
    const meetDate = '2025-09-22';
    const coupleDate = '2025-10-22';
    document.getElementById('days-meet').textContent = calculateDays(meetDate) + ' günümüz oldu!';
    document.getElementById('days-couple').textContent = calculateDays(coupleDate) + ' gün sevgiliyiz!';
}

// Geri Sayım Animasyonlu
function updateCountdown() {
    const now = new Date();
    const birthday = new Date('2026-03-26T00:00:00');
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const animText = document.getElementById('countdown-anim');
    animText.innerHTML = days + ' gün kaldı! 💖';
    animText.style.animation = 'none';
    setTimeout(() => animText.style.animation = 'typingAnim 2s ease-in-out infinite', 10);
}
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    if (canvas && ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        function drawHeart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff9a9e';
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        setInterval(drawHeart, 300);
    }
}

// Şiir Reveal (İlk şiir)
function revealPoem() {
    const box = document.querySelector('.poem-box');
    const content = document.getElementById('poem-content');
    const trigger = document.querySelector('.poem-trigger');
    if (trigger) trigger.style.display = 'none';
    content.classList.add('revealed');
    const lines = document.querySelectorAll('.handwritten-line');
    lines.forEach((line, index) => {
        setTimeout(() => line.classList.add('visible'), index * 400);
    });
}

// Yeni Şiir Reveal (Sessiz Şiir)
function revealNewPoem() {
    const newBox = document.querySelector('.new-poem-box');
    const newContent = document.getElementById('new-poem-content');
    const newTrigger = document.querySelector('.new-poem-trigger');
    if (newTrigger) newTrigger.style.display = 'none';
    newContent.classList.add('revealed');
    const newLines = document.querySelectorAll('.new-handwritten-line');
    newLines.forEach((line, index) => {
        setTimeout(() => line.classList.add('visible'), index * 400);
    });
}

// Mektup Aç (Typewriter)
function openLetter() {
    const content = document.getElementById('letter-content');
    const trigger = document.querySelector('.letter-trigger');
    if (trigger) trigger.style.display = 'none';
    content.classList.add('revealed');
    const lines = document.querySelectorAll('.letter-line');
    lines.forEach((line, index) => {
        setTimeout(() => line.classList.add('visible'), index * 300);
    });
}

// Quotes Carousel
function nextQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}
function prevQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    quotes[currentQuote].classList.add('active');
}
setInterval(nextQuote, 4000);

// Başlangıç
window.addEventListener('load', () => {
    initDates();
    updateCountdown();
    setInterval(updateCountdown, 86400000);
    initParticles();
    document.body.style.opacity = '1';
});