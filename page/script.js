const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
let columns = canvas.width / fontSize;

let rainDrops = Array.from({ length: columns }, () => Math.random() * canvas.height / fontSize);

// Create a vertical gradient for the characters
function createGradient() {
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#a855f7');  // Purple
    gradient.addColorStop(0.5, '#6366f1'); // Indigo
    gradient.addColorStop(1, '#3b82f6');  // Blue
    return gradient;
}

let gradient = createGradient();

window.addEventListener('resize', () => {
    resizeCanvas();
    gradient = createGradient();
});

function draw() {
    // Solid black background fade
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Apply gradient to text
    context.fillStyle = gradient;
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        rainDrops[i]++;
    }
}

setInterval(draw, 30);
