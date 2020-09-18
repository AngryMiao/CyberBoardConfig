window.getMarquee = function ({
  frameRGB = [],
  speed = 5,
  background = "#000000",
  count = 30,
}) {
  let frame = {
    speed: { index: 1, value: speed },
    brightness: { index: 2, value: 10 },
    frames: [],
  };

  let fullRGB = [...frameRGB];
  for (let i = 0; i < 200; i++) {
    fullRGB.unshift(background);
    fullRGB.push(background);
  }
  if ((fullRGB.length - 200) % ((count - 1) * 5)) {
    const fill = (count - 1) * 5 - ((fullRGB.length - 200) % ((count - 1) * 5));
    for (let i = 0; i < fill; i++) {
      fullRGB.push(background);
    }
  }

  const step = (fullRGB.length - 200) / (count - 1);
  for (let i = 0; i < count; i++) {
    frame.frames.push({
      frameIndex: i + 1,
      frameRGB: fullRGB.slice(i * step, i * step + 200),
    });
  }

  return frame;
};
