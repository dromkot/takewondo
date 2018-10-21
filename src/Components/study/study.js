import React, {Component} from 'react';
import study1 from '../../img/home/study/study-1.png';
import study2 from '../../img/home/study/study-2.png';
import study3 from '../../img/home/study/study-3.png';
import News__item  from '../news/news__item'


class Study extends Component{
    render(){
        return(
            <div className='study'>
                <div className='container'>
                    <div className='block__title'>
                        <a href="#">
                            Study
                        </a>
                    </div>
                    <div className='row row-flex'>
                        <div className='col-xl-6 study__block-mob'>
                            <News__item news__img1={study1} title={' Effects of taekwondo intervention on cognitive function and academic self-efficacy in children'}
                                        text={'If you would rather triumph within this sector, afterward follow the 3 helpful ideas in this short article. The following ideas may'}
                                        date={'10.08.2018'}/>
                        </div>
                        <div className='col-xl-6 '>
                            <div className='study__right'>
                                <News__item  news__img1={study2} title={'Foster is Lyme disease dread’ I can nolonger study, produce or view Television’'}
                                             text={'If you would rather triumph within this sector, afterward follow the 3 helpful ideas in this short article. The following ideas may'}
                                             date={'10.08.2018'}/>
                                <News__item news__img1={study3} title={'Foster is Lyme disease dread’ I can nolonger study, produce or view Television’'}
                                            text={'If you would rather triumph within this sector, afterward follow the 3 helpful ideas in this short article. The following ideas may'}
                                            date={'10.08.2018'}/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Study;