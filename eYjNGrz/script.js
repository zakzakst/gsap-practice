(() => {
  const items = gsap.utils.toArray('.container > ul > li');
  const cursor = document.querySelector('#Cursor');
  const xTo = gsap.quickTo(cursor, 'x', {
    duration: 0.3,
    ease: 'power3',
  });
  const yTo = gsap.quickTo(cursor, 'y', {
    duration: 0.3,
    ease: 'power3',
  });

  gsap.set(cursor, {
    scale: 0.2,
    xPercent: -50,
    yPercent: -50,
  });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        overwite: 'auto',
      });
    })
    item.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        scale: 0.2,
        duration: 0.2,
        overwite: 'auto',
      });
    });
  });
})();
