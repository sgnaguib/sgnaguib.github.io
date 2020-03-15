let mod = require('../models/artistData');

exports.checkUser = async function (req, res) {

    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName);

    result = await mod.authenticate(userName, password);
    console.log(result);
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