(() => {
  if (!document.querySelector('.fadeInUp')) return;

  gsap.registerPlugin(ScrollTrigger);

  const setAnim = (section) => {
    gsap.set(section, { opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.parentNode,
        start: 'top 50%',
        end: 'bottom center',
        markers: true,
        delay: 1.5,
      },
      defaults: {
        duration: 1,
        ease: 'sine.inOut',
      },
    });
    tl.fromTo(section,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        duration: 1,
        delay: 1,
        autoAlpha: 1,
        y: 0,
      },
    );
  };

  gsap.utils.toArray('.fadeInUp').forEach((section) => {
    setAnim(section);
  });
})();
