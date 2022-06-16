import React, { Component } from 'react'
import { MenuItemsLoggedOut,MenuItemsLoggedIn } from './MenuItems'
import {Button} from './Button'
import './Navbar.css'



class Navbar extends Component{
    state = {clicked: false }
    handleClick= ()=>{
        this.setState({clicked: !this.state.clicked})
    }

    user = localStorage.getItem('firstName')
    render(){
        return(
            <nav className='NavbarItems'>
                <a className='home-logo' href="/"><h1 className="navbar-logo">FOODPLAN.LIFE</h1></a>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}> 
                    { this.user ? MenuItemsLoggedIn.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                       )}): MenuItemsLoggedOut.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )})}
                </ul>
                
                {this.user?
                    <a href="/profile"><Button>Profile</Button></a>
                :<a href="/signup"><Button>Sign Up</Button></a>}
            </nav>
        )
    }
}
export default Navbar