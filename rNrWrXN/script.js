(() => {
  const sections = gsap.utils.toArray('section');
  let currentSection = sections[0];
  const navlinks = gsap.utils.toArray('nav a');

  gsap.set('body', {
    height: (sections.length * 100) + '%',
  });

  sections.forEach((section, i) => {
    ScrollTrigger.create({
      pinned: true,
      start: () => (i - 0.1) * innerHeight,
      end: () => (i + 0.2) * innerHeight,
      // self.isActiveのあとに&&にすることでif(self.isActive)をやっている？フォールバック利用して
      onToggle: self => self.isActive && setSection(section),
      onEnter: () => navlinks[i].classList.add('active'),
      onEnterBack: () => navlinks[i].classList.add('active'),
      onLeave: () => navlinks[i].classList.remove('active'),
      onLeaveBack: () => navlinks[i].classList.remove('active'),
    });
  });

  function setSection(newSection) {
    if (newSection !== currentSection) {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          overwrite: 'auto',
        },
      });
      tl
        .to(newSection, {
          scale: 1,
          autoAlpha: 1,
        })
        .to(currentSection, {
          scale: 1.2,
          autoAlpha: 0,
        }, '<')
        .from(newSection.querySelector('h1'), {
          autoAlpha: 0,
          y: 50,
        }, '<')
        .from(newSection.querySelector('p'), {
          autoAlpha: 0,
          y: 20,
        }, '>');
      currentSection = newSection;
    }
  }

  // TODO: ここ分からなかった。再読み込み時の挙動が上手くいくっぽい
  ScrollTrigger.create({
    start: 1,
  }).scroll(2);

  gsap.utils.toArray(navlinks).forEach((a, i) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 0.1,
        scrollTo: i * window.innerHeight,
        overwrite: true,
      });
    });
  });
})();
