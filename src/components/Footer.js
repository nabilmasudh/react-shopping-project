import React from 'react'
import './Footer.css'
import {AiOutlineCopyright} from 'react-icons/ai'
const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div id="container">
                    <div className="footer-center">
                        <AiOutlineCopyright/>
                        <p>copy 2021 Bazar.com. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;
