import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>Home
        <NavLink to={'/detail/123?keyword=abc'}>
          Link Demo
        </NavLink>
      </div>
    )
  }
}
