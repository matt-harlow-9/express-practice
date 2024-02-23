// routes.js

routes = {
    '/special-message': (req, res) => {
        res.end("You're SPECIAL");
    },

    '/non-special-message': (req, res) => {
        res.end("You're boring!");
    }
};

module.exports = routes;