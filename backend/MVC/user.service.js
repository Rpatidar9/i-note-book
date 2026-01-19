const user = require('../models/user.model')
const createUser = async (userData) => {
    return await user.create(userData);
}
module.exports = { createUser }