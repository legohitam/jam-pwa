function updateClock() {
    const now = new Date();
    document.getElementById("digital-clock").textContent = now.toLocaleTimeString();
    drawAnalogClock(now);
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
document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
setInterval(updateClock, 1000);
updateClock();
