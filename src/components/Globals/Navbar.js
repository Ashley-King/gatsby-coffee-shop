import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.svg'
import {FaCartArrowDown} from 'react-icons/fa'



 //navbar classes
 const openNav = "collapse navbar-collapse show"
 const closedNav = "collapse navbar-collapse"

export default class Navbar extends Component {

 state = {
  navbarOpen: false,
  css: closedNav,
  links:[
   {
    id: 1,
    path: '/',
    text: 'Home'
   },
   {
    id: 2,
    path: '/about/',
    text: 'About'
   },
  ],
  
 } 

 navbarHandler = () => {
    this.state.navbarOpen ? this.setState({navbarOpen: false, css:closedNav}) : this.setState({navbarOpen: true, css: openNav})
 }
 
 render() {
    return (
      <nav className='navbar navbar-expand-sm bg-light navbar-light'>
         <Link to='/' className='navbar-brand'>
          <img src={logo} alt="coffee cup"/>
          {/*  https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys  */}
         </Link>
         <button className="navbar-toggler" type='button' onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon"></span>
         </button>
         <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {
             this.state.links.map((link) =>{
              return(
               <li key={link.id} className='nav-item'>
                <Link to={link.path} className='nav-link text-capitalize'>
                 {link.text}
                </Link>
               </li>
              )
             })
            }
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className='cart-icon'/>
            </li>
          </ul>
         </div>
      </nav>
    )
  }
}