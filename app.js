// var defination = ""
info = {};

function getInfo(){

  var defination = "";

  word = document.getElementById("inputCity").value;
  let p = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  p.then((value1) => {
    return value1.json();
  }).then((info) => {
    document.getElementById("def").innerHTML = info[0].meanings[0]["definitions"][0]["definition"];
  })

  
  
}

