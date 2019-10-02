import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Who from './Who/Who';
import What from './What/What';
import Header from './Header/Header';
import Pie from './Pie/Pie';


class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     isTop: true
   };
   this.onScroll = this.onScroll.bind(this);
 }

//Teaching computer how to detect scroll
 componentDidMount() {
   document.addEventListener('scroll', () => {
     const isTop = window.scrollY < 100;
     if (isTop !== this.state.isTop) {
       this.onScroll(isTop);
       console.log('Scrolling!');
     }

   });
 }

//Passing isTop logic into the onScroll function so it knows what isTop means
 onScroll(isTop) {
   this.setState({ isTop });

//Because onScroll is powered by isTop, which is only listening for a scroll,
//tell the comp to add a class at the same time since we need the class to change on scroll.
   const wrapper = document.getElementById('wrapper');
   wrapper.classList.toggle('is-nav-scroll');
 }

  render() {
    return (
      <div>
        <Header
        onScroll={() => this.onScroll()}
        />
        <Home
         />
        <Who />
        <What />
      </div>
    );
  }
}

export default App;
