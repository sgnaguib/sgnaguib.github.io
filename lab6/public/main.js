document.getElementById("myForm").style.display = "none";

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

  function search() {

    input = document.getElementById("search").value;

  }




