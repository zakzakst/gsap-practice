(() => {
  gsap.utils.toArray('.b--layer-pinned-a__content').forEach((panel, index, array) => {
    if (index === array.length - 1) {
      console.log('Last element is' + index);
    }
    ScrollTrigger.create({
      trigger: panel,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });
  });
})();
