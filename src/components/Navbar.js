import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import {FaRegUser,FaRegBell,FaRegEnvelope} from 'react-icons/fa'
import {FaBars, FaAngleDown} from 'react-icons/fa'
import {FiShoppingBag} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'
import SignIn from './SignIn'
import { header } from '../data'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'



const Navbar = () => {
    const {openSidebar,openSignIn,closeSignIn,amount} = useGlobalContext();

    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else{
            linksContainerRef.current.style.height = '0px'
        }
    })

    const handleSIgnIn = (e) =>{
        if(!e.target.classList.contains('header-icon-menu')){
            closeSignIn()
        }
    }
    return (
        <div className='header-an-nav'>
            <header className='header-section'>
                <div id='container'>
                    {header.map((item, index)=>{
                        const {logo} = item;
                        return <div className='header-center' key={index}>
                            <div className='header-logo'>
                                <Link to='/'>{logo}</Link>
                            </div>
                            <div className='header-search'>
                                <input type="text" placeholder="Search Here"/>
                                <button>
                                    <AiOutlineSearch/>
                                </button>
                            </div>
                            <div className='header-icon-menu'>
                                <div className="header-icon" onClick={openSignIn}>
                                    <SignIn/>
                                    <FaRegUser/>
                                </div>
                                <div className="header-icon">
                                    <FaRegBell/>
                                </div>
                                <Link to='message'>
                                <div className="header-icon">
                                    <FaRegEnvelope/>
                                </div>
                                </Link>
                                <div onClick={openSidebar} className="header-icon">
                                    <span className='nav-amount'>{amount}</span>
                                    <FiShoppingBag/>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </header>
            <nav className='nav-section' onMouseOver={handleSIgnIn}>
                <div id='container'>
                    <div className='nav-center'>
                        <div className='nav-left'>
                            <div className='nav-left-menu'>
                                <p>CATEGORIES</p>
                                <button><FaAngleDown/></button>
                            </div>
                            <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
                                <FaBars/>
                            </button>
                        </div>
                        <div className='nav-right' ref={linksContainerRef}>
                            <div className='nav-right-inner' ref={linksRef}>
                                <div className='nav-rigth-one' >
                                    <li><Link to='/allshop'>All Shops</Link></li>
                                    <li><Link to='#'>Gift Card</Link></li>
                                    <li><Link to='#'>Campaigns</Link></li>
                                    <li><Link to='#'>Top-up</Link></li>
                                    <li><Link to='#'>Express</Link></li>
                                </div>
                                <div className='nav-rigth-two'>
                                    <li><Link to='/newsfeed'>News Feed</Link></li>
                                    <li><Link to='#'>Merchant Zone</Link></li>
                                    <li><Link to='#'>Help</Link></li>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
