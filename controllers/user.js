const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find();
    return res.json(allDbUsers); // Sending the users as the response
};

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id); // Finding the user with the specified 'id'
     if (!user) {
         return res.status(404).json({ error: 'User not found' }); // Sending an error response if the user was not found
     }
     return res.json(user); // Sending the user as the response
 }
async function updateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, req.body); // Updating the user with the specified 'id' using the request body
    return res.json({status: "Success"}); // Sending a success response
}
async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id); // Deleting the user with the specified 'id'
     return res.json({status: "Success"}); // Sending a success response
}
async function handleCreateUser(req, res) {
    const body = req.body; // Extracting the request body
     if(
         !body.first_name ||
         !body.email ||
         !body.job_title ||
         !body.gender
     ){
         return res.status(400).json({error: "All fields are required"});
     }
     const result = await User.create({
         firstName: body.first_name,
         lastName: body.last_name,
         email: body.email,
         jobTitle: body.job_title,
         gender: body.gender
     });
     return res.status(201).json({msg: "User created successfully"});
    }

    module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    updateUserById,
    deleteUserById,
    handleCreateUser
}