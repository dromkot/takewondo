import React, {Component} from 'react';
import Nav__menu from '../Header/header__nav'
import inst from '../../img/home/footer/inst.svg';
import fc from '../../img/home/footer/fc.svg';
import youtube from '../../img/home/footer/youtube.svg';


const Footer__info =()=>{
  return(
      <div className='footer__info'>
          <p>
              Федерация Тхэквондо Липецк © 2014 Все права защищены
          </p>
          <p>
              Липецкая обл., Добринский р-н, ул. Ленинская, 4
          </p>
          <p>
              <a href="tel:8-920-516-31-10">
                  Тел. 8-920-516-31-10
              </a>
          </p>
          <p>
              <a href="mailto:wtf-lip@yandex.ru">
                  wtf-lip@yandex.ru
              </a>
          </p>
      </div>
  )
};
const Footer__icons1 = ({img1,img2,img3}) =>{
    return(
        <div className='footer__icons'>
            <div className='header__icon header__icons-youtube'>
                <a href="/">
                    <img src={img1} alt="youtube"/>
                </a>
            </div>
            <div className='header__icon header__icons-fc'>
                <a href="/">
                    <img src={img2} alt="facebook"/>
                </a>
            </div>

            <div className='header__icon header__icons-vk'>
                <a href="/">
                    <img src={img3} alt="vk"/>
                </a>
            </div>
        </div>
    )
};

class Footer extends Component{
    render(){
        return(
            <div className='container'>
                <div className='footer'>
                    <Nav__menu/>
                    <div className='footer__info-wrap'>
                        <Footer__info/>
                        <Footer__info/>
                    </div>
                    <Footer__icons1 img1={inst} img2={fc} img3={youtube}/>
                </div>
            </div>

        )
    }
}

export default  Footer;