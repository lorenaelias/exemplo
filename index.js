window.onload = function () {                               //após o carregamento da pagina, a funcao a seguir é disparada
    buttons = document.querySelectorAll("nav button");      // selecao dos botoes dentro da nav
    for (let button of buttons) {                           // para cada botao nessa lista de botoes selecionados
        button.addEventListener("click", changeTab);        // é feita uma associacao da chamada da funcao changeTab ao evento de clique de cada um deles
    }
    openTab(0);                                             // inicialmente é mostrado o conteudo associado ao botao 0
}

function changeTab(e) {                                      // declaracao da funcao
    const botaoAcionado = e.target;                          // acesso ao botao que foi acionado
    const liDoBotao = botaoAcionado.parentNode;              // acesso ao nó referente ao li desse botao
    const nodes = Array.from(liDoBotao.parentNode.children); // acesso aos filhos do nó pai ul
    const index = nodes.indexOf(liDoBotao);                  // acesso à posicao do li em particular dentro de nodes
    openTab(index);                                          // torna visivel o conteudo associado ao indice 'index'
}

function openTab(i) {                                        // declaracao da funcao
    const tabActive = document.querySelector(".tabActive");  // acesso à tabActive
    if(tabActive !== null) {                                 // testa se é a section ativa
        tabActive.className = "";                            // retira a classe tabActive da section ativa
    }

    const buttonActive = document.querySelector(".buttonActive");   // acesso ao buttonActive
    if(buttonActive !== null) {                                     // testa se é o button ativo
        buttonActive.className = "";                                // retira a classe buttonActive do button ativo
    }

    document.querySelectorAll(".tabs section")[i].className = "tabActive";  // insere a classe tabActive à tab de indice desejado 'i'
    document.querySelectorAll("nav button")[i].className = "buttonActive";  // insere a classe buttonActive ao botao de indice desejado 'i'
}
