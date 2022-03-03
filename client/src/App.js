import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/home'
import Edit from './pages/task/Edit';
import Create from './pages/task/Create';
import Show from './pages/task/Show';
import List from './pages/task/List';
const App = () => {
	return (
		<div>
			<BrowserRouter>
			<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route exact path='/task' component={List} />
				<Route path='/task/edit/:id' component={Edit} />
				<Route path='/task/create' component={Create} />
				<Route path='/task/show/:id' component={Show} />
			</BrowserRouter>
		</div>
		
	)
}

export default App
