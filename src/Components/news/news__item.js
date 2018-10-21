import React, {Component} from 'react';
const News__item =({news__img1,title,text,date})=>{

    return(
        <div className='news__item'>
            <div className='news__item-img'>
                <a href="">
                    <img src={news__img1} alt="img"/>
                </a>
            </div>
            <div className='news__descrip'>
                <div className='news__descrip-title'>
                    <a href='' >
                        {title}
                    </a>
                </div>
                <div className='news__descrip-text'>
                    <p>
                        {text}
                    </p>
                    <div className='study__img-mob'>
                        <img src={news__img1} alt=""/>
                    </div>
                </div>
                <div className='news__descrip-date'>
                    <span>
                        {date}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default News__item;