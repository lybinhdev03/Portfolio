import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export const Skill = () => {
    const frontendSkills = [
        { label: "HTML/CSS/JavaScript", value: 90 },
        { label: "ReactJS (Typescript)", value: 80 },
    ];

    const backendSkills = [
        { label: "NestJS", value: 70 },
        { label: "Java Spring", value: 50 },
        { label: "Database Postgres/MongoDB", value: 95 },
    ];

    const renderSkillBars = (skills: any[]) =>
        skills.map((skill, index) => (
            <div key={index} className="skill-bar">
                <span className="skill-label">
                    {skill.label} - <span className="skill-percentage">{skill.value}%</span>
                </span>
                <ProgressBar
                    completed={skill.value}
                    bgColor="#000"
                    baseBgColor="#e0e0e0"
                    height="10px"
                    labelAlignment="outside"
                    labelColor="#000"
                    animateOnRender
                />
            </div>
        ));

    return (
        <div className="arlo_tm_section" id="skills">
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Kỹ năng Frontend</h4>
                            </div>
                            <p>
                                Ngôn ngữ lập trình: HTML, CSS, Javascript
                                Framework/Library: Bootstrap,
                                JQuery, Antd, ReactJS.
                            </p>
                        </div>
                        <div className="rightbox">{renderSkillBars(frontendSkills)}</div>
                    </div>
                </div>
            </div>
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Kỹ năng Backend</h4>
                            </div>
                            <p>
                                Ngôn ngữ lập trình: Java, PHP, Javascript. Viết Restful APIs.
                                Framework: Express, NestJS, Spring Boot. Database: Postgres, MongoDB.
                            </p>
                        </div>
                        <div className="rightbox">{renderSkillBars(backendSkills)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
