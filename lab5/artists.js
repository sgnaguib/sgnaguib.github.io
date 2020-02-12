var artists = [];

function addArtist(artist){
    artists.push(artist);
    console.log(artist)
}

function getAllArtists(){
    return artists;
}

module.exports = {
    add : addArtist,
    gettall : getAllArtists
}