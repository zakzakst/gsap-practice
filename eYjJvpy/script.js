(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.all-3',
      start: 'top top',
      end: '+=3000',
      pin: true,
      markers: true,
      scrub: 1,
    },
  });

  tl
    .fromTo(
      '.value h3',
      1,
      { opacity : 1, y: 0, rotateX: 0 },
      { opacity : 0, y: -20, rotateX: 45 },
    )
    .fromTo(
      '.lft, .rgt',
      1,
      { opacity : 1, y: 0, rotateX: 0 },
      { opacity : 0, y: -200, rotateX: 45 },
      '<',
    )
    .fromTo(
      '.vision h3',
      1,
      { opacity : 0, y: 20, rotateX: -45 },
      { opacity : 1, y: 0, rotateX: 0 },
    )
    .fromTo(
      '.lft-v, .rgt-v',
      1,
      { opacity : 0, y: 100, rotateX: -45 },
      { opacity : 1, y: 0, rotateX: 0 },
      '<',
    )
    .fromTo(
      '.vision h3',
      1,
      { opacity : 1, y: 0, rotateX: 0 },
      { opacity : 0, y: -20, rotateX: 45 },
    )
    .fromTo(
      '.lft-v, .rgt-v',
      1,
      { opacity : 1, y: 0, rotateX: 0 },
      { opacity : 0, y: -200, rotateX: 45 },
      '<',
    )
    .fromTo(
      '.mission h3',
      1,
      { opacity : 0, y: 20, rotateX: -45 },
      { opacity : 1, y: 0, rotateX: 0 },
    )
    .fromTo(
      '.lft-m, .rgt-m',
      1,
      { opacity : 0, y: 100, rotateX: -45 },
      { opacity : 1, y: 0, rotateX: 0 },
      '<',
    )
    .fromTo(
      '.mission h3',
      1,
      { opacity : 1, y: 0, rotateX: 0 },
      { opacity : 0, y: -20, rotateX: 45 },
    )
    .fromTo(
      '.lft-m, .rgt-m',
      1,
      { opacity : 1, y: 0, rotateX: 0 },
      { opacity : 0, y: -200, rotateX: 45 },
      '<',
    );
})();
