const Service = require('./service')
const add = async (req, res) => {
    try {
        let { title, description, tag } = req.body;
        const user = await Service.createNote({ title, description, tag });
        res.status(201).json({ message: "Note created", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getAll = async (req, res) => {
    try {
        const user = await Service.getNotes();
        res.status(201).json({ message: "Get All Notes", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { add,getAll }