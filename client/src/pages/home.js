import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
const Home = () => {
	

	return (
		<div className="navbar-start">
            <h3><NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home1
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
            </NavLink></h3>
    </div>
	)
}

export default Home
