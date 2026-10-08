// Aktuální rok v patičce
document.getElementById('year').textContent = new Date().getFullYear();

// Mobilní menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Datum objednávky: nejdřív od zítřka
const dateInput = document.getElementById('date');
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split('T')[0];

// Objednávkový formulář
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach(field => {
    const ok = field.value.trim() !== '';
    field.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    statusEl.textContent = 'Vyplňte prosím všechna povinná pole.';
    statusEl.className = 'form__status error';
    return;
  }

  // Zatím se nic neodesílá. Napojte formulář na e-mail nebo službu
  // (např. Formspree) a nahraďte tento blok voláním fetch().
  statusEl.textContent = 'Děkuji! Objednávku jsem přijala, brzy se vám ozvu.';
  statusEl.className = 'form__status ok';
  form.reset();
});
