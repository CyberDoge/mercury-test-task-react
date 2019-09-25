import React from 'react'
import logo from 'assets/img/Logo.svg'
import './header.css'
export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img alt="logo" className="header__logo" src={logo}/>
            </header>
        )
    }
}