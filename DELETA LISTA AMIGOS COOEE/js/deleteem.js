// Salva os nomes dentro da variável namesOnTheList

let namesOnTheList = [];

function saveForm() {
  namesOnTheList.push(document.getElementById("namesList0").value);
  namesOnTheList.push(document.getElementById("namesList1").value);
  namesOnTheList.push(document.getElementById("namesList2").value);
  namesOnTheList.push(document.getElementById("namesList3").value);
  namesOnTheList.push(document.getElementById("namesList4").value);
  namesOnTheList.push(document.getElementById("namesList5").value);
  namesOnTheList.push(document.getElementById("namesList6").value);
  namesOnTheList.push(document.getElementById("namesList7").value);
  namesOnTheList.push(document.getElementById("namesList8").value);
  namesOnTheList.push(document.getElementById("namesList9").value);
  console.log(namesOnTheList);
  
  
}

// Deleta os usuários especificado na lista!


function submit (){
  
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[0]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[1]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[2]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[3]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[4]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[5]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[6]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[7]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[8]}/ignore`)
  window.open(`http://pt.clubcooee.com/users/rosterchange/${namesOnTheList[9]}/ignore`)

 
}



function clearFriends() {
  let btnLimpar = document
    .querySelector(".buttonClear")
    .addEventListener("click", () => {
      let inputs = document.querySelectorAll("input");
      inputs.forEach((input) => (input.value = [""]));
      namesOnTheList = [];
      //console.log(namesOnTheList);
    });
}
