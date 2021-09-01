import React from 'react';
import './NewsFeed.css';
import {AiOutlineLike, AiOutlineHeart, AiOutlineMessage} from 'react-icons/ai'

import { newsFeeds } from '../data';

const NewsFeed = () => {
    return (
        <section className="news-feed-section">
        <div id="container">
                {newsFeeds.map((item, index)=>{
                    const {items, news} = item;
                    return <div className='news-feed-center' key={index}>
                            {items.map((item, index)=>{
                                const {all, announcement, daylinews} = item;
                                return <div className='news-left' key={index}>
                                    <div className='news-left-items'>
                                        <span>{all}</span>
                                    <span>{announcement}</span>
                                    <span>{daylinews}</span>
                                    </div>
                                </div>
                            })}
                            <div className='news-menu'>
                                {news.map((item, index)=>{
                                    const {image, title, news} = item;
                                    return <div className='news' key={index}>
                                        <h3>{title}</h3>
                                        <div className='news-image'>
                                            <img src={image} alt=''/>
                                        </div>
                                        <p>{news}</p>
                                        <div className='news-feedback'>
                                            <div className='feedback-items'>
                                                <AiOutlineLike/>
                                                <span>22k</span>
                                            </div>
                                            <div className='feedback-items'>
                                                <AiOutlineHeart/>
                                                <span>2.4k</span>
                                            </div>
                                            <div className='feedback-items'>
                                                <AiOutlineMessage/>
                                                <span>3.1k</span>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                    </div>
                })}
        </div>
    </section>
    )
}

export default NewsFeed;