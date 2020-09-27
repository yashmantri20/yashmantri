import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";


export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <div id="skillprogress">
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">
                <div className="skills-bar">
                    <h1 className="skills-heading">{emoji("Proficiency 😎")}</h1>
                    {techStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className="skills-image">
                    <img alt="Skills" src={require("../../assets/images/skillNew.svg")} />
                </div>

            </div>
            </Fade>
            </div>
        );
    }
    return null;
}
