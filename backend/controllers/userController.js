const getUser = (req, res) => {
    res.status(200).json({ message: "respond with a user file" });
};

const createUser = (req, res) => {
    res.status(200).json({ message: "User has been created" });
};

const deleteUser = (req, res) => {
    res.status(200).json({ message: "User has been deleted" });
};

const updateUser = (req, res) => {
    res.status(200).json({ message: "User has been updated" });
};

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser,
}