import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedExample = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust animation duration as needed
  });

  return (
    <animated.div style={props} className="animated-example">
      <p>This is a simple fade-in animation using react-spring.</p>
    </animated.div>
  );
};

export default AnimatedExample;
