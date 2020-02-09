var persons = JSON.parse(window.localStorage.getItem('artistList'));
loadLocalStorage();

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

function sendInfo() {
  var name = document.getElementById("name").value;
  var about = document.getElementById("about").value;
  var url = document.getElementById("url").value;

  var person = {Name: name, About: about, URL: url}

  if (name !== "" && about !== "" && url != ""){
  saveLocalStorage(person);
  createDiv(person);
  toggleOpen();
  }
}

function saveLocalStorage(person){

  window.persons.push(person);
  window.localStorage.setItem('artistList', JSON.stringify(persons));
  console.log(window.localStorage.getItem('artistList'));
  console.log("CHECK");
}

function removeDiv(div, artist){
  console.log(artist);
  persons.forEach(function(person, index, object){
    if(isEqual(person, artist)){
      object.splice(index, 1);
    }
  })
  window.localStorage.setItem('artistList', JSON.stringify(persons));
  document.getElementById("main").removeChild(div);
}

function createDiv(artist){

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
  remove.onclick = function() {removeDiv(div, artist);}

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

}



function loadLocalStorage(){
  artists = JSON.parse(window.localStorage.getItem('artistList'));
  console.log(artists);
  artists.forEach(function(artist){
    createDiv(artist);
  })
}