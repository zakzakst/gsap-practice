(() => {
  const section1El = document.querySelector('#section1');
  const content1El = document.querySelector('#section1 .content');
  const thumbnails1El = document.querySelector('#section1 .thumbnails');

  ScrollTrigger.create({
    trigger: section1El,
    start: 'top 50%',
    onEnter: () => {
      content1El.classList.add('is-animated');
    },
    // markers: true,
  });

  gsap.to(thumbnails1El, {
    scrollTrigger: {
      trigger: section1El,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      // markers: true,
    },
    // xPercent: -20,
    x: -500,
  });

  const section2El = document.querySelector('#section2');
  const content2El = document.querySelector('#section2 .content');
  const thumbnails2El = document.querySelector('#section2 .thumbnails');

  ScrollTrigger.create({
    trigger: section2El,
    start: 'top 50%',
    onEnter: () => {
      content2El.classList.add('is-animated');
    },
    // markers: true,
  });

  gsap.to(thumbnails2El, {
    scrollTrigger: {
      trigger: section2El,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      // markers: true,
    },
    // xPercent: 20,
    x: 500,
  });
})();