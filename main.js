let click1 = false;
let click2 = false;

let carta1;
let carta2;

function virarCarta(selected)
{
    let elemento = selected;
    elemento.classList.toggle('flip')
}

function validarClick(carta)
{
    resetarCartas();

    let elemento = document.getElementById(carta);

    if (!click1 && !click2)
    {
        virarCarta(elemento);
        click1 = true;
        carta1 = elemento;  
    }
    else if (click1 && !click2)
    {   
        virarCarta(elemento);
        click2 = true;
        carta2 = elemento;
    }
}

function resetarCartas()
{
    if (carta1 != null && carta2 != null)
    {
        virarCarta(carta1);
        virarCarta(carta2);
        click1 = false;
        click2 = false;
        carta1 = null;
        carta2 = null;
    }
}
