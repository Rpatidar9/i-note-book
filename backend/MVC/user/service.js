const user = require('../../models/user.model')
const createUser = async (userData) => {
    return await user.create(userData);
}
const getUser = async (userData) => {
    return await user.find();
}
module.exports = { createUser,getUser }