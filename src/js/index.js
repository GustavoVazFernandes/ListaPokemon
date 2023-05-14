alert("Olá, bem vindo a listagem dos 151 primeiros pokemon! Esse site foi desenvolvido por Gustavo Vaz Fernandes em um projeto de aprendizado de HTML, CSS e JS.");

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    
    body.classList.toggle("modo-escuro")

    if (body.classList.contains("modo-escuro")) {
        imagemBotaoTrocaTema.setAttribute("src", "./imagens/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "./imagens/moon.png");
    }
});