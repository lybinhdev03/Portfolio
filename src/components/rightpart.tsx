import React from 'react'
import { HomeCV } from './content/homecv'
import { About } from '../components/content/about'
import { Skill } from '../components/content/skill'
import { Project } from './content/project'
import { Contact } from './content/contact'

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}

export const RightPart = (props: IProps) => {
    return (
        <>
            <div className={props.showLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
                <div className="rightpart_inner">
                    <HomeCV />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skill />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- Projects --> */}
                    <Project />
                    {/* <!-- /Projects --> */}

                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}

                </div>
            </div>
        </>
    )
}
