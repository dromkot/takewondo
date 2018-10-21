import React, {Component} from 'react';
import News__item from '../news/news__item'
import news1 from '../../img/home/news/news-1.png';

const News__text =({title,p1,p2,date})=>{
    return(
        <div className='news__info news__item'>
            <div className='news__info-title'>
                <a href=''>
                    {title}
                </a>
                <p>
                    {p1}
                </p>
                <p>
                    {p2}
                </p>
            </div>
            <div className='news__descrip-date'>
              <span>
                  <span>
                        {date}
                    </span>
              </span>
            </div>
        </div>
    )
};


const News__team =({text,date})=>{
    return(
        <div className='news__team'>
            <div className='news__team-info'>
                <div className='news__descrip news__team-descrip'>
                    <div className='news__descrip-title'>
                        <a href='' >
                            Team Korea’s ‘Super Rookie’ Battles <br/> into the Big League
                        </a>
                    </div>
                    <div className='news__descrip-text'>
                        <p>
                            {text}
                        </p>
                    </div>
                    <div className='news__descrip-date'>
                        <span>
                            {date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};
class Other extends Component{
    render(){
        return(
            <div className='other'>
                <div className='container'>
                    <div className='row row-flex'>
                        <div className='col-lg-6 col-md-8 '>
                            <News__team title={'Team Korea’s ‘Super Rookie’ Battles into the Big League'} text={'Jun Jang is a third-year high school student, he is the latest entrant to the most formidable squad in the game: Team Korea. According to those in the know.'} date={'10.08.2018'}/>
                        </div>
                        <div className='col-lg-3 col-md-4 other__block-mob'>
                            <News__item news__img1={news1} title={'World Taekwondo  Grand Prix 2018'} text={'The third day of the World Taekwondo Grand Prix competition in Taoyuan, Chinese Taipei, ended with gold medals for Thailand, Russia.'} date={'10.08.2018'}/>

                        </div>
                        <div className='col-lg-3 other__block-mob other__block-mob2'>
                            <News__text title={'Jun Jang: Team Korea’s ‘Super Rookie’ Battles into the Big League'}
                                        p1={'Jun Jang is a third-year high school student, he is the latest entrant to the most formidable squad in the game: Team Korea. According to those in the know.' }
                                        date={'10.08.2018'}
                                        p2={'He is the only serious challenger to fellow team-mate and three-time World Champion Tae Hun- Kim – and is already, thanks to victory in Moscow, a Grand Prix champion. On Saturday night, under the spotlights of the USK CSKA Bascetball Arena a Grand Prix On Saturday night, under the spotlights.'}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default  Other;