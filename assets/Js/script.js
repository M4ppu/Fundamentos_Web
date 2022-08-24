// var nome = window.document.querySelector('#nome')

var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var mapa = document.querySelector('#mapa')
var nomeOk = false
var emailOk = false
var assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validarNome(){
    let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 2){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }
 
 function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } 
    else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso')
    }
    else{
        alert('Preencha corretamente')
    }
}


function mapaZoom() {
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function mapaNormal() {
   mapa.style.width = '400px'
   mapa.style.height = '250px'
}