const userService = require('../MVC/user.service')
const UserCreate = async (req, res) => {
    try {
        const { name, email, contact } = req.body;
        const user = await userService.createUser({ name, email, contact });
        res.status(201).json({ message: "User created", user });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = { UserCreate }