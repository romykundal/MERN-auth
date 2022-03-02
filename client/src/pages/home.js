import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
const Home = () => {
	

	return (
		<div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>
			| 
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/login"
            >
              Login
            </NavLink>
 				| 
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/register"
            >
              Sign up
            </NavLink>
          </div>
	)
}

export default Home
