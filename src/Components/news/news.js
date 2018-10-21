import React, {Component} from 'react';
import news1 from '../../img/home/news/news-1.png';
import news2 from '../../img/home/news/news-2.png';
import News__item from './news__item'

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


class News extends Component{
    render(){
        return(
            <div className='news'>
                <div className='container'>
                    <div className='block__title'>
                        <a href="#">
                            News
                        </a>
                    </div>
                    <div className='row row-flex'>
                        <div className='col-xl-3 col-6 order-xl-1 order-2'>
                            <News__item date={'10.08.2018'} title={'World Taekwondo Grand Prix 2018'} news__img1={news1} text={'The third day of the World Taekwondo Grand Prix competition in Taoyuan, Chinese Taipei, ended with gold medals for Thailand, Russia.'}/>
                        </div>
                        <div className='col-xl-6 col-12 order-xl-2 order-1'>
                            <News__item date={'10.08.2018'} title={'The Martial Art of Cognitive Training'} news__img1={news2} text={'Taekwondo is a Korean martial art that has grown in popularity, especially among children who are learning how to move their bodies and engage in sports for the first time.'}/>
                        </div>
                        <div className='col-xl-3 col-6 order-xl-3 order-3'>
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

export default News;
