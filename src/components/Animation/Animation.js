import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

const Animation = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
      })


    
    return (
        
        <div>
            <animated.div style={props}>I will fade in</animated.div>
            
        </div>
    );
};

export default Animation;