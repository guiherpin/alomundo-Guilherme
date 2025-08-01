function inserirNome(){
    let nomeUsuario = prompt('Qual o seu nome');
    let elemento = document.querySelector("#nome-usuário");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista');
lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 ={
    nome: 'Guilherme',
    idade: 17,
    anoLetivo: 'Ensino Médio',
    materiasFavoritas: ['Matemática, Português, História']
}

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);