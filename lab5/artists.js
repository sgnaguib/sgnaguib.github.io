var artists = [];

function addArtist(artist){
    artists.push(artist);
    console.log(artist)
}

function removeArtist(remove){
    artists.forEach(function (artist, index, list) {
        console.log("HERE?")
        if (remove.Name === artist.Name && remove.About === artist.About && remove.URL === artist.URL) {
            console.log("SPLICED!")
          list.splice(index, 1);
        }
      })
}

function getAllArtists(){
    return artists;
}

module.exports = {
    add : addArtist,
    getall : getAllArtists,
    remove : removeArtist
}