let click1 = false;
let click2 = false;

let carta1;
let carta2;

let i = 0;

function virarCarta(selected)
{
    let elemento = selected;
    elemento.classList.toggle('flip')
}

function validarClick(carta)
{
    let elemento = document.getElementById(carta);

    console.log(elemento)

    setTimeout(validarCartas, 1000);

    if (!click1 && !click2)
    {
        virarCarta(elemento);
        click1 = true;
        carta1 = elemento; 
    }
    else if (click1 && !click2 && carta1 != elemento)
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

function validarCartas()
{
    if (carta1 != null && carta2 != null)
    {
        if(carta1.src == carta2.src)
        {       
            console.log("carta1", carta1);
            console.log("carta2", carta2);

            carta1.onclick = null;
            carta2.onclick = null;

            click1 = false;
            click2 = false;
            carta1 = null;
            carta2 = null;

            i++;

            console.log(i);

            if (i == 5)
                window.alert("Parabéns, você ganhou!");
        }
        else
            resetarCartas();
    }
}
