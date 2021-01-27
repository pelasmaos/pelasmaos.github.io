<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PelasMãos</title>
        <link href="estilo.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="logo.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fontawesome.com/icons/camera-polaroid?style=regular">
    </head> 
    <body>
        <div id="tab_trad">
            <div id="tr_parte1">
                <div>
                    <ul id="ul_parte1Pt">
                        <li class="a_pt"><a>Português - BR</a></li>
                        <li><i class="material-icons" id="i_mic">mic</i></li>
                        <li><i class="material-icons" onclick="limpar('tr_parte1')" id='i_limpar1'>clear</i></li>
                    </ul>
                </div>
                <div>
                    <ul id="ul_parte1Libras">
                        <li><a onclick='mudarDeCor("sinais"),pausaDigitacao()' id="a_sinais" style="background-color:grey;">Sinais</a></li>
                        <li><a onclick='mudarDeCor("escrita"),pausaDigitacao()' id="a_escrita">Escrita</a></li>
                        <li><i class="material-icons" onclick="funcMp4()" id='i_loop'>loop</i></li>
                    </ul>
                </div>

                <div>
                    <textarea id="idTexto" rows="15" cols="68" onkeyup="pausaDigitacao()" ></textarea>
                </div>

                <div id="result1"></div>

                <div class="td_meio">
                    <i class="material-icons" onclick="inverterLing('tr_parte1','tr_parte2'),limpar('tr_parte1')">swap_horiz</i>
                    <img src="logo.png" alt="logo" id="logo"/>
                </div>
            </div>

            <div id="tr_parte2">
                <div>
                    <ul id="ul_parte2Libras">
                        <li class="a_pt"><a>Escrita de sinais</a></li>
                        <li><i class="material-icons" onclick="limparCaractere()" id='i_limparCaractere'>backspace</i></li>
                        <li><i class="material-icons" onclick="limpar('tr_parte1')" id='i_limpar2'>clear</i></li>
                    </ul>
                </div>

                <div>
                    <ul id="ul_parte2Pt">
                        <li><a onclick='funcPng()' class="a_pt">Português - BR</a></li>
                    </ul>
                </div>

                <div id="idImagem">
                    <img src="letras_png/a.png" onclick="funcPt('a')" alt='a'>
                    <img src="letras_png/b.png" onclick="funcPt('b')" alt='b'>
                    <img src="letras_png/c.png" onclick="funcPt('c')" alt='c'>
                    <img src="letras_png/d.png" onclick="funcPt('d')" alt='d'>
                    <img src="letras_png/e.png" onclick="funcPt('e')" alt='e'>
                    <img src="letras_png/f.png" onclick="funcPt('f')" alt='f'>
                    <img src="letras_png/g.png" onclick="funcPt('g')" alt='g'>
                    <img src="letras_png/h.png" onclick="funcPt('h')" alt='h'>
                    <img src="letras_png/i.png" onclick="funcPt('i')" alt='i'>
                    <img src="letras_png/j.png" onclick="funcPt('j')" alt='j'>
                    <img src="letras_png/k.png" onclick="funcPt('k')" alt='k'>
                    <img src="letras_png/l.png" onclick="funcPt('l')" alt='l'>
                    <img src="letras_png/m.png" onclick="funcPt('m')" alt='m'>
                    <img src="letras_png/n.png" onclick="funcPt('n')" alt='n'>
                    <img src="letras_png/o.png" onclick="funcPt('o')" alt='o'>
                    <img src="letras_png/p.png" onclick="funcPt('p')" alt='p'>
                    <img src="letras_png/q.png" onclick="funcPt('q')" alt='q'>
                    <img src="letras_png/r.png" onclick="funcPt('r')" alt='r'>
                    <img src="letras_png/s.png" onclick="funcPt('s')" alt='s'>
                    <img src="letras_png/t.png" onclick="funcPt('t')" alt='t'>
                    <img src="letras_png/u.png" onclick="funcPt('u')" alt='u'>
                    <img src="letras_png/v.png" onclick="funcPt('v')" alt='v'>
                    <img src="letras_png/w.png" onclick="funcPt('w')" alt='w'>
                    <img src="letras_png/x.png" onclick="funcPt('x')" alt='x'>
                    <img src="letras_png/y.png" onclick="funcPt('y')" alt='y'> 
                    <img src="letras_png/z.png" onclick="funcPt('z')" alt='z'>
                    <img src="letras_png/espaço.png" onclick="funcPt(' ')" alt='espaço'>
                    <img src="letras_png/virgula.png" onclick="funcPt(', ')" alt='virgula'>
                    <img src="letras_png/pontoexclamacao.png" onclick="funcPt('! ')" alt='pontoexclamacao'>
                    <img src="letras_png/pontofinal.png" onclick="funcPt('. ')" alt='pontofinal'>
                    <img src="letras_png/pontointerrogacao.png" onclick="funcPt('? ')" alt='pontointerrogacao'>
                </div>

                <div>
                    <textarea id="result2" rows="15" cols="68"></textarea>
                </div>

                <div class="td_meio">
                    <i class="material-icons" onclick="inverterLing('tr_parte1','tr_parte2'),limpar('tr_parte1')">swap_horiz</i>
                    <img src="logo.png" alt="logo" id="logo"/>
                </div>
            </div>
        </div>        
        
        <input type="checkbox" name="boxs" id="box1" onclick="fecharAbrirBox('box1')">
        <div class="cima">
            <label for="box1" ><i class="material-icons" id="botao1">people</i></label>
            <div id="txt1">
                <br>
                <h1 id="txt1titulo">Quem somos nós?</h1>
                <div id="txt1corpo">
                    <p> O site PelasMãos foi desenvolvido por Brenda Liporaci, Mariana Lessa e Maria Fernanda. Estudantes
                    do IFRJ - Campus Arraial do Cabo, técnico em informática. <br></p>
                    <p>Entre em contato:
                    <i class="material-icons" style="bottom:-5px;position: relative; cursor:default">email</i>sitepelasmaos@gmail.com 
                    <i class="material-icons" style="bottom:-5px;position: relative; cursor:default">alternate_email</i>brendaliporaci
                    <i class="material-icons" style="bottom:-5px;position: relative; cursor:default">alternate_email</i>mariafsco
                    <i class="material-icons" style="bottom:-5px;position: relative; cursor:default">alternate_email</i>lessaamari</p>
                </div>
            </div>
        </div>

        <input type="checkbox" name="boxs" id="box2" onclick="fecharAbrirBox('box2')">
        <div class="baixo">
            <label for="box2"><i class="material-icons" id="botao2" >playlist_add_check</i></label>
            <div id="txt2">
                <br>
                <h1 id="txt2titulo">Nosso objetivo</h1>
                <div id="txt2corpo">
                    <p>O motivo da criação desse projeto é que, por mais que a Libras seja reconhecida como umas das 
                    línguas oficiais do Brasil pela lei 10.436/2002,muitos brasileiros não sabem utilizar da mesma.
                    Desenvolvido para promover uma comunicação entre usuários e não usuários da Língua Brasileira
                    de Sinais, o PelasMãos permite a conversão de textos da língua portuguesa para Libras a e 
                    vice-versa. Além disso, pode de ser usado como auxílio no aprendizado da Libras. <br></p>
                </div>    
            </div>
        </div>

        <input type="checkbox" name="boxs" id="box3" onclick="fecharAbrirBox('box3')">
        <div class="esquerda">
            <label for="box3"><i class="material-icons" id="botao3" >help</i></label>
            <div id="txt3">
                <br>
                <h1 id="txt3titulo">Dúvidas?</h1>
                <div id="txt3corpo">
                    <p>Você tem duas opções para inserir o texto a ser traduzido para Libras: <p>
                    <p>Inserir o texto no campo em branco ou pressionar o botão<i class="material-icons" style="cursor:default">mic</i> e falar o que deseja traduzir.</p>
                    <p>Você pode escolher duas opções de tradução para a Libras, onde serão mostrados os sinais de cada letra 
                    (SINAIS) ou a opção referente a escrita de sinais (ESCRITA), onde serão exibidos os símbolos referentes a 
                    cada letra.</p>
                    <p>Ao clicar no botão<i class="material-icons" style="cursor:default">loop</i> os sinais serão reproduzidos novamente.</p>
                    <p>Ao clicar em<i class="material-icons" style="cursor:default">swap_horiz</i> as linguagens serão invertidas.</p>
                </div>
            </div>
        </div>

        <input type="checkbox" name="boxs" id="box4" onclick="fecharAbrirBox('box4')">
        <div class="direita">
            <label for="box4"><i class="material-icons" id="botao4" >info</i></label>
            <div id="txt4">
                <br>
                <h1 id="txt4titulo">Indicações</h1>
                <div id="txt4corpo">
                    <p>Nosso site é uma ferramenta de tradução de português para Libras e vice-versa.</p>
                    <p>A seguir, indicaremos dois aplicativos grátis que, junto com o PelasMãos, garantem a comunicação em Libras. 
                    Podendo ser utilizados para aprendizado ou acessibilidade.</p>
                    <p>O aplicativo <a href="https://www.handtalk.me/br/aplicativo" class="a_txt4"><strong>Hand Talk</strong></a> conta com o Hugo, um avatar animado, que faz a tradução do que for selecionado, além de 
                    disponibilizar aulas e um dicionário com milhares de sinais.<p>
                    <p>O aplicativo <a href="https://www.vlibras.gov.br/#vlibras" class="a_txt4"><strong>VLibras</strong></a> conta com o Ícaro, um avatar animado, que faz a tradução do que for selecionado. Diferente do 
                    hand talk, possui código aberto e é uma parceria entre parceria entre o Ministério da Economia, por meio da Secretaria de Governo 
                    Digital e a Universidade Federal da Paraíba.</p>
                </div>  
            </div>
        </div>

        <script type="text/javascript" src="audioJavascript.js"></script>

        <script type="text/javascript" src="codigoJavascript.js"></script>
      
    </body>
</html>
