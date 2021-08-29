import React  from 'react'
import './Product.css'
import { FaStar } from "react-icons/fa";
import { productsOne } from '../data'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';


const Product = () => {
    const {addToCart, openSidebar} = useGlobalContext()
    return (
        <section className='cart-one-section'>
            <div id='container'>
                <div className='cart-one-center'>
                    {productsOne.map((item)=>{
                        const {id, image, title, price, bag, bagtext} = item;
                        return <div className='cart-one' key={item.id}>
                            <div className='cart-one-image'>
                                <Link to={`/detailone/${id}`}>
                                    <img src={image} alt=''/>
                                </Link>
                            </div>
                            <div className='cart-one-info'>
                                <p>{title}</p>
                                <span>৳ {price}</span>
                                <div className='cart-one-rating'>
                                    {Array(5).fill().map((_,i)=>(
                                        <p key={i}><FaStar/></p>
                                    ))}
                                </div>
                                <div className='add-to-cart'onClick={openSidebar}>
                                    <button onClick={()=>addToCart(item)}>{bag}{' '}{bagtext}</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Product
