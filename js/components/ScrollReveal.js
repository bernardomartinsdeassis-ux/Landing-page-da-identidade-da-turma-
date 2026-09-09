const DIRECTIONS = ['left', 'right', 'up', 'down'];

// Escolhe uma direção aleatória, evitando repetir a mesma da seção anterior
// para o efeito ficar mais variado visualmente.
function pickDirection(previous) {
  let direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

  while (direction === previous && DIRECTIONS.length > 1) {
    direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
  }

  return direction;
}

export function initScrollReveal() {
  const sections = document.querySelectorAll('main > section');

  if (!sections.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduceMotion.matches) {
    sections.forEach((section) => section.classList.add('is-revealed'));
    return;
  }

  let previousDirection = null;

  sections.forEach((section) => {
    const direction = pickDirection(previousDirection);
    previousDirection = direction;

    section.classList.add('scroll-reveal', `scroll-reveal--${direction}`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-revealed', entry.isIntersecting);
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));

  const handleMotionPreference = () => {
    if (reduceMotion.matches) {
      observer.disconnect();
      sections.forEach((section) => section.classList.add('is-revealed'));
    }
  };

  reduceMotion.addEventListener?.('change', handleMotionPreference);
}
