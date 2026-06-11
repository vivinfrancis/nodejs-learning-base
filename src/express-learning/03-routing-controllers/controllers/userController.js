const getUser = (req, res) => {
    res.send('Get user data');
};

const createUser = (req, res) => {
    console.log(req.body);
    res.send('User created');
};

const searchUser = (req, res) => {
    const { name } = req.query;
    res.send(`Search user with name: ${name}`);
};

module.exports = {
    getUser,
    createUser,
    searchUser
};