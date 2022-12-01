(() => {
  const hoverBoxes = gsap.utils.toArray('.link-tax');
  hoverBoxes.forEach((box) => {
    const moreEventEl = box.querySelector('.more-event');
    const split = moreEventEl.textContent.split('');
    const splitEls = split.map((item) => {
      const itemEl = document.createElement('span');
      itemEl.textContent = item;
      return itemEl;
    });
    moreEventEl.innerHTML = '';
    splitEls.forEach((el) => {
      moreEventEl.appendChild(el);
    });
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: box,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'restart pause resume reset',
        markers: true,
      },
    });
    tl.from(moreEventEl.children, {
      duration: 1,
      opacity: 0,
      scale: 0,
      y: 80,
      rotateX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.03,
    });
    box.addEventListener('mouseenter', () => tl.restart());
  });
})();