import React, {Component} from 'react';
import logo from '../../img/home/index/logo.svg';
import logo__mob from '../../img/home/index/logo__mob.svg';
import facebook from '../../img/home/index/fc.svg';
import youtube from '../../img/home/index/youtube.svg';
import vk from '../../img/home/index/vk.svg';
import facebook__mob from '../../img/home/index/fc__mobile.svg';
import youtube__mob from '../../img/home/index/youtube__mobile.svg';
import vk__mob from '../../img/home/index/vk__mobile.svg';
import search from '../../img/home/index/search.svg';
import search__mob from '../../img/home/index/search__movile.svg';
import burger__icon from '../../img/home/index/burger__icon.svg';


const Logo =()=> {
        return (
            <div className='header__logo'>
                <a href="#" className='header__logo-desktop'>
                    <img src={logo} alt="logo"/>
                </a>
                <a href="#" className='header__logo-mobile'>
                    <img src={logo__mob} alt="logo"/>
                </a>
            </div>
        )
}

const Header__icons =()=>{
        return (
            <div className='header__icons-wrap'>
                <Header__icons1 img1={facebook} img2={youtube} img3={vk}/>
                <Header__language/>
            </div>
        )
};


const Header__language=()=>{
        return(
            <div className="header__language">
                <a href="/">
                    Eng
                </a>
            </div>
        )
};
const Header__icons1 = ({img1,img2,img3}) =>{
        return(
            <div className='header__icons'>
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
const Header__openInp =({search__icon})=> {
    return (
        <div className='header__open'>
            <div className='header__open-search'>
                <form action="#">
                    <input type="text"/>
                    <img src={search__icon} alt="search"/>
                </form>

            </div>
        </div>
    )
};
function burg() {
    document.getElementById('header__nav').style.display = 'block';
    document.getElementById('burg__btn').style.display = 'none';
    document.getElementById('body').classList.add("overlay");
}
function exit__menu () {
    document.getElementById('body').classList.remove("overlay");
    document.getElementById('burg__btn').style.display = 'block';
    document.getElementById('header__nav').style.display = 'none';
}
const Header__open =()=> {
        return (
            <div className='header__open-wrap'>
                <Header__openInp search__icon={search}/>
                <Header__openLink/>

            </div>
        )
};

const Header__openLink =()=> {
        return (
            <div className='header__open'>

                <div className="header__open-btn">
                    <a href="/">
                        Вход
                    </a>
                </div>
            </div>
        )
};

class Header__nav extends Component{
    render(){
        return(
            <div  className='header__nav-wrap' id='header__nav'>
                <nav  className='header__nav header__nav-js'>
                    <ul className='mobile_top'>
                        <li>
                            <Header__language/>
                        </li>
                        <li>
                            <Header__openInp search__icon={search__mob}/>
                        </li>
                    </ul>
                    <ul className='header__nav-link'>
                        <li>
                            <a href="#">
                                Главная
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Новости
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Календарь
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Турниры
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Персоны
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Асоциация
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Клубы
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Правила
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Медицина
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Питание
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Мультимедия
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Партнеры
                            </a>
                        </li>
                    </ul>
                    <ul className='mobile__bottom'>
                        <li>
                            <Header__openLink/>
                        </li>
                        <li>

                            <Header__icons1  img1={youtube__mob} img2={facebook__mob} img3={vk__mob}/>
                        </li>
                    </ul>
                </nav>

                <div id='close__icon' onClick={exit__menu}>
                    <i className="fas fa-times">

                    </i>
                </div>
            </div>
        )
    }
}
class Burg__icon extends  Component{
    render(){
        return(
        <div id='burg__btn' className='burg__btn' onClick={burg}>
            <img src={burger__icon} alt=""/>
        </div>
        )
    }
}
class Header__top extends Component{
    render(){
        return(
            <div className='header__top'>
                <Burg__icon/>
                <Header__icons/>
                <Logo/>
                <Header__open/>
            </div>
        )
    }
}
class Header extends Component{
    render(){
        return(
            <div className='header__wrap'>
                <Header__top/>
                <Header__nav/>
            </div>
        )
    }
}

export default Header;