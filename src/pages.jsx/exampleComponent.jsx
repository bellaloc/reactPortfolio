// src/components/ExampleComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';

const ExampleComponent = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={props}>
      <h2>Fade-In Animated Component</h2>
      <p>Your content here...</p>
    </animated.div>
  );
};

export default ExampleComponent;
