const ultimapergunta = 22;
let quantidadeDeAcertos = 0;
let perguntaAtual = 1;

function checarResposta(event) {
    const tagdoelemento = event.target.tagName;

    if (tagdoelemento !== "BUTTON") {
        return;
    }

    const classedobotao = event.target.className;
    const classeopcaocerta = "opcaocerta";

    if (classedobotao === classeopcaocerta) {
        quantidadeDeAcertos++;
    } 

    const divperguntaAtual = document.querySelector('.pergunta-' + perguntaAtual)
    divperguntaAtual.classList.add("escondido");

    perguntaAtual++;

    if (perguntaAtual > ultimapergunta) {
        const divresultado = document.querySelector(
            ".resultado"
        );

    divresultado.classList.remove("escondido");
    
    const textosAcertos = document.querySelector(".acertos");
    textosAcertos.innerText = quantidadeDeAcertos;
    return;   
    }
    
    const divproximapergunta = document.querySelector(
        ".pergunta-" + perguntaAtual
    );

    divproximapergunta.classList.remove("escondido");
    
    const textoperguntaAtual = document.querySelector(".pergunta-Atual");
    textoperguntaAtual.innerText = perguntaAtual;

}

function voltar(event) {

    quantidadeDeAcertos = 0;
    perguntaAtual = 1;

    const divproximapergunta = document.querySelector(".pergunta-" + perguntaAtual);
     divproximapergunta.classList.remove("escondido");  
        
    const textoperguntaAtual = document.querySelector(".pergunta-Atual");
     textoperguntaAtual.innerText = perguntaAtual;

    const divresultado = document.querySelector(".resultado");
     divresultado.classList.add("escondido");


}
