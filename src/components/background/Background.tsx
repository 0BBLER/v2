import "./background.css";
import { animated, useSpring } from "@react-spring/web";

export default function Background() {
  const styles = useSpring({
    from: { x: 0 },
    to: { x: 60 },
    loop: true,
    config: {
      duration: 1000,
    },
  });

  return (
    <animated.div
      className="background"
    ></animated.div>
  );
}
