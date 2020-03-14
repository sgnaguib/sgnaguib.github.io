let db = require('../db/db');

async function addPeople(e) {
     await db.query("Insert into artists (name,about,url) VALUES ('" + e.name +"','"+ e.about + "','"+ e.url +"')");
}

function getAllPeople() {
    return db.query('Select * from artists');
}

function getPeople(id) {
    return db.query('Select * from artists where id = ' + id);
}

module.exports = {
    add : addPeople,
    getall : getAllPeople,
    getpeople: getPeople 
}