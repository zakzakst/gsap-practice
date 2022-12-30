class HorizontalSection {
  constructor() {
    this.DOM = {
      container: document.querySelector('.js--hero-a'),
      progress: document.querySelector('.b--progress-a__item__artwork'),
      hero: document.querySelector('.b--hero-a'),
      pin: document.getElementById('home'),
      cards: gsap.utils.toArray('.b--card-b'),
    };
    this.init();
  }

  init() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.container,
        invalidateOnRefresh: true,
        pin: this.DOM.pin,
        scrub: 1,
        start: 'top top',
        end: () => `+=${this.DOM.container.offsetWidth}`,
      },
    });

    tl
      .to(this.DOM.container, {
        x: () => -(this.DOM.container.scrollWidth - document.documentElement.clientWidth),
        ease: 'none',
      })
      .to(this.DOM.progress, {
        width: '100%',
        ease: 'none',
      }, '<');

    const newLocal = gsap.to('.test', {
      backgroundPositionX: '75%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.test',
        containerAnimation: tl,
        start: 'left 75%',
        end: 'left 25%',
        scrub: true,
        id: '2',
        markers: true,
      },
    });
  }
}

(() => {
  gsap.registerPlugin(ScrollTrigger);
  new HorizontalSection();
})();
