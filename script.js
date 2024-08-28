var contador = 0

function verification() {

    var validation = prompt("Diz ai teu nome pra eu ver um negocio")

    var names = ["laura",'gaucha','bruna','noronha','laura bruna de noronha','amorzinho','amor da sua vida','futura esposa']

    let sinal = 0

    for(let i = 0; i < names.length; i++){
        if(names[i] == validation){
            sinal = 1
        }
    }

    if(sinal == 1){
        marryme()
    }


    console.log(sinal)
}

function marryme(){
    let Body = document.getElementById("Body")

    let Div = document.createElement("div")
    Div.id = "Div"

    let texto = document.createElement("h1")
    texto.innerHTML = "Aceita namorar comigo?"
    texto.id = "texto"

    let sim = document.createElement("button")
    sim.textContent = "Sim"
    sim.id = "si"
    sim.addEventListener('click', Sim)

    let nao = document.createElement("button")
    nao.textContent = "Não"
    nao.id = "nam"
    nao.addEventListener('click',Nao)

    Div.appendChild(sim)
    Div.appendChild(nao)
    Body.appendChild(texto)
    Body.appendChild(Div)
}

function Nao(){
    // alert("Ta lezando?")
    var botao = document.getElementById("nam")
    let texto = document.getElementById("texto")
    let save = "Aceita namorar comigo?"

    contador++

    // Gera novas posições aleatórias para o botão
    var novaPosicaoEsquerda = Math.random() * (window.innerWidth - botao.offsetWidth);
    var novaPosicaoTopo = Math.random() * (window.innerHeight - botao.offsetHeight);

    // Aplica as novas posições ao botão
    botao.style.left = novaPosicaoEsquerda + 'px';
    botao.style.top = novaPosicaoTopo + 'px';

    if(contador == 3){
        alert("Como assim não 🧐?")
        texto.innerHTML += "🧐"
        
    }

    if(contador == 5){
        alert("Aperte logo esse sim 😮‍💨")
        texto.innerHTML = save
        texto.innerHTML += "😮‍💨"

    }

    if(contador == 6){
        alert("Vose naum que 🥺?")
        texto.innerHTML = save
        texto.innerHTML += "🥺"

        
    }

    if(contador == 10){
        alert("Nam você quer sim")
        texto.innerHTML = save
        texto.innerHTML += "😾"
    }

    if(contador == 12){
        alert("Chega fih, cabo a graça 😾")
    }

    if(contador == 13){
        final()
    }
    
}

function Sim(){
    let texto = document.getElementById("texto")

    texto.innerHTML = "Estamos oficialmente namorando(já estavamos) agora e você não tem mais escolha Muahaha"

    setTimeout(function(){
        window.location.replace("https://www.instagram.com/reel/C85PqqXPzNZ/?igsh=YzJkNGRicDJ5cjhy")
    }, 2000)
}

function final(){
    let texto = document.getElementById("texto")
    texto.innerHTML = "Como você é teimosa deixe que eu decido por você, e a decisão é sim"

    setTimeout(Sim,3000)
}