gsap.fromTo(
  "#box0",
  {
    y: -20,
    opacity: 1,
    background: "blue",
  },
  {
    y: 20,
    opacity: 1,
    background: "red",
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: "linear",
    width: 3,
    borderRadius: 0,
  }
);
gsap.fromTo(
  "#box1",
  {
    y: 20,
    opacity: 1,
    background: "yellow",
  },
  {
    y: -20,
    opacity: 1,
    background: "green",
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: "linear",
    width: 3,
    borderRadius: 0,
  }
);
gsap.fromTo(
  "#box2",
  {
    y: -20,
    opacity: 1,
    background: "green",
  },
  {
    y: 20,
    opacity: 1,
    background: "yellow",
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: "linear",
    width: 3,
    borderRadius: 0,
  }
);
gsap.fromTo(
  "#box3",
  {
    y: 20,
    opacity: 1,
    background: "red",
  },
  {
    y: -20,
    opacity: 1,
    background: "blue",
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: "linear",
    width: 3,
    borderRadius: 0,
  }
);
