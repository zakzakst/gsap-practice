(() => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: {
      ease: 'none',
    },
    scrollTrigger: {
      trigger: '#pinned-wrapper',
      pin: true,
      start: 'top top',
      end: '+=300%',
      scrub: true,
      markers: true,
    },
  });
  const slides = gsap.utils.toArray('.slide');
  slides.forEach((slide, index) => {
    if (index > 0) {
      tl
        .to(slides[index - 1], { opacity: 0 }, '+=0.25')
        .to(slide, { opacity: 1 }, '<');
    }
  });
  tl.to({}, { duration: 0.25 });
})();
