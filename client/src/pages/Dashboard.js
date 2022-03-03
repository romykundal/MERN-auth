import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { NavLink } from "react-router-dom";


const Dashboard = () => {
	

	return (
		<div>			
			
			<h1>Welcome to dashboard </h1>
			
			
			<NavLink className="btn btn-primary" activeClassName="is-active" to="/task">
              Tasks Module
            </NavLink>


		</div>
	)
}

export default Dashboard
