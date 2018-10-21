import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import '../node_modules/slick-carousel/slick/slick.css'
import './App.css';
import Header from './Components/Header/header';
import News from './Components/news/news';
import Competition from './Components/competition/competition';
import Study from './Components/study/study';
import Other from './Components/other/other';
import Brands from './Components/brands/brands';
import Footer from './Components/footer/footer';
import Slider from './Components/slider/slider';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='header__fixed'>
              <div className='container'>
                  <header className="App-header">
                      <Header/>
                  </header>
              </div>
          </div>

          <div className='slider__block'>
              <Slider/>
          </div>
        <main>
          <News/>
            <Competition/>
            <Study/>
            <Other/>
            <Brands/>
        </main>
          <footer>
              <Footer/>
          </footer>
      </div>
    );
  }
}

export default App;
