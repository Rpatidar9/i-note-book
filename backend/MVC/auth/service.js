const user = require('../../models/user.model')
const findByEmail = async (email) => {
  return await user.findOne({  email  });
};
const getUserById = async (id) => {
  return await user.findById(id, {
    attributes: { exclude: ["password"] }, // never expose password
  });
};
module.exports = { findByEmail,getUserById }