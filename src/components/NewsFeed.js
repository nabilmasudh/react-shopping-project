import React from 'react';
import './NewsFeed.css';
import { newsfeeds } from '../data';

const NewsFeed = () => {
    return (
        <section className="news-feed-section">
        <div id="container">
            <div className="news-feed-center">
                {newsfeeds.map((item,index)=>{
                    const {title, image, news} = item;
                    return <div className='news-feed' key={index}>
                        <div className='title'>
                            <span>{title}</span>
                        </div>
                        <div className='news'>
                            <div className='news-img'>
                                <img src={image} alt="" />
                            </div>
                            <div className='news-text'>
                                <p>{news}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
    )
}

export default NewsFeed;