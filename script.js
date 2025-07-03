// Hide loader after page load
window.addEventListener('load', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 500);
});


const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle(x, y) {
    particles.push({
        x: x,
        y: y,
        size: Math.random() * 7 + 1,
        life: 100,
        dx: (Math.random() - 2.5) * 2,
        dy: (Math.random() - 1.5) * 2
    });
}

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life -= 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(136, 192, 208, ${p.life / 100})`;
        ctx.fill();
        if (p.life <= 0) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(updateParticles);
}

window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 0.02; i++) {
        createParticle(e.clientX, e.clientY);
    }
});

updateParticles();
