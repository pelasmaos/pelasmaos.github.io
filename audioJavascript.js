// Test browser support

window.SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition ||null;

//caso não suporte esta API DE VOZ

if (window.SpeechRecognition === null) {
    document.getElementById('unsupported').classList.remove('hidden');
}
else {
    var recognizer = new window.SpeechRecognition();
    var idtexto = document.getElementById("idTexto");
    var resp =  document.getElementById("idTexto");

    //Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
    // recognizer.continuous = true

    recognizer.onresult = function(event){
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if(event.results[i].isFinal){
                idtexto.value = event.results[i][0].transcript;
                idtexto.textContent=event.results[i][0].transcript;
            }
            else{
                idtexto.value = event.results[i][0].transcript;
                idtexto.textContent += event.results[i][0].transcript;
            }
        }
        
        if (idtexto.textContent !== ""){
            pausaDigitacao();
        }
    };
    document.querySelector("#i_mic").addEventListener("click",function(){
        try {
            recognizer.start();
        }
        catch(ex) {
            alert("error: "+ex.message);
        }
    });
}