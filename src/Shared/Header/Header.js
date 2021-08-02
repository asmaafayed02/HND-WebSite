import React, { Component } from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  
  // changing the navbar back ground color when scrolling
  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll);
  }
  handleScroll(){
    let element = document.getElementById("main-navbar");
    if(window.pageYOffset > document.querySelector('#main-navbar').scrollHeight){
      // element.classList.remove('navbar-trans')
      element.classList.add('fixed-scroll');

    }else if(element.classList.contains('fixed-scroll')){
      element.classList.remove('fixed-scroll');
      // element.classList.add('navbar-trans')

    }
  }
  render() {
    return (
      <div>
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-dark navbar-trans ">
          <div className='container-fluid '>
          <Link to="/" className="navbar-brand">
              <img
                src={logo}
                alt="MSP logo"
                className="img-fluid"
                width="150px"
              />
            
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="justify-content-end navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                    About
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                    Events
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/best-members" className="nav-link">
                    Best Members
                  
                </Link>
              </li>
            </ul>
            {/* Search field and buttom in case we needed it  */}
           
          </div>
          </div>
        
        </nav>
      </div>
    );
  }
}

export default Header;
