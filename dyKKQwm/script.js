//View more event text animation
let hoverBoxes = gsap.utils.toArray(".link-tax");

hoverBoxes.forEach(box => {
  let moreEvent = box.querySelector(".more-event"),
      split = new SplitText(moreEvent, { type: "words,chars" }),
      chars = split.chars,
      tl = gsap.timeline({
              paused: true,
              scrollTrigger: {
                trigger: box,
                start: "top center",
                end: "bottom top",
                toggleActions: "restart pause resume reset",
                markers: true
              }
            });
  tl.from( chars, {
    duration: 1,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.03
  });
  box.addEventListener("mouseenter", () => tl.restart());
});