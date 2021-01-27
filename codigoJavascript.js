function iniciaModal(id){
    var modal=document.getElementById(id);
    modal.classList.add('mostrar');
}
function fecharModal(id){
    var modal=document.getElementById(id);
    modal.classList.remove('mostrar');
}
function iniciarPt1(id){
    var pt1=document.getElementById(id);
    pt1.classList.add('mostar');
}

async function funcMp4(){
    document.getElementById('result1').innerHTML = "";
    result1.style.height="235px";
    var texto = document.getElementById("idTexto").value;
    var elemento_pai = document.getElementById("result1"); //o elemento pai é o local aonde será reproduzido o vídeo
    var video = document.createElement('video');//cria o elemento vídeo
    video.style.width="500px";
    video.style.height="200px";
    elemento_pai.appendChild(video);//insere o vídeo no elemento pai
    video.autoplay = true;
    for(var i=0;i<texto.length;i++){
        switch(texto[i].toLowerCase()) {
            case "á": case "à": case "ã": case "â":
            case "Á": case "À": case "Ã": case "Â":
                video.src = 'letras_mp4/a.mp4';
            break;
            case "é": case "ê":
            case "É": case "Ê":
                video.src = 'letras_mp4/e.mp4';
            break;
            case "í": case "î":
            case "Í": case "Î":
               video.src = 'letras_mp4/i.mp4'; 
            break;
            case "ó": case "ô":
            case "Ó": case "Ô":
                video.src = 'letras_mp4/o.mp4';
            break;
            case "ú": case "û":
            case "Ú": case "Û":
                video.src = 'letras_mp4/e.mp4';
            break;
            case "Ç": case "ç":
                video.src = 'letras_mp4/c.mp4';
            break;
            case " ":
                video.src = 'letras_mp4/ESPAÇO.mp4';
            break;
            default:
            video.src = 'letras_mp4/'+texto[i]+'.mp4';
        }
        await wait(2500);
    }
}

function funcPng(){
    document.getElementById('result1').innerHTML = "";
    result1.style.height="190px";
    var img_letra=[];
    var texto = document.getElementById("idTexto").value;
    var inicio = '<img src="letras_png/';
    var fim = '.png" width=45 height=45>';
    for (var i = 0, max = texto.length; i < max; i++) {
        switch(texto.charAt(i).toLowerCase()){
            case "á": case "à": case "ã": case "â":
            case "Á": case "À": case "Ã": case "Â":
                img_letra[i]=(inicio + 'a' + fim);
            break;
            case "é": case "ê":
            case "É": case "Ê":
                img_letra[i]=(inicio + 'e' + fim);
            break;
            case "í": case "î":
            case "Í": case "Î":
                img_letra[i]=(inicio + 'i' + fim);
            break;
            case "ó": case "ô":
            case "Ó": case "Ô":
                img_letra[i]=(inicio + 'o' + fim);
            break;
            case "ú": case "û":
            case "Ú": case "Û":
                img_letra[i]=(inicio + 'u' + fim);
            break;
            case "Ç": case "ç":
                img_letra[i]=(inicio + 'c' + fim);
            break;
            case " ":
                img_letra[i]=(inicio + 'espaço' + fim);
            break;
            case "?":
                img_letra[i]=(inicio + 'pontointerrogacao' + fim);
            break;
            case ".":
                img_letra[i]=(inicio + 'pontofinal' + fim);
            break;
            case "!":
                img_letra[i]=(inicio + 'pontoexclamacao' + fim);
            break;
            case ",":
                img_letra[i]=(inicio + 'virgula' + fim);
            break;
            default:
                img_letra[i]=(inicio + texto.charAt(i) + fim);
        }
    }
    document.getElementById("result1").innerHTML=img_letra.join(" ");
}

function inverterLing(id1,id2){
    fecharBox();
    if(document.getElementById(id1).style.display=='none'){
        document.getElementById(id1).style.display='inline';
        document.getElementById(id2).style.display='none';
    }
    else{
        document.getElementById(id1).style.display='none';
        document.getElementById(id2).style.display='inline';
    }
}
var z=0;
var texto_pt=[];
function funcPt(id){
    texto_pt.push(id);
    document.getElementById("result2").innerHTML=texto_pt.join(" ");
    z++;
}

function limpar(id1){
    if(document.getElementById(id1).style.display=='none'){
        z=0;
        texto_pt=[];
        document.getElementById('result2').innerHTML = '';
    }
    else{
        document.getElementById('idTexto').value = '';
        document.getElementById('result1').innerHTML='';
    }
}
function limparCaractere(){
    texto_pt.pop();
    document.getElementById("result2").innerHTML=texto_pt.join(" ");
}

function mudarDeCor(id){
    var escrita=document.getElementById("a_escrita");
    var mp4=document.getElementById("a_sinais");
    if (id=="escrita"){
       escrita.style.backgroundColor="grey";
       mp4.style.backgroundColor="white";
       document.getElementById("i_loop").style.display="none";
    }
    else{
        document.getElementById("i_loop").style.display="block";
        mp4.style.backgroundColor="grey";
        escrita.style.backgroundColor="white";
    }
}        
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function pausaDigitacao() {
    var escrita=document.getElementById("a_escrita");
    var mp4=document.getElementById("a_sinais");
    if(mp4.style.backgroundColor=="grey"){
        clearTimeout(this.interval);
        document.getElementById('result1').innerHTML = "Traduzindo...";
        this.interval = setTimeout(function(){funcMp4()},2000);
    }
    else{
        clearTimeout(this.interval);
        document.getElementById('result1').innerHTML = "Traduzindo...";
        this.interval = setTimeout(function(){funcPng();},500);
    }
}

function fecharAbrirBox(id){ 
    switch(id){
        case "box1":
            document.getElementById("box2").checked=false;
            document.getElementById("box3").checked=false;
            document.getElementById("box4").checked=false;
        break;
        case "box2":
            document.getElementById("box1").checked=false;
            document.getElementById("box3").checked=false;
            document.getElementById("box4").checked=false;
        break;
        case "box3":
            document.getElementById("box1").checked=false;
            document.getElementById("box2").checked=false;
            document.getElementById("box4").checked=false;
        break;
        case "box4":
            document.getElementById("box1").checked=false;
            document.getElementById("box2").checked=false;
            document.getElementById("box3").checked=false;
        break;
}
}
function fecharBox(){
    document.getElementById("box1").checked=false;
    document.getElementById("box2").checked=false;
    document.getElementById("box3").checked=false;
    document.getElementById("box4").checked=false;
}