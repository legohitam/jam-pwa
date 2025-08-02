function updateClock() {
    const now = new Date();
    document.getElementById("digital-clock").textContent = now.toLocaleTimeString();
    drawAnalogClock(now);
    autoTheme(now);
}

function drawAnalogClock(now) {
    const canvas = document.getElementById("analog-clock");
    const ctx = canvas.getContext("2d");
    const r = canvas.width / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(r, r);

    // Lingkaran
    ctx.beginPath();
    ctx.arc(0, 0, r - 5, 0, 2 * Math.PI);
    ctx.stroke();

    // Jam
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Jarum jam
    ctx.rotate((hour + minute / 60) * Math.PI / 6);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -r + 60);
    ctx.stroke();
    ctx.rotate(-(hour + minute / 60) * Math.PI / 6);

    // Jarum menit
    ctx.rotate(minute * Math.PI / 30);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -r + 40);
    ctx.stroke();
    ctx.rotate(-minute * Math.PI / 30);

    // Jarum detik
    ctx.strokeStyle = "red";
    ctx.rotate(second * Math.PI / 30);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -r + 20);
    ctx.stroke();
    ctx.rotate(-second * Math.PI / 30);

    ctx.translate(-r, -r);
}

function autoTheme(now) {
    const hour = now.getHours();
    const isNight = hour >= 18 || hour < 6;

    if (isNight) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// Tombol toggle manual (opsional)
document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

setInterval(updateClock, 1000);
updateClock();
const clockFace = document.getElementById("clock-face");

// Tambahkan angka 1 sampai 12 di jam
for (let i = 1; i <= 12; i++) {
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = i;

    const angle = (i - 3) * 30 * (Math.PI / 180); // posisi jam
    const radius = 130;
    const centerX = 150;
    const centerY = 150;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    number.style.left = `${x}px`;
    number.style.top = `${y}px`;

    clockFace.appendChild(number);
}
