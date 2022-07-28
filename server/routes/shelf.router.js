const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
	console.log('GETTING ITEMS');
	let queryText = `SELECT * FROM "item";`;
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error in GET', error);
			res.sendStatus(500);
		});
});

//   res.sendStatus(200); // For testing only, can be removed

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
	const { url, description, user_id } = req.body;
	const queryText = 'INSERT INTO item (image_url, description, user_id) VALUES ($1, $2, $3);';
	pool
		.query(queryText, [url, description, user_id])
		.then(() => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log('ERRRRRRORRRRR IN POST', err);
		});
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
	// endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
	// endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
	// endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
	// endpoint functionality
});

module.exports = router;
