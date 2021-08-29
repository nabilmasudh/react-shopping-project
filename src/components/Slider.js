import React, { useState, useEffect } from 'react'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Slider.css'
import { sliderLeft, sliderMune, sliderRight } from '../data'
import { useGlobalContext } from '../context'



const Slider = () => {
    const {closeSignIn} = useGlobalContext();
    const [slider, setSlider] = useState(sliderMune)
    const [index, setIndex] = useState(0);

        useEffect(()=>{
            const lastIndex = slider.length - 1;
            if(index < 0){
                setIndex(lastIndex);
            }
            if(index > lastIndex){
                setIndex(0);
            }
        },[index, slider])
        useEffect(()=>{
            let slider = setInterval(()=>{
                setIndex(index+1)
            },3000)
            return ()=> clearInterval(slider)
        },[index])

    return (
        <section className='slider-section' onMouseOver={closeSignIn}>
            <div id='container'>
                <div className='slider-center'>
                    {sliderLeft.map((item, index)=>{
                        const {links, page} = item;
                        return <div className='slider-left' key={index}>
                            <div className='home-product-title'>
                                <p>{page}</p>
                            </div>
                            {links.map((link, index)=>{
                                const {circle, product, icon} = link;
                                return <div className='home-product' key={index}>
                                    <div className='product-name'>
                                        <span>{circle}</span>
                                        <Link to='#'>{product}</Link>
                                    </div>
                                    <div className="product-icon">{icon}</div>
                                </div>
                            })}
                        </div>
                    })}
                    <div className='slider-menu'>
                        {sliderMune.map((item, itemIndex)=>{
                            const {id, name, image} = item;
                            let position = 'nextSlide';
                            if(itemIndex === index){
                                position = 'activeSlide';
                            }
                            if(itemIndex === index - 1 || (index === 0 && itemIndex === slider.length-1)){
                                position = 'lastSlide';
                            }
                            return <article className={position} key={id}>
                                <img src={image} alt={name}/>
                            </article>
                        })}
                        <button className='prev'onClick={()=>setIndex(index-1)}>
                            <FiChevronLeft/>
                        </button>
                        <button className='next' onClick={()=> setIndex(index+1)}>
                            <FiChevronRight/>
                        </button>
                    </div>
                    {sliderRight.map((item, index)=>{
                        const {links, page} = item;
                        return <div className='slider-right' key={index}>
                            <div className='offer-product-title'>
                                <p>{page}</p>
                            </div>
                            {links.map((item, index)=>{
                                const {title, info, image} = item;
                                return <div className='home-offer-product' key={index}>
                                    <p>{title}</p>
                                    <div className='offer-product'>
                                        <Link to='#'>{info}</Link>
                                        <img src={image} alt=''/>
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Slider
