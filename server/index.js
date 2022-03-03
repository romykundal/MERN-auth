const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model');
const Task = require('./models/task.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const secretID = "auth3334";

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://romykundal:romykundal3334@cluster0.otrsi.mongodb.net/task1?retryWrites=true&w=majority')

/**
 * Route and functional for register user into user-data collection
 * Params:name, email, password
 */
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})
/**
 * Route and functional for login user from user-data collection
 * Params:email, password
 */
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			secretID,
			{expiresIn: "1h"}
		);
		const refreshToken = jwt.sign({
				name: user.name,
				email: user.email,
			}, secretID, 
				{ expiresIn: "1h"})

		return res.json({ status: 'ok', 
		"token": token,
        "refreshToken": refreshToken, user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

/**
 * Route and functional for token checker
 */
 app.post('/token', async (req,res) => {
    // refresh the damn token
    const postData = req.body
    // if refresh token exists
    if((postData.refreshToken) && (postData.refreshToken in tokenList)) {
        const user = {
            "email": postData.email,
            "name": postData.name
        }
        const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
        const response = {
            "token": token,
        }
        // update the token in the list
        tokenList[postData.refreshToken].token = token
        res.status(200).json(response);        
    } else {
        res.status(404).send('Invalid request')
    }
})


/**
 * Route and functional for tasks create to task-data collection
 * Params:title, description
 */
app.post('/api/task', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		await Task.create({
			title: req.body.title,
			description: req.body.description,
		})

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})
/**
 * Route and functional for get all tasks from task-data collection
 */
app.get('/api/tasks', async (req, res) => {
	const token = req.headers['x-access-token']
	
	try {
		
		const tasks = await Task.find();

		return res.json({ status: 'ok', data:tasks })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})
/**
 * Route and functional for get one task by id from task-data collection
 */
app.get('/api/task/:id', async (req, res) => {
	const token = req.headers['x-access-token']
	
	try {
		const task = await Task.findById( req.params.id )
		return res.json({ status: 'ok', data:task })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})
/**
 * Route and functional for tasks update by id to task-data collection
 * Params:title, description
 */
 app.put('/api/task/:id', async (req, res) => {
	const token = req.headers['x-access-token']
	try {
		await Task.findOneAndUpdate(
			{_id:req.params.id},
			{
			title: req.body.title,
			description: req.body.description,
			}	
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

/**
 * Route and functional for tasks delete by id to task-data collection
 */
 app.delete('/api/task/:id', async (req, res) => {
	const token = req.headers['x-access-token']
	let id = req.params.id;

	try {
		await Task.findByIdAndRemove(id) ;

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.listen(1337, () => {
	console.log('Server started on 1337')
})
