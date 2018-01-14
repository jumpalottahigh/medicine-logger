import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          <h4>@jumpalottahigh</h4>
          <Link to="/">
            <h2>Medicine Logger</h2>
          </Link>
        </div>
        <span role="img" aria-label="pill and clock emoji" className="logo">
          💊⏰
        </span>
      </header>
    )
  }
}

export default Header
