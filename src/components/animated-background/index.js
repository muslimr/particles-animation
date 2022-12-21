import React from "react";
import '../../styles/animated-background.scss'


export default function AnimatedBackground() {
    function getParticlesArr(num, type) {
        let particles = [];

        for (let i = 0; i < num; i++) {
            particles.push(type);
        }
        return particles
    }


    return (
        <div className="animated-wrapper">
            <div className="wrap">
                {
                    getParticlesArr(700, "c").map((item, index) =>
                        <div className="c" key={index}/>
                    )
                }
            </div>
            <div className="wrap">
                {
                    getParticlesArr(700, "c").map((item, index) =>
                        <div className="b" key={index}/>
                    )
                }
            </div>
        </div>

    )
}
