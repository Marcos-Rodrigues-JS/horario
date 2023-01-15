function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

const interval = setInterval(()=> {
var data = new Date
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()
if (min < 10){
   var min = "0"+min
}
if (hora < 10){
   var hora = "0"+hora
}
if (sec < 10){
   var sec = "0"+sec
}
msg.innerHTML = `Agora são ${hora}:${min}:${sec}`

 
 if (hora >= 0 && hora < 12){
    //BOM DIA
    document.body.style.background = '#8ad0d8'
    imagem.src = '/curso em vídeo - Javascript/Aula012 - exercicio 1/imagens/manha.jpg'
 } else if (hora >= 12 && hora < 18){
   document.body.style.background = '#6781d5'
    //BOA TARDE
    img.src = '/curso em vídeo - Javascript/Aula012 - exercicio 1/imagens/tarde.jpg'
 } else {
   document.body.style.background = '#0a133a'
    //BOA NOITE
    imagem.src = '/curso em vídeo - Javascript/Aula012 - exercicio 1/imagens/noite.jpg'
 }
}, 1000);
}
