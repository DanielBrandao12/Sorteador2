
var nome = document.getElementById('name');
var adicionar = document.getElementById('add');
var sorteador = document.getElementById('sortear');
var nomeSorteado = document.getElementById('sorteado');
var tabela = document.getElementById('table')
var novaLista = document.getElementById('novaLista');
var remove = document.getElementById('remover');

let array = [];

document.getElementById('load').style.display = 'none'
novaLista.style.display = 'none'
remove.style.display = 'none'

function mudarEstado() {

  if (display == "none") {

    document.getElementById('load').style.display = 'block'
  }
  else {
    document.getElementById('load').style.display = 'none'
  }

}

//Botão adicionar nomes a lista
adicionar.addEventListener("click", e => {

  let names = nome.value;

  if (names === "") {

    alert("Preecha o campo")

  } else {

    if (array.includes(names)) {

      alert('Este nome já existe na lista')
      nome.value = '';

    } else {

      array.push(names)
      let tr = document.createElement('tr');

      //Esse for é para dar uma posição para o id do elemento
      for(let i = 0;i<array.length;i++){
        tr.innerHTML = ` <td id='list ${i}'>${names}</td>`
      }
      

      this.tabela.appendChild(tr)

      nome.value = '';
      remove.style.display = 'block'
    }
   
    
  }

  return array
});

//Botão remover ultimo item adicionado
remove.addEventListener("click", e => {
 
 
  if (array.length == 0) {

    alert('Lista vazia!')

  } else {
    
    let valor2 

    let valor = document.getElementById(`list ${array.length -1}`)
    
    valor2 =array.pop()
    
    if(valor.innerText == valor2){
      valor.parentNode.removeChild(valor)
    }
      
    


  }

});


//Botão para sortear
sorteador.addEventListener('click', e => {

  if (array.length <= 0) {

    alert('Lista vazia')

  } else {

    document.getElementById('load').style.display = 'block'

    setTimeout(function () {

      const sorteado = Math.floor(Math.random() * array.length);
      let tr = document.createElement('tr');
      tr.innerHTML = `<td class="nameSorteado">Parabéns</td> <class="nameSorteado"td>${array[sorteado]}</td>`
      this.nomeSorteado.appendChild(tr)
      document.getElementById('load').style.display = 'none'
      adicionar.disabled = true;
      sorteador.disabled = true;
      novaLista.style.display = 'block'
      remove.style.display = 'none'

    }, 1000)
  }
});

novaLista.addEventListener('click', e => {

  document.location.reload(true)


});

