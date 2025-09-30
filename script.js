// ===== Dynamic Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Hero Floating Text =====
const heroName = document.querySelector('header.hero h1');
const heroAvatar = document.querySelector('header.hero .avatar');
let direction = 1;
let position = 0;
function floatHero(){
  position += 0.3 * direction;
  if(position > 8 || position < -8) direction *= -1;
  heroName.style.transform = `translateY(${position}px)`;
  heroAvatar.style.transform = `translateY(${position}px)`;
  requestAnimationFrame(floatHero);
}
floatHero();

// ===== Floating Particles =====
const canvas = document.createElement('canvas');
canvas.id = 'hero-canvas';
document.querySelector('header.hero').appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 200;

let particles = [];
const colors = ['#6fa8ff','#4a90e2','#f5c16c','#d2e1fc'];
function random(min,max){return Math.random()*(max-min)+min;}
for(let i=0;i<60;i++){
  particles.push({
    x: random(0,canvas.width),
    y: random(0,canvas.height),
    radius: random(2,6),
    dx: random(-0.2,0.2),
    dy: random(-0.5,0.5),
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=200;});

// ===== Scroll Reveal =====
const animElements = document.querySelectorAll('[data-anim]');
function reveal(){
  animElements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);

// ===== Pulsing Button Glow =====
const buttons = document.querySelectorAll('.btn');
function pulse(){
  buttons.forEach(btn=>{
    btn.style.boxShadow = `0 0 ${Math.random()*15+5}px rgba(79,160,255,0.4)`;
  });
  requestAnimationFrame(pulse);
}
pulse();

