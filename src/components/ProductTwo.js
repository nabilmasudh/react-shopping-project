import React from 'react'
import './ProductTwo.css'
import { productsTwo } from '../data';
import { Link } from 'react-router-dom';

const ProductTwo = () => {
    return (
        <section className='cartTwo-section'>
            {productsTwo.map((item, index)=>{
                const {outoftitle, carttwo} = item;
                return <div id='container' key={index}>
                    <div className='out-of-title'>
                        <span>{outoftitle}</span>
                    </div>
                    <div className='cartTwo-center'>
                        {carttwo.map((item, index)=>{
                            const {id,image, price, title, rating,ratingicon} = item;
                            return <div className='cartTwo' key={index}>
                                <div className='cartTwo-img'>
                                    <Link to={`/detailtwo/${id}`}><img src={image} alt=''/></Link>
                                </div>
                                <div className='cartTwo-info'>
                                    <p>{title}</p>
                                    <div className='cartTwo-rating'>
                                        {Array(rating).fill().map((_,i)=>(
                                            <p key={i}>{ratingicon}</p>
                                        ))}
                                    </div>
                                    <span>৳ {price}</span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </section>
    )
}

export default ProductTwo
