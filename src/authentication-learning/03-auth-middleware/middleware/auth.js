const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token =
      req.headers.authorization;

    if (!token) {
        return res
        .status(401)
        .send('No Token');
    }

    try {

        const decoded =
          jwt.verify(
            token,
            'mysecretkey'
          );

        req.user = decoded;

        next();

    } catch {

        res
        .status(401)
        .send('Invalid Token');
    }
};

module.exports = auth;