  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;
  function showSlide(newIndex) {
    if (newIndex < 0 || newIndex >= slides.length) return;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === newIndex);
    });
    current = newIndex;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
  }
  prevBtn.addEventListener('click', () => showSlide(current - 1));
  nextBtn.addEventListener('click', () => showSlide(current + 1));
  document.addEventListener('keydown', (event) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (event.key === 'ArrowLeft') {
      if (current > 0) showSlide(current - 1);
    } else if (event.key === 'ArrowRight') {
      if (current < slides.length - 1) showSlide(current + 1);
    }
  });
  showSlide(current);
