const cards = document.querySelectorAll(".card");

let hasClicked = false;
let firstCard, secondCard;
let blockCards = false;

function flipCard()
{
    //Se a condição for verdadeira, a função retorna imediatamente, sem executar mais nada.
    if (blockCards) return;

    //Se a variável firstCard for igual ao objeto referenciado no momento, significa que o usuário clicou duas vezes na mesma carta
    if (this === firstCard) return;

    this.classList.add('flip');

    if(!hasClicked)
    {
        hasClicked = true;
        // firstCard recebe o valor do objeto atual
        firstCard = this;
        console.log("Carta1 -> ", firstCard);
        return;
    }
    
    secondCard = this;
    blockCards = true;

    console.log("Carta2 -> ", secondCard);

    checkCards();
}

function checkCards()
{
    // pega o valor do "data-info" presente no html e confere para ver se firstCard e secondCard possuem o mesmo valor
    // se sim (isMatch será true), desabilita as cartas, pois o usuário acertou

    let isMatch = firstCard.dataset.info === secondCard.dataset.info;
    isMatch ? disableCards() : unflipCards();
    // Caso não tenha acertado, as cartas voltam à posição original
}

// Em caso de acerto, desabilita as cartas de mesmo valor
function disableCards()
{
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetCards();
}

function unflipCards()
{
    // Bloqueia todas as cartas até que a função checkCards() valide o acerto
    blockCards = true;

    // Faz as cartas voltarem a posição original
    setTimeout(() => 
    {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCards();
    }, 1000);
}

// Reseta todas as variáveis a cada nova rodada 
function resetCards()
{
    // formato "destructuring assignment", que permite a manipulação de objetos de forma mais precisa, simplificando o código e tornando-o mais legível
    [hasClicked, blockCards] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Função para embaralhar todas as cartas
(function shuffle() {
    cards.forEach(card => {
        /* Gera um número aleatório entre 0 e 3 usando Math.random() que retorna um número
        entre 0 e 1, multiplado por 4 e arredondado para o menor inteiro pelo Math.floor()*/  
        let randomPos = Math.floor(Math.random() * 4);

        /* Define a nova posição da carta com o valor aleatório de randomPos utilizando a propriedade order de flex-items, 
        uma vez que o container é declarado "display: flex;" */
        card.style.order = randomPos;
    });
})();

/* a função shuffle utiliza o método IIFE (Immediately Invoked Function Expression), 
ou seja  é executada imediatamente após ser definida, exemplo:

(function my function ()
{
    let variable;
})();

*/

cards.forEach(card => card.addEventListener('click', flipCard));

