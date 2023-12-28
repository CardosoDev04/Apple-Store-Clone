import React from 'react';

import {useScroll, motion} from "framer-motion";

import FadeInParagraph from "./FadeInParagraph";
import FadeInTitle from "./FadeInTitle";

const text = [
    "Born from the vision of Steve Jobs and his pursuit of innovation,\n" +
    "our digital sanctuary is a homage to the iconic brand that has redefined technology.\n",
    "It all begins with the belief that technology should not only be functional but also\n" +
    "seamlessly integrated into our lives, enhancing our experiences.\n" +
    "We are not just technology enthusiasts, we are custodians of a legacy.\n",
    "We are Apple."
];


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
                    <FadeInParagraph text={text[0]}/>
                    <FadeInParagraph text={text[1]}/>
                </div>
                <div className="last-title">
                    <FadeInTitle text="We are Apple."/>
                </div>
            </div>
        </div>
    );
}

export default About;