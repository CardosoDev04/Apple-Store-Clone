import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";

const FadeInTitle = ({text, className}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref}>
            <motion.h2
                className= "title-black"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "ease-in-out 1.5s"
                }}
            >
                {text}
            </motion.h2>
        </div>
    );
}

export default FadeInTitle