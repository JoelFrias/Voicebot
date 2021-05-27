const talk = document.querySelector('.talk');
const voice2text = document.querySelector('.voice2text');
const voice2text2 = document.querySelector('.voice2text2');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

talk.addEventListener('click', () => {
    recorder.start();
});

recorder.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice2text.textContent = transcript;
};


function botVoice(message){

    const speech = new SpeechSynthesisUtterance();
    speech.text = "No te entiendo";

    if(message.includes('Hola')){
        speech.text = "Hola... ¿Cómo te va?";
    }
    
    if(message.includes('nombre')){
        speech.text = "Mi desarrollador me llama Supu.";
    }
    
    if(message.includes('para qué sirves')){
        speech.text = "Para no mucho, por ahora.";
    }
    
    if(message.includes('Cómo estás')){
        speech.text = "Estoy bien, ¡Gracias por preguntar! ";
    }
    
    if(message.includes('cuando cumples años')){
        speech.text = "Me crearon un miércoles 26 de mayo, del 2021";
    }
    
    if(message.includes('bien')){
        speech.text = "¡Que bueno! Me alegro mucho.";
    }
    
    if(message.includes('Quien te creó')){
        speech.text = "shhh, es un secreto";
    }
    
    if(message.includes('hora')){

        let hoy = new Date();

        hora = hoy.getHours() + ':' + hoy.getMinutes();

        speech.text = 'Son las '+ hora;
    }

    if(message.includes('día')){

        let hoy = new Date();

        fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();

        speech.text = 'Hoy es '+ fecha;
    }

    if(message.includes('fecha')){

        let hoy = new Date();

        fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();

        speech.text = 'Hoy es '+ fecha;
    }

    if(message.includes('chiste')){
        speech.text = "- Papá, ¿qué se siente tener un hijo tan guapo?- No sé hijo, pregúntale a tu abuelo...";
    }
    voice2text2.textContent = speech.text;

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)

};

recorder.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice2text.textContent = transcript;
    botVoice(transcript);
};