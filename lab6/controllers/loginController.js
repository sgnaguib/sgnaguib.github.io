let mod = require('../models/dbModel');

exports.checkUser = async function (req, res) {

    let userName = req.body.userName;
    let password = req.body.password;
    result = await mod.authenticate(userName, password);
    if (result.rows.length !== 0) {

        let artists = mod.getall();
        artists.then((data) => {
            res.render('directory', {
                pageTitle: 'Artist App',
                people: data.rows
            });
        })

    } else {
        res.redirect(301, '/');
    }


}