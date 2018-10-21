import React, {Component} from 'react';
import brand__1 from '../../img/home/brands/brand-1.svg'
import brand__2 from '../../img/home/brands/brand-2.svg'
import brand__3 from '../../img/home/brands/brand-3.svg'
import brand__4 from '../../img/home/brands/brand-4.svg'


class Brands extends Component{
    render(){
        return(
            <div className='brands'>
                <ul className='brands__list'>
                    <li>
                        <a href="#">
                            <img src={brand__1} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__2} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__3} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__4} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__1} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__2} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__3} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__4} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__1} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__2} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__3} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={brand__4} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Brands;