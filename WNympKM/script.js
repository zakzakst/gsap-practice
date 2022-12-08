(() => {
  const tl = gsap.timeline({
    repeat: 10,
    repeatDelay: 5,
    repeatRefresh: true,
  });
  let initA = 0;
  let initB = -200;
  let moveA = 200;
  let moveB = 0;

  tl.set('#img1', { y: () => initA });
  tl.set('#img2', { y: () => initB });

  tl.
    to('#img1', {
      duration: 2,
      y: () => moveA,
      ease: 'expo.out',
    })
    .to('#img2', {
      duration: 2,
      y: () => moveB,
      ease: 'expo.out',
      onComplete: updateLet,
    }, '-=2');

  function updateLet() {
    if (moveA === 200) {
      initA = -200;
      initB = 0;
      moveA = 0;
      moveB = 200;
    } else {
      initA = 0;
      initB = -200;
      moveA = 200;
      moveB = 0;
    }
    console.log('====================');
    console.log(`img1 from: ${initA}, to: ${moveA}`);
    console.log(`img2 from: ${initB}, to: ${moveB}`);
  }
})();