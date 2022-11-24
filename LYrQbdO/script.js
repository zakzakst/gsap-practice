(() => {
  const dot = document.querySelector('#picture-dot');
  const redDot = document.querySelector('#red-dot');

  gsap.to(redDot, {
    y: '100vh',
    ease: 'linear',
    scrollTrigger: {
      trigger: '#section-1',
      start: 'top top',
      end: 'top+=100% top',
      // markers: false,
      scrub: true,
    },
  });

  gsap.from(dot, {
    y: '-100vh',
    ease: 'linear',
    scrollTrigger: {
      trigger: '#section-1',
      start: 'top top',
      end: 'top+=100% top',
      // markers: false,
      scrub: true,
    },
  });

  gsap.fromTo(dot, {
    clipPath: 'circle(10vw at calc(75%) calc(25% + 10vw))',
  }, {
    clipPath: 'circle(100vw at calc(75%) calc(25% + 10vw))',
    ease: 'power1.in',
    scrollTrigger: {
      scrub: 0.3,
      start: 'center center',
      // markers: false,
      pin: '#section-2',
    },
  });
})();
