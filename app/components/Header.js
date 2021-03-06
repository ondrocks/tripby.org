import React from 'react'
import logo from '../assets/img/logos/logo.svg'
import classNames from 'classnames'
import Hamburger from './Hamburger'
import Navigation from './Navigation'
import {Link} from 'react-router'

class Header extends React.Component{
  constructor() {
    super()
    this.handleNav = this.handleNav.bind(this)
    this.state = {
      navOpened: false
    }
  }
  handleNav() {
    this.setState({
      navOpened: !this.state.navOpened
    })
  }
  render () {
    return (
      <header className="header">
        <div className="container">
          <div className="row flex-wrap align-items-center">
            <div className="col-4 col-sm-4 hidden-md-up d-flex align-items-center">
              <Hamburger onClick={this.handleNav} navOpened={this.state.navOpened} />
            </div>
            <div className="col-4 col-sm-4 col-md-2">
              <Link to="/"><img src={logo} className="logo" /></Link>
            </div>
            <div className={"col-12 col-sm-12 col-md-10 d-flex justify-content-end " + (this.state.navOpened ? '' : 'hidden-md-down') }>
              <Navigation navOpened={this.state.navOpened} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
