(() => {
  const boxes = document.querySelectorAll('.box');
  const timelinesMap = {};
  const sliders = {};
  const indicators = {};

  Array.from(boxes).forEach((box) => {
    const boxId = Number(box.getAttribute('data-box'));
    const boxKey = `box${boxId}`;
    const tl = gsap.timeline({
      defaults: {
        ease: 'linear',
      },
      smoothChildTiming: false,
      paused: true,
      loop: false,
      repeat: 0,
      onUpdate: () => {
        console.log(this);
        console.debug(boxKey, 'update');
        const progress = Math.round(this.progress() * 100);
        sliders[boxKey].value = progress;
        indicators[boxKey].value = progress;
        if (progress === 0 || progress === 100) {
          box.getElementsByClassName.opacity = 0.2;
        } else {
          box.getElementsByClassName.opacity = 1;
        }
      },
    });
    tl.fromTo(
      box,
      { rotation: 0, opacity: 0.2 },
      { rotation: 360, opacity: 1, duration: 2 }
    );
    timelinesMap[`box${boxId}`] = tl;
  });

  const root = gsap.timeline({
    defaults: {
      ease: 'linear',
    },
    smoothChildTiming: false,
    paused: true,
    loop: false,
    repeat: 0,
    onUpdate: () => {
      console.log(this);
      const progress = Math.round(this.progress() * 100);
      sliders.root.value = progress;
      indicators.root.value = progress;
    },
  });
  timelinesMap.root = root;
  const positions = {
    0: 3,
    1: 4,
    2: 5,
    3: 6,
  };

  Array.from(boxes).forEach((box, index) => {
    const boxId = box.getAttribute('data-box');
    const timeline = timelinesMap[`box${boxId}`];
    root.add(timeline.play(), positions[index]);
  });

  function updateRoot(animation, progress) {
    const start = animation === root ? 0 : animation.startTime();
    root.time(start + animation.duration() * progress);
  }

  Array.from(document.querySelectorAll('[data-timeline]')).forEach((tr) => {
    const tlName = tr.getAttribute('data-timeline');
    const slider = tr.querySelector('input[type="range"]');
    const duration = tr.querySelector('td:nth-child(2)');
    const indicator = tr.querySelector('input[type="number"]');
    const timeline = timelinesMap[tlName];
    duration.innerText = timeline.duration();
    slider.addEventListener('input', (e) => {
      updateRoot(timeline, e.currentTarget.value / 100);
    });
    indicator.addEventListener('input', (e) => {
      updateRoot(timeline, e.currentTarget.value / 100);
    });
    sliders[tlName] = slider;
    indicators[tlName] = indicator;
  });
})();

// const boxes = document.querySelectorAll(".box");
// const timelinesMap = {};
// const sliders = {};
// const indicators = {};

// Array.from(boxes).forEach((box) => {
//   const boxId = Number(box.getAttribute("data-box"));
//   const boxKey = `box${boxId}`;
//   const t = gsap.timeline({
//     defaults: {
//       ease: "linear"
//     },
//     smoothChildTiming: false,
//     paused: true,
//     loop: false,
//     repeat: 0,
//     onUpdate: function () {
//       console.debug(boxKey, "update");
//       const progress = Math.round(this.progress() * 100);
//       sliders[boxKey].value = progress;
//       indicators[boxKey].value = progress;
//       if (progress === 0 || progress === 100) {
//         box.style.opacity = "0.2";
//       } else {
//         box.style.opacity = "1";
//       }
//     }
//   });
//   t.fromTo(
//     box,
//     { rotation: 0, opacity: 0.2 },
//     { rotation: 360, opacity: 1, duration: 2 }
//   );
//   timelinesMap[`box${boxId}`] = t;
// });

// const root = gsap.timeline({
//   defaults: {
//     ease: "linear"
//   },
//   smoothChildTiming: false,
//   paused: true,
//   loop: false,
//   repeat: 0,
//   onUpdate: function () {
//     const progress = Math.round(this.progress() * 100);
//     sliders.root.value = progress;
//     indicators.root.value = progress;
//   }
// });
// timelinesMap.root = root;
// const positions = {
//   0: 3,
//   1: 4,
//   2: 5,
//   3: 6
// };

// Array.from(boxes).forEach((box, index) => {
//   const boxId = box.getAttribute("data-box");
//   const timeline = timelinesMap[`box${boxId}`];
//   root.add(timeline.play(), positions[index]);
// });

// function updateRoot(animation, progress) {
//   let start = animation === root ? 0 : animation.startTime();
//   root.time(start + animation.duration() * progress);
// }

// Array.from(document.querySelectorAll("[data-timeline]")).forEach((tr) => {
//   const timelineName = tr.getAttribute("data-timeline");
//   const slider = tr.querySelector('input[type="range"]');
//   const duration = tr.querySelector("td:nth-child(2)");
//   const indicator = tr.querySelector('input[type="number"]');
//   const timeline = timelinesMap[timelineName];
//   duration.innerText = timeline.duration();
//   slider.addEventListener("input", (e) => {
//     updateRoot(timeline, e.currentTarget.value / 100);
//   });
//   indicator.addEventListener("input", (e) => {
//     updateRoot(timeline, e.currentTarget.value / 100);
//   });
//   sliders[timelineName] = slider;
//   indicators[timelineName] = indicator;
// });
