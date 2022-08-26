
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


function mudarEstado() {

  if (display == "none") {

    document.getElementById('load').style.display = 'block'
  }
  else {
    document.getElementById('load').style.display = 'none'
  }

}

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

      tr.innerHTML = ` <td id='list'>${names}</td>`

      this.tabela.appendChild(tr)

      nome.value = '';

    }

  }

  return array
});

remove.addEventListener("click", e => {

  if (array.length == 0) {

    alert('Lista vazia!')

  } else {

    array.pop()

  }

});



sorteador.addEventListener('click', e => {

  if (array.length <= 0) {

    alert('Lista vazia')

  } else {

    document.getElementById('load').style.display = 'block'

    setTimeout(function () {

      const sorteado = Math.floor(Math.random() * array.length);
      let tr = document.createElement('tr');
      tr.innerHTML = `<td>Parabéns ${array[sorteado]}</td>`
      this.nomeSorteado.appendChild(tr)
      document.getElementById('load').style.display = 'none'
      adicionar.disabled = true;
      sorteador.disabled = true;
      novaLista.style.display = 'block'

    }, 1000)
  }
});

novaLista.addEventListener('click', e => {

  document.location.reload(true)


});

