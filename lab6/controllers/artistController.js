let mod = require('../models/artistData');

exports.peopleAdd = async function(req,res) {
   let p_name = req.body.name;
   let p_about = req.body.about;
   let p_imageURL = req.body.url;

   console.log(req.body);

   let pObject = {
      name: p_name,
      about: p_about,
      url: p_imageURL
   }

   await mod.add(pObject);
   res.redirect(301, '/');
   
}

exports.removeArtist = async function(req,res) {
    let id = req.params.id;
    console.log(id);
    
    await mod.remove(id);
    res.redirect(301, '/');
    
 }

 exports.searchArtists = async function(req,res) {
    let name = req.body.search;
    console.log(name);
    
    matches = mod.search(name);
    matches.then((data) => {
        res.render('directory', { pageTitle: 'Artist App', people:data.rows});
    });
    
    
 }

