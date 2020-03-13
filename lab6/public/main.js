  var localArtists = []
  getArtists();


  const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }

    return true;
  };


  function toggleOpen() {
    document.getElementById("theForm").reset();
    var x = document.getElementById("myForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  async function getArtists() {
    fetch('/getArtists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .then(function (data) {
      loadArtists(data);
    })
  }


  async function sendInfo() {
    var name = document.getElementById("name").value;
    var about = document.getElementById("about").value;
    var url = document.getElementById("url").value;

    var person = {
      Name: name,
      About: about,
      URL: url,
      Div: null
    };

    if (name !== "" && about !== "" && url != "") {
      console.log(JSON.stringify(person));

      fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, // this line is important, if this content-type is not set it wont work
          body: JSON.stringify(person)
        }).then((response) => response.json())
        .then(function (data) {
          loadArtists(data);
        })

      toggleOpen();
    }
  }


  function createDiv(artist) {

    name = artist.Name;
    about = artist.About;
    url = artist.URL;

    var div = document.createElement("div");
    var text = document.createElement("div");
    var span = document.createElement("span");
    var mainspan = document.createElement("span");
    var linebreak = document.createElement("br");
    var picture = document.createElement("div");
    var remove = document.createElement("button")

    picture.className = "pic";
    picture.style.backgroundImage = "url(" + url + ")";
    div.className = "artist";
    text.className = "text";
    span.className = "small";
    remove.className = "remove";
    remove.onclick = function () {
      removeDiv(artist);
    }

    text.appendChild(mainspan);
    text.appendChild(linebreak);
    text.appendChild(span);

    div.appendChild(picture);
    div.appendChild(text);
    div.appendChild(remove);

    mainspan.appendChild(document.createTextNode(name));
    remove.appendChild(document.createTextNode('Delete'));
    span.appendChild(document.createTextNode("\n" + about));
    document.getElementById("main").appendChild(div);
    return div;

  }

  function loadArtists(artists) {

    //first remove previous artists
    localArtists.forEach(function (artist) {
      document.getElementById("main").removeChild(artist.Div);
    })
  
    //reset localArtists
    localArtists = [];

    //then load updated artist list
    artists.forEach(function (artist) {
      div = createDiv(artist);
      artist.Div = div;
      localArtists.push(artist);
    })
  }

  async function removeDiv(artist) {
    localArtists.forEach(function (person, index, object) {
      if (isEqual(person, artist)) {
        object.splice(index, 1);
      }
    })

    fetch('/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, // this line is important, if this content-type is not set it wont work
      body: JSON.stringify(artist)
    }).then((response) => response)
    .then(function (data) {
      console.log(data);
    })

    document.getElementById("main").removeChild(artist.Div);
  }

  async function search() {
    input = document.getElementById("search").value;

    if (input !== ""){
    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      }, 
      body: input
    }).then((response) => response.json())
    .then(function (data) {
      loadArtists(data);
    })
  }
  else{
    getArtists();
  }
  }