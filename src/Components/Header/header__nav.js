import React, {Component} from "react";

class Nav__Menu extends Component{
    render(){
        return(
            <nav  className='header__nav header__nav-js'>
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
            </nav>
        )
    }
}

export default Nav__Menu;