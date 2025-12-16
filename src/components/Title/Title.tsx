import "./title.css";
import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";

export default function Title() {
  //const ref = useRef<HTMLDivElement>(null);

  const startX = -800;
  const centerLeft = 200;
  const centerWidth = 50;

  const [styles, api] = useSpring(() => ({
    opacity: 0,
    x: startX,

    config: { mass: 1, tension: 200, friction: 90 },
  }));

  const [clipStyles, clipApi] = useSpring(() => ({
    clipX: 700,
    config: { mass: 5, tension: 150, friction: 15 },
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
      x: 0,
    });
    clipApi.start({
      clipX: 0,
    });
  }, []);

  const clip1 = clipStyles.clipX.to((x) => {
    const top = centerLeft + 300 - x;
    const bottom = centerLeft - x;

    return `polygon(
    0 0,
    ${top}px 0,
    ${bottom}px 100%,
    0 100%
  )`;
  });

  const clip2 = clipStyles.clipX.to((x) => {
    const top = Math.max(0, centerLeft + 300 - x);
    const bottom = Math.max(0, centerLeft - x);

    return `polygon(
    ${top}px 0,
    ${bottom}px 100%,
    ${bottom + centerWidth}px 100%,
    ${top + centerWidth}px 0
  )`;
  });

  const clip3 = clipStyles.clipX.to((x) => {
    const top = Math.max(0, centerLeft + 300 - x);
    const bottom = Math.max(0, centerLeft - x);

    return `polygon(
    ${top + centerWidth}px 0,
    ${bottom + centerWidth}px 100%,
    100% 100%,
    100% 0
  )`;
  });

  return (
    <animated.div
      style={{
        ...styles,
        position: "relative",
      }}
    >
      <animated.span
        className="baseTextStyle leftTextStyle"
        style={{
          clipPath: clip1,
          WebkitClipPath: clip1,
        }}
      >
        Hello
      </animated.span>
      <animated.span
        className="baseTextStyle centerTextStyle"
        style={{
          clipPath: clip2,
          WebkitClipPath: clip2,
        }}
      >
        Hello
      </animated.span>

      <animated.span
        className="baseTextStyle rightTextStyle"
        style={{
          clipPath: clip3,
          WebkitClipPath: clip3,
        }}
      >
        Hello
      </animated.span>
    </animated.div>
  );
}
