const Service = require('./service')
const bcrypt = require('bcrypt');
const UserCreate = async (req, res) => {
    try {
        let { name, email, password } = req.body;
     password = await bcrypt.hash(password, 10);
        const user = await Service.createUser({ name, email, password });
        res.status(201).json({ message: "User created", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getAllUser = async (req, res) => {
    try {
        const user = await Service.getUser();
        res.status(201).json({ message: "User created", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { UserCreate,getAllUser }