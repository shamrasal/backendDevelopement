const path = require('path');

exports.get404Error = (req, res, next) => {
    const path = req.path; // Get the path from the request object
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: path });
}