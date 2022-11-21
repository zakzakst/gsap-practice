(() => {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector('.wrapper');

  const tl = gsap.timeline();
  tl.to(container, {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      start: 'top top',
      end: '+=1200',
      pin: true,
      markers: {
        startColor: 'white',
        endColor: 'fuchsia',
      },
    },
  });
})();
