const container = document.getElementById('bubbles-container');

/* ---- CRÉATION D'UNE BULLE ---- */
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const margin = 80;
  const x = margin + Math.random() * (window.innerWidth  - margin * 2);
  const y = margin + Math.random() * (window.innerHeight - margin * 2);
  bubble.style.left = x + 'px';
  bubble.style.top  = y + 'px';
  bubble.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';

  const img = document.createElement('img');
  img.src = 'img/bubble.png';
  img.alt = 'Bulle';
  bubble.appendChild(img);

  bubble.addEventListener('click', () => {
    if (bubble.classList.contains('popped')) return;

    // 1. Passer en bubble_drop
    bubble.classList.add('popped');
    img.src = 'img/bubble_drop.png';

    // 2. Après 1 seconde : disparition puis réapparition de 0, 1 ou 2 bulles
    setTimeout(() => {
      bubble.classList.add('fading');

      setTimeout(() => {
        bubble.remove();

        const newCount = Math.floor(Math.random() * 3); // 0, 1 ou 2
        for (let i = 0; i < newCount; i++) {
          setTimeout(() => container.appendChild(createBubble()), i * 150);
        }
      }, 400); // durée du fade-out CSS
    }, 1000);
  });

  return bubble;
}

/* ---- INITIALISATION DES BULLES ---- */
const initialCount = Math.floor(Math.random() * 10) + 1; // 1 à 10
for (let i = 0; i < initialCount; i++) {
  container.appendChild(createBubble());
}

/* ---- POISSON ---- */
function spawnFish() {
  const fish = document.createElement('div');
  fish.classList.add('fish');

  const goRight = Math.random() > 0.5;
  const yPos = 40 + Math.random() * (window.innerHeight - 120);
  const duration = (5 + Math.random() * 8).toFixed(1);

  fish.style.top = yPos + 'px';
  fish.style.animationName = goRight ? 'swimRight' : 'swimLeft';
  fish.style.animationDuration = duration + 's';
  fish.style.animationTimingFunction = 'linear';
  fish.style.animationFillMode = 'forwards';

  const img = document.createElement('img');
  img.src = 'img/Orange_Crappy_Fish_.webp';
  img.alt = 'Poisson';
  if (!goRight) img.style.transform = 'scaleX(-1)';
  fish.appendChild(img);

  document.body.appendChild(fish);
  fish.addEventListener('animationend', () => fish.remove());

  setTimeout(spawnFish, 4000 + Math.random() * 8000);
}

setTimeout(spawnFish, Math.random() * 5000);