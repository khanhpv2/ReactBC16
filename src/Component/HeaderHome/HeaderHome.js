import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Cybersoft
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/baitapform">
                React Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/hoc">
                Demo HOC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="font-weight-bold bg-white text-dark" className="nav-link" to="/antd">
                AntD
              </NavLink>
            </li>

           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                LifeCycle - Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/lifecycle">
                  LifeCycle
                </NavLink>
                <NavLink className="dropdown-item" to="/usestate">
                  Use state
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  Use Effect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  Use Callback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  Use Memo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  Use Ref
                </NavLink>
                <NavLink className="dropdown-item" to="/useredux">
                  Use Redux
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Api
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/apircc">
                  Demo Api react classs
                </NavLink>
                <NavLink className="dropdown-item" to="/apirfc">
                  Demo Api react funtion
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxapi">
                  Redux Api
                </NavLink>
                
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
