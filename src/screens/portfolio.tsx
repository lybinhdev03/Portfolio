import React from 'react'
import { Preloader } from '../components/preloader'
import { LeftPart } from '../components/leftpart'
import { RightPart } from '../components/rightpart'
import { MobileMenu } from '../components/mobile/menu'
import { FloatButton } from 'antd';

export const Portfolio = () => {

    const [showLeftPart, setShowLeftPart] = React.useState<boolean>(false);

    return (
        <div className="arlo_tm_wrapper_all">

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>

            {/* <!-- PRELOADER --> */}
            <Preloader />
            {/* <!-- /PRELOADER --> */}

            {/* <!-- MOBILE MENU --> */}
            <MobileMenu />
            {/* <!-- /MOBILE MENU --> */}

            {/* <!-- CONTENT --> */}
            <div className="arlo_tm_content">

                {/* <!-- LEFTPART --> */}
                <LeftPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart}
                />
                {/* <!-- /LEFTPART --> */}

                {/* <!-- RIGHTPART --> */}
                <RightPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart}
                />
                {/* <!-- /RIGHTPART --> */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop
                    tooltip={<div>Back to top</div>}
                />

            </div>
        </div>
    )
}
