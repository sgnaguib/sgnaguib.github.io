function toggleOpen() {
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

  //if (name !== "" && about !== "" && url != ""){

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
  remove.onclick = function() { console.log("x"); document.getElementById("main").removeChild(div);}

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
  toggleOpen();
  //}
}