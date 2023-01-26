(() => {
  const sectionEl = document.querySelector('#section');
  const headingEl = document.querySelector('#section h2');
  const paragraphEls = document.querySelectorAll('#section p');
  const buttonEl = document.querySelector('#section button');

  gsap.set([headingEl, paragraphEls], {
    opacity: 0,
    y: 50,
  });

  gsap.set(buttonEl, {
    opacity: 0,
    scale: 1.2,
  });

  const anim = () => {
    const tl = gsap.timeline();
    tl
      .to([headingEl, paragraphEls], {
        opacity: 1,
        y: 0,
        stagger: 0.1,
      })
      .to(buttonEl, {
        opacity: 1,
        scale: 1,
      }, '+=0.2');
  };

  ScrollTrigger.create({
    trigger: sectionEl,
    start: 'top 50%',
    onEnter: self => {
      self.kill();
      anim();
    },
    // markers: true,
  });

})();