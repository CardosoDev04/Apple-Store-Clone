import React, { useRef } from "react";
import {motion, useInView} from "framer-motion";

const FadeInParagraph = ({ text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref}>
            <motion.p
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "ease-in-out 1s"
                }}
            >
                {text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br/>
                    </React.Fragment>
                ))}
            </motion.p>
        </div>
    );
}

export default FadeInParagraph