import React from 'react';

import {useScroll, motion} from "framer-motion";

import FadeInParagraph from "./FadeInParagraph";

const firstText =
    "Born from the vision of Steve Jobs and his pursuit of innovation,\n" +
    "our digital sanctuary is a homage to the iconic brand that has redefined technology.\n"


const About = () => {
    useScroll({

    });
    return (
        <div className="about">
            <motion.h1
                className="about-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut",  duration: 1 }}
            >
                <span className="title-black">Our story,</span>
                <span className="title-gray"> is what makes us who we are.</span>
            </motion.h1>
            <div className="about-description">
                <div className="first-description">
                    <FadeInParagraph text={firstText}/>
                </div>
            </div>
        </div>
    );
}

export default About;