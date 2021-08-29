import React from 'react'
import './DetailTwo.css'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context'
import { productsTwo } from '../data';


const DetailTwo = () => {
    const {id} = useParams();
    const {addToCart, closeSignIn, openSidebar} = useGlobalContext();
    return (
        <>
        {productsTwo.map((items, index)=>{
            const {carttwo} = items;
            return <div key={index}>
                {carttwo.filter((cart)=> cart.id === parseInt(id)).map((item,index)=>{
                const {image,title,price,priceinfo,bag,bagtext,code,brand,number,more,checktext,Warranty,icon,Authentic,infoOne,infoTwo,info1,info2,info3,info4,info5,outsidetext,carttitle,stock,rating,ratingicon} = item;
                return <div key={index}>
                        <section className='review-section' onMouseOver={closeSignIn}>
                            <div id="container">
                                <div className='review-center'>
                                        <div className="review-left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className='review-middle'>
                                            <strong>{title}</strong>
                                            <small>{code}</small>
                                            <small>{brand}<Link to='#'>{number}</Link> | <Link to='#'>{more}</Link></small>
                                            <span>৳{price}</span>
                                            <p>{priceinfo}</p>
                                            <button>{checktext}</button>
                                        </div>
                                        <div className='review-right'>
                                            <span>{Warranty}</span>
                                            <span>{icon}{' '}{Authentic}</span>
                                        </div>
                                </div>
                            </div>
                        </section>
                        <section className='product-details'>
                        <div id='container'>
                            <div className='details-center'>
                                <div className='details-title'>
                                    <strong>{title}</strong>
                                </div>
                                <div className='details-feature'>
                                    <p>{infoOne}</p>
                                    <p>{infoTwo}</p>
                                </div>
                                <div className='details-info'>
                                    <div className='info'>
                                        <span>Product Type</span>
                                        <p>{info1}</p>
                                    </div>
                                    <div className='info'>
                                        <span>Main Material</span>
                                        <p>{info2}</p>
                                    </div>
                                    <div className='info'>
                                        <span>Size</span>
                                        <p>{info3}</p>
                                    </div>
                                    <div className='info'>
                                        <span>Country of Origin :</span>
                                        <p>{info4}</p>
                                    </div>
                                    <div className='info'>
                                        <span>Gender</span>
                                        <p>{info5}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='product-available-section'>
                        <div id='container'>
                            <div className='availabel-center'>
                                <div className='available-title'>
                                    <span>{outsidetext}</span>
                                </div>
                                <div className='avilable-cart'>
                                    <div className='available-cart-img'>
                                        <img src={image} alt="" />
                                    </div>
                                    <div className='available-cart-info'>
                                        <span>{carttitle}</span>
                                        <p>{stock}</p>
                                    </div>
                                    <div className='available-cart-icon'>
                                        {Array(rating).fill().map((_,i)=>(
                                            <p key={i}>{ratingicon}</p>
                                        ))}
                                    </div>
                                    <div className='available-cart-basket' onClick={openSidebar}>
                                        <span>৳{price}</span>
                                        <button onClick={()=>addToCart(item)}>{bag}{' '}{bagtext}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            })}
            </div>
        })}
        </>
    )
}

export default DetailTwo
