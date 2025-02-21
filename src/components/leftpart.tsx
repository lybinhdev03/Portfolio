import React, { useEffect, useState } from 'react';
import desktoplogo from '../assets/img/logo/desktop-logo.png';

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}

export const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>("home");

    // Xử lý lưu tab sau khi reload
    useEffect(() => {
        const hash = window.location.hash; // Lấy phần hash từ URL

        if (hash) {
            const tab = hash.replace('#', ""); // Xóa dấu #
            setActiveTab(tab);
            const section = document.getElementById(tab);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    // Xử lý click tab
    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActiveTab(tab);
        const section = document.getElementById(tab);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Cập nhật URL mà không làm reload trang
        window.history.pushState(null, "", `#${tab}`);
    };

    return (
        <div className={props.showLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={desktoplogo} alt="desktop-logo" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        {["home", "about", "skills", "projects", "contact"].map((tab) => (
                            <li key={tab}>
                                <a href={`#${tab}`}
                                    className={activeTab === tab ? "active" : ""}
                                    onClick={(event) => handleClickTab(tab, event)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100040954911335"><i className="xcon-facebook"></i></a></li>
                            <li><a href="#"><i className="xcon-twitter"></i></a></li>
                            <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                            <li><a href="#"><i className="xcon-instagram"></i></a></li>
                            <li><a href="#"><i className="xcon-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
                <a className={props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                    onClick={(e) =>
                        //e.preventDefault();
                        props.setShowLeftPart(!props.showLeftPart)
                    }
                    href="#">
                    <i className={props.showLeftPart ? "xcon-angle-right opened" : "xcon-angle-left"}></i>
                </a>
            </div>
        </div >
    );
};
