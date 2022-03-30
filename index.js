
var nome = document.getElementById('name');
var adicionar = document.getElementById('add');
var sorteador = document.getElementById('sortear');
var nomeSorteado = document.getElementById('sorteado');
var tabela = document.getElementById('table')
var display = document.getElementById('load').style.display;
let array = [];


document.getElementById('load').style.display = 'none'
    

    function Mudarestado() {
        
        if(display == "none")
        document.getElementById('load').style.display = 'block'
        else
        document.getElementById('load').style.display = 'none'
    }


adicionar.addEventListener("click",e=>{
    let names = nome.value;
  if (names === ""){
    alert("Preecha o campo")
  }else{

    
        
      if(array.includes(names)){
        alert('Este nome já existe na lista')
        nome.value='';
      }else{
        array.push(names)
        let tr = document.createElement('tr');
      
        tr.innerHTML= ` <td>${names}</td>`
      
        console.log(this.tabela.appendChild(tr))
        this.tabela.appendChild(tr)
        nome.value='';
        
      }
    
    }
  
  });
  
  
  
  

sorteador.addEventListener('click', e=>{
  if(array.length <= 0){
    alert('Lista vazia')
  }else{
    document.getElementById('load').style.display = 'block'

    
    setTimeout(  function(){  
        const sorteado =Math.floor(Math.random() * array.length);
        let tr = document.createElement('tr');
        tr.innerHTML= `<td>Parabéns ${array[sorteado]}</td>`
        this.nomeSorteado.appendChild(tr)
        document.getElementById('load').style.display = 'none'
        
    },1000)
    
       
    
    /*
    criar botão para recarregar tela ou perguntar se quer usar a mesma lista
    deixar botão oculto
    fazer ele aparecer depois que sortear
    bloquear os outros dois
    em vez de aparecer o sorteado embaixo criar modal
    */
 // alert(`O sorteado foi ${array[sorteado]}`)
  //document.location.reload(true)
  }
});

