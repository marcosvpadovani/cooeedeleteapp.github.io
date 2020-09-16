class Amigos {
  constructor() {
    this.limpaAmigos();
  }

  adicionaAmigos() {
    this.amigos.map((currElement, index) => {
      document.getElementById("amigos").innerHTML +=
        '<input type="text" class="list" id="amigo' + index + '"><br>';
    });
  }

  limpaAmigos() {
    this.amigos = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]; //inicia vazio
    this.adicionaAmigos();
  }

  salvaAmigos() {
    //implemente a sua lógica. Segue um exemplo
    //erros

    this.amigoSalvos = [];
    this.amigoSalvos[0] = document.getElementById("amigo0").value;
    this.amigoSalvos[1] = document.getElementById("amigo1").value;
    this.amigoSalvos[2] = document.getElementById("amigo2").value;
    this.amigoSalvos[3] = document.getElementById("amigo3").value;
    this.amigoSalvos[4] = document.getElementById("amigo4").value;
    this.amigoSalvos[5] = document.getElementById("amigo5").value;
    this.amigoSalvos[6] = document.getElementById("amigo6").value;
    this.amigoSalvos[7] = document.getElementById("amigo7").value;
    this.amigoSalvos[8] = document.getElementById("amigo8").value;
    this.amigoSalvos[9] = document.getElementById("amigo9").value;
    console.log(this.amigoSalvos);

    window.open(
      `https://pt.clubcooee.com/users/rosterchange/${this.amigoSalvos[0]}/ignore`
    );
  }
}
