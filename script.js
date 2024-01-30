document.addEventListener('DOMContentLoaded', function () {
    
    const btnPrimary = document.querySelector('.btnprimary');

    
    btnPrimary.addEventListener('click', function () {
       
        novoelemento();
    });
    
    
    document.querySelector('.list').addEventListener('click', function (event) {
        
        if (event.target.classList.contains('botaook')) {
            event.target.closest('li').remove();
        }
    });

    
    document.querySelector('.btnprimary').addEventListener('click', function () {
        
        adicionarElemento();
    });

    
    document.querySelector('.classes').addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
            adicionarElemento();
        }
    });

    
    function adicionarElemento() {
        
        const input = document.querySelector('.classes');

        
        const textoInput = input.value.trim();

        
        if (textoInput !== '') {
           
            const lista = document.querySelector('.list');

            const novaLi = document.createElement('li');

            
            novaLi.textContent = textoInput;


            const botaook = document.createElement('button');
            botaook.className = 'botaook tamanho-padrao btnok'; 
            botaook.textContent = '✓';

            
            novaLi.appendChild(botaook);

            
            lista.appendChild(novaLi);

            
            input.value = '';
        }
    }
});
