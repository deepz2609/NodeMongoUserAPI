const express = require('express');
const {handleGetAllUsers} = require('../controllers/user');
const {
    handleGetUserById,
    updateUserById,
    deleteUserById,
    handleCreateUser
} = require('../controllers/user');
const router = express.Router();
 
router
    .route('/')
    .get(handleGetAllUsers)
    .post(handleCreateUser);
 
router
    .route('/:id')
    .get(handleGetUserById) // Defining the route for getting a user by 'id'
    .patch(updateUserById)
    .delete(deleteUserById); // Defining the route for deleting a user by 'id'

module.exports = router;