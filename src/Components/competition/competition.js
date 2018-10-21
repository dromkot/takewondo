import React, {Component} from 'react';
import img1 from '../../img/home/competition/item1.png';
import img2 from '../../img/home/competition/item2.png';
import img3 from '../../img/home/competition/item3.png';

const Competition__item =({competition__img,date,link1,link2})=>{
    return(
        <div className='competition__item'>
            <div className='competition__item-img'>
                <a href="">
                    <img src={competition__img} alt="img"/>
                    <div className='competition__date'>
                        <span>
                            {date}
                        </span>
                    </div>
                </a>
            </div>
            <div className='competition__descrip'>
                <div className='competition__descrip-link'>
                    <a href='' >
                        {link1}
                    </a>
                </div>
                <div className='competition__descrip-link'>
                    <a href='' >
                        {link2}
                    </a>
                </div>

            </div>
        </div>
    )
};

class Competition extends Component{
    render(){
        return(
            <div className='competition'>
                <div className='container'>
                    <div className='block__title'>
                        <a href="#">
                            Competition
                        </a>
                    </div>
                    <div className='row row-flex'>
                        <div className='col-xl-3 col-lg-4 col-6 '>
                            <Competition__item competition__img={img1} date={'24-26 Sep 2018'} link1={'Taoyuan 2018 World '} link2='Taekwondo Grand-Prix'/>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-6'>
                            <Competition__item competition__img={img2} date={'24-26 Sep 2018'} link1={'USA 2018 World '} link2='Taekwondo Grand-Prix'/>
                        </div>
                        <div className='col-xl-6 col-lg-4 col-6 competetion__item-mob'>
                            <Competition__item competition__img={img3} date={'24-26 Sep 2018'} link1={'Taoyuan 2018 World Taekwondo GP Day 2'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Competition;