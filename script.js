function inserirNome(){
    let nomeUsuario = prompt('Qual o seu nome');
    let elemento = document.querySelector("#nome-usuário");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}