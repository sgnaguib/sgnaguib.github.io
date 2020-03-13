let mod = require('../models/artistData');

exports.getAllPeople = function(req,res) {
    let Peoples = mod.getall();
    Peoples.then((data) => {
        res.render('peoples', { people: data.rows, peoplesCSS: true });
    });
}

exports.peopleAdd = function(req,res) {
   let p_name = req.body.name;
   let p_about = req.body.about;
   let p_imageURL = req.body.url;

   console.log(req.body);

   let pOject = {
      name: p_name,
      about: p_about,
      url: p_imageURL
   }

   mod.add(pOject);
   res.redirect(301, '/');
   
}