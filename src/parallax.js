const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  parallaxElements.forEach(element => {
    const speed = 0.2; // מהירות האפקט
    const yOffset = scrollY * speed;
    element.style.backgroundPositionY = `${yOffset}px`;
  });
});