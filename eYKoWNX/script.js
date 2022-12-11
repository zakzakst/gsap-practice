(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrap',
      start: 'top top',
      pin: true,
    },
  });
  tl.to('.left', {
    duration: 1,
    x: -100,
  });
  tl.to('.left', {
    duration: 0.5,
    rotate: 180,
  });
  tl.call(() => {
    const st = tl.scrollTrigger;
    const currentScroll = st.scroll();
    console.log('create');
    gsap.to('.right', {
      duration: 1,
      x: 200,
      scrollTrigger: {
        scrub: true,
        start: currentScroll,
        end: () => '+=' + Math.min(ScrollTrigger.maxScroll(window) - currentScroll, 500),
      },
    });
  });
})();
