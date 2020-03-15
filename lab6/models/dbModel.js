let db = require('../db/db');

function addPeople(e) {
     db.query("Insert into artists (name,about,url) VALUES ('" + e.name +"','"+ e.about + "','"+ e.url +"')");
}

function getAllPeople() {
    return db.query('Select * from artists');
}

async function removeArtist(id){
    await db.query('Delete from artists where id = ' + id);
}

function searchArtists(name){
    return db.query("SELECT * FROM artists WHERE UPPER(name) LIKE UPPER('%" + name + "%');");
}

function checkUser(username, password){
    return db.query("SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "';");

}

module.exports = {
    add : addPeople,
    getall : getAllPeople,
    remove : removeArtist,
    search: searchArtists,
    authenticate : checkUser
}