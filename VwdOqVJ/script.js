(() => {
  gsap.registerPlugin(ScrollTrigger);
  const sections = gsap.utils.toArray('.panel');
  const scrollDistance = 5000;

  const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#hor',
      pin: true,
      scrub: 0.1,
      end: `+=${scrollDistance}`,
      markers: true,
    },
  });

  const el = document.querySelector('.felement');
  const scaleFactor = 3;

  gsap.to(el, {
    x: () => -1 * ((50 * scaleFactor) + (window.innerWidth / 100) * 70),
    scale: 1 + scaleFactor,
    ease: 'none',
    scrollTrigger: {
      trigger: '#first-panel',
      start: 'top top',
      end: `+=${scrollDistance / 3}`,
      scrub: true,
      markers: true,
    },
  });
})();
