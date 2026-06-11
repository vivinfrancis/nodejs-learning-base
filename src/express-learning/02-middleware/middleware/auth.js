const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log("process.env.JWT_SECRET",process.env.JWT_SECRET);
    
    if (token === process.env.JWT_SECRET) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = auth;