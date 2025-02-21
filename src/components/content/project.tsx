import React, { useState } from 'react';
import { Button, Descriptions, Modal } from 'antd';
import { title } from 'process';
import { IoLogoReact } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TbBrandShopee } from "react-icons/tb";
import { SiZalo } from "react-icons/si";
export const Project = () => {

    const dataProjects = [
        {
            image: <IoLogoReact size={50} color={"#2bebfd"} />,
            title: "Clone TikTok",
            shortDescription: "A TikTok clone project that mimics core TikTok features such as video uploading.",
            detail: {
                description: "A full-stack TikTok clone built with ReactJS and Spring Boot.",
                frontend: "ReactJS",
                backend: "Spring Boot",
                member: "Team of developers",
                role: "Full-stack Developer",
                demo: "Link to live demo (if available)",
                github: "Link to GitHub repository (if available)"
            }
        },
        {
            image: <FaFacebook size={50} color={"#2bebfd"} />,
            title: "Clone Facebook",
            shortDescription: "A social media platform similar to Facebook with features like posts, comments, and user authentication.",
            detail: {
                description: "A Facebook clone with post interactions, messaging, and friend connections.",
                frontend: "ReactJS",
                backend: "Node.js, MongoDB",
                member: "Team of developers",
                role: "Full-stack Developer",
                demo: "Link to live demo (if available)",
                github: "Link to GitHub repository (if available)"
            }
        },
        {
            image: <FaYoutube size={50} color={"#2bebfd"} />,
            title: "Clone YouTube",
            shortDescription: "A video streaming platform similar to YouTube with video uploads, likes, and comments.",
            detail: {
                description: "A YouTube clone with video hosting, recommendations, and user subscriptions.",
                frontend: "ReactJS",
                backend: "Firebase, Node.js",
                member: "Team of developers",
                role: "Frontend Developer",
                demo: "Link to live demo (if available)",
                github: "Link to GitHub repository (if available)"
            }
        },
        {
            image: <CiTwitter size={50} color={"#2bebfd"} />,
            title: "Clone Twitter",
            shortDescription: "A microblogging platform like Twitter, enabling users to post short messages and interact with others.",
            detail: {
                description: "A Twitter clone with real-time tweets, likes, and follows.",
                frontend: "Next.js",
                backend: "Express.js, PostgreSQL",
                member: "Team of developers",
                role: "Backend Developer",
                demo: "Link to live demo (if available)",
                github: "Link to GitHub repository (if available)"
            }
        },
        {
            image: <TbBrandShopee size={50} color={"#2bebfd"} />,
            title: "Clone Shopee",
            shortDescription: "An e-commerce platform like Shopee with product listings, a shopping cart, and secure checkout.",
            detail: {
                description: "A Shopee-inspired e-commerce website with payment integration and order tracking.",
                frontend: "Vue.js",
                backend: "Spring Boot, MySQL",
                member: "Team of developers",
                role: "Full-stack Developer",
                demo: "Link to live demo (if available)",
                github: "Link to GitHub repository (if available)"
            }
        },
        {
            image: <SiZalo size={50} color={"#2bebfd"} />,
            title: "Clone Zalo",
            shortDescription: "A messaging app similar to Zalo, offering chat, voice calls, and group interactions.",
            detail: {
                description: "A real-time messaging app with WebSocket-based chat and multimedia sharing.",
                frontend: "React Native",
                backend: "Firebase, Node.js",
                member: "Team of developers",
                role: "Mobile Developer",
                demo: "Link to live demo (if available)",
                github: "Link to GitHub repository (if available)"
            }
        }
    ];



    return (
        <>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Projects</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

