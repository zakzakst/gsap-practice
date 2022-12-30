(() => {
  gsap.registerPlugin(Observer);

  Observer.create({
    type: 'wheel, touch, pointer',
    wheelSpeed: -1,
    onDown: () => {
      console.log('down');
      gsap.to('.box', { yPercent: '+=10' });
    },
    onUp: () => {
      console.log('up');
      gsap.to('.box', { yPercent: '-=10' });
    },
    tolerance: 10,
    preventDefault: true,
  });
})();