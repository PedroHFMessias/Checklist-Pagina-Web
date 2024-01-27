document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão primary
    const btnPrimary = document.querySelector('.btnprimary');

    // Adiciona um ouvinte de evento para o clique no botão primary
    btnPrimary.addEventListener('click', function () {
        // Chama a função novoelemento quando o botão primary é clicado
        novoelemento();
    });
    
    // Adiciona um ouvinte de evento para cliques na lista
    document.querySelector('.list').addEventListener('click', function (event) {
        // Remove o elemento li pai do botão clicado se for um botão de remoção
        if (event.target.classList.contains('botaook')) {
            event.target.closest('li').remove();
        }
    });

    // Adiciona um ouvinte de evento para cliques no botão primary
    document.querySelector('.btnprimary').addEventListener('click', function () {
        // Chama a função adicionarElemento quando o botão primary é clicado
        adicionarElemento();
    });

    // Adiciona um ouvinte de evento para teclas pressionadas no campo de input
    document.querySelector('.classes').addEventListener('keyup', function (event) {
        // Chama a função adicionarElemento se a tecla pressionada for 'Enter'
        if (event.key === 'Enter') {
            adicionarElemento();
        }
    });

    // Função para adicionar um novo elemento à lista
    function adicionarElemento() {
        // Seleciona o campo de input
        const input = document.querySelector('.classes');

        // Obtém o valor do campo de input e remove espaços em branco do início e do fim
        const textoInput = input.value.trim();

        // Verifica se o valor não está vazio
        if (textoInput !== '') {
            // Seleciona a lista
            const lista = document.querySelector('.list');

            // Cria um novo elemento li
            const novaLi = document.createElement('li');

            // Define o texto do elemento li como o valor do campo de input
            novaLi.textContent = textoInput;

            // Cria um botão de remoção (agora chamado botaook) para o novo elemento
            const botaook = document.createElement('button');
            botaook.className = 'botaook tamanho-padrao btnremove'; // Adicionei a classe btnremove
            botaook.textContent = '✓';

            // Adiciona o botão de remoção ao elemento li
            novaLi.appendChild(botaook);

            // Adiciona o elemento li à lista
            lista.appendChild(novaLi);

            // Limpa o valor do campo de input
            input.value = '';
        }
    }
});
