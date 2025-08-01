const digitalClock = document.getElementById('digital-clock');
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const clockFace = document.getElementById('analog-clock');

// Buat angka 1–12
for (let i = 1; i <= 12; i++) {
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = i;

    const angle = (i - 3) * 30 * (Math.PI / 180); // mulai dari atas
    const radius = 130;

    const x = 150 + radius * Math.cos(angle); // centerX = 150
    const y = 150 + radius * Math.sin(angle); // centerY = 150

    number.style.left = `${x}px`;
    number.style.top = `${y}px`;

    clockFace.appendChild(number);
}

function updateClock() {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const wib = new Date(utc + 7 * 3600000);

    const h = wib.getHours();
    const m = wib.getMinutes();
    const s = wib.getSeconds();

    digitalClock.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    hourHand.style.transform = `translateX(-50%) rotate(${(h % 12 + m / 60) * 30}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${m * 6}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${s * 6}deg)`;

    document.body.className = (h >= 6 && h < 18) ? 'day' : '';
}

setInterval(updateClock, 1000);
updateClock();
