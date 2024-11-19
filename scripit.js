var requestURL = "https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/tecnologias.json";

const corpo = document.querySelector("body");
const lista = corpo.querySelector(".lista");


const tecnologia = new XMLHttpRequest();

tecnologia.open("GET", requestURL);
tecnologia.responseType = "json";
tecnologia.send();

tecnologia.onload = function (){
        
    var ferramentas = tecnologia.response;
    var qtdDeTecnologias = ferramentas.tecnologias.length;

    for(let i = 0; i < qtdDeTecnologias; i++){
        
        lista.innerHTML += 
            `<p> <strong>Nome</strong>: ${ferramentas.tecnologias[i].nome}</p>`+
            `<p> <strong>Tipo</strong>: ${ferramentas.tecnologias[i].tipo}</p>`+
            `<p> <strong>Categoria</strong>: ${ferramentas.tecnologias[i].categoria}</p>`+
            `<p> <strong>Descrição</strong>: ${ferramentas.tecnologias[i].descricao}</p>`+
            `<p> <strong>Popularidade</strong>: ${ferramentas.tecnologias[i].popularidade}</p>`+
            `<p> <strong>Ano de lançamento</strong>: ${ferramentas.tecnologias[i].ano_lancamento}</p>`+
            `<p> <strong>Criador</strong>: ${ferramentas.tecnologias[i].criador}</p>`;
            if(i!=2){
                lista.innerHTML +=`<p> <strong>Biblioteca populares</strong>: </p>`
        for (let j = 0; j < 2; j++){
            lista.innerHTML += 
            `<ul> <strong>Nome</strong>: ${ferramentas.tecnologias[i].bibliotecas_populares[j].nome}</ul>`+
            `<ul> <strong>Descrição</strong>: ${ferramentas.tecnologias[i].bibliotecas_populares[j].descricao}</ul>`+
            `<ul> <strong>Ano de lançamento</strong>: ${ferramentas.tecnologias[i].bibliotecas_populares[j].ano_lancamento}</ul>`+
            `<ul> <strong>Desenvolvedor</strong>: ${ferramentas.tecnologias[i].bibliotecas_populares[j].desenvolvedor}</ul>`+
            `<br>`;
        }
    }
        lista.innerHTML += "<hr>";
        
}
}