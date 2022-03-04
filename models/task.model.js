const mongoose = require('mongoose')

const Task = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String }
	},
	{ collection: 'task-data' }
)

const model = mongoose.model('TaskData', Task)

module.exports = model
