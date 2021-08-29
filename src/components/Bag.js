import React from 'react'
import './Bag.css';
import {FaRegTrashAlt,FaMinus,FaPlus,FaTimes} from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Bag = () => {
    const {isSidebarOpen,closeSidebar,cart,total,amount,remove,increase,decrease} = useGlobalContext();
    return (
        <div className="cart-sidebar-center">
            <div className={`${isSidebarOpen ? 'cart-sidebar cart-sidebar-show' : 'cart-sidebar'}`}>
                <div className="cart-sidebar-inner">
                    <div className="sidebar-top">
                        <span onClick={closeSidebar}>
                            <FaTimes/>
                        </span>
                        <span>My Cart {amount}</span>
                    </div>
                    <div className="sidebar-middle">
                        {cart.map((item, index)=>{
                            const {id, carttitle, price, amount} = item;
                            return <div className='sidebar-middle-inner' key={index}>
                                <p>{carttitle}</p>
                                <div className='cart-amount'>
                                    <div><span>৳{price}</span>X<span>{amount}</span> </div>
                                    <button onClick={()=>remove(id)}><FaRegTrashAlt/></button>
                                </div>
                                <div className='cart-quantitiy'>
                                    <button onClick={()=>decrease(id)}>
                                        <FaMinus/>
                                    </button>
                                    <span>{amount}</span>
                                    <button onClick={()=>increase(id)}>
                                        <FaPlus/>
                                    </button>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="sidebar-bottom">
                        <div className="cart-Total">
                            <span>Total</span>
                            <span>৳{total}</span>
                        </div>
                        <button><Link to='signup'>Proceed to checkout</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag;