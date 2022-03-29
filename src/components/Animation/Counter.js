import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
const Counter = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: false,
        reverse: flip,
        from: { number: 1 },
        number: 100,
        delay: 200,
        config: config.molasses,
        
      })
    return (
        <div>
            <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
            
        </div>
    );
};

export default Counter;