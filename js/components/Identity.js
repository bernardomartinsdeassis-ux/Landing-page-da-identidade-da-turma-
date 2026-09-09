const words = ['CODE', 'CREATE', 'CONNECT', 'LEARN'];

export function renderIdentity() {
  return `
    <section id="id_turma" class="id_turma-section" aria-labelledby="titulo-identidade">
      <div class="identity-hero">
        <span class="identity-hero__eyebrow">RESIDÊNCIA FULL STACK 5.0</span>

        <h1 id="titulo-identidade" class="kinetic-title" aria-label="Code Create Connect Learn">
          <span class="kinetic-title__word" aria-hidden="true"></span>
        </h1>

        <p class="identity-hero__description">
          Uma turma. Diferentes histórias. Um caminho construído em conjunto.
        </p>

        <div class="identity-hero__line" aria-hidden="true"></div>
      </div>
    </section>
  `;
}

export function initIdentity() {
  const title = document.querySelector('.kinetic-title');
  const wordElement = title?.querySelector('.kinetic-title__word');

  if (!title || !wordElement) return;

  let currentIndex = 0;
  let timer;
  let running = true;

  const createLetters = (word) => {
    wordElement.innerHTML = '';

    [...word].forEach((letter, index) => {
      const span = document.createElement('span');
      span.className = 'kinetic-title__letter';
      span.textContent = letter;
      span.style.setProperty('--i', index);
      span.style.setProperty('--total', word.length);
      wordElement.appendChild(span);
    });
  };

  const animateIn = () => {
    title.classList.remove('is-exiting');
    title.classList.add('is-entering');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        title.classList.remove('is-entering');
        title.classList.add('is-visible');
      });
    });
  };

  const animateOut = () => {
    title.classList.remove('is-visible');
    title.classList.add('is-exiting');
  };

  const showNextWord = () => {
    if (!running) return;

    animateOut();

    window.setTimeout(() => {
      currentIndex = (currentIndex + 1) % words.length;
      createLetters(words[currentIndex]);
      animateIn();
    }, 720);
  };

  createLetters(words[currentIndex]);
  animateIn();

  timer = window.setInterval(showNextWord, 3000);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const handleMotionPreference = () => {
    if (reduceMotion.matches) {
      running = false;
      window.clearInterval(timer);
      title.classList.remove('is-entering', 'is-exiting');
      title.classList.add('is-visible');
    }
  };

  reduceMotion.addEventListener?.('change', handleMotionPreference);
  handleMotionPreference();
}
