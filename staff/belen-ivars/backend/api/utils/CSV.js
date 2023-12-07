const fs = require('fs')

function loadAsObject(file, callback) {

	fs.readFile(file, 'utf8', (error, csv) => {
		if (error) {
			callback(error)

			return
		}

		const data = []

		const lines = csv.split('\n')

		const fields = lines[0].split(',')

		for (let i = 1; i < lines.length; i++) {
			const line = lines[i]

			const values = line.split(',')

			const item = {}

			for (const j in fields) {
				const field = fields[j]

				item[field] = values[j]
			}

			data.push(item)

		}

		callback(null, data)
	})
}

function saveFromObject(file, data, callback) {
	const fields = Object.keys(data[0])

	let csv = fields.join()

	for (const item of data) {
		let line = ''

		for (let i = 0; i < fields.length; i++) {
			const field = fields[i]

			line += item[field] + (i < fields.length - 1 ? ',' : '')
		}

		csv += '\n' + line
	}

	fs.writeFile(file, csv, error => {
		if (error) {
			callback(error)

			return
		}

		callback(null)
	})
}

module.exports = {
	loadAsObject,
	saveFromObject
}