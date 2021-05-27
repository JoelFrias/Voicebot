const img = document.getElementById('ico-conversacion');
const chatbot = document.getElementById('container');

img.addEventListener('click', function(){

    img.style.display="none";
    chatbot.style.display="inline";

});

const cerra = document.getElementById('cerrar');

cerra.addEventListener('click', function() {
    
    chatbot.style.display="none";
    img.style.display="inline";

})