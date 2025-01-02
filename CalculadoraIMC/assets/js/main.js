//capturar as informações do formulario
const form = document.querySelector('#form');

//evitar o envio do formulario
form.addEventListener('submit', function(e){

    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura Inválido', false);
        return;
    }

    const imc = getIMC(peso, altura);

    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;

    setResultado(msg, true);

});

function getNivelIMC(imc){

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc > 39.9) 
        return nivel[5];

    if(imc >= 35 && imc <= 39.9) 
        return nivel[4];

    if(imc >= 30 && imc <= 34.9) 
        return nivel[3];

    if(imc >= 25 && imc <= 29.9) 
        return nivel[2];

    if(imc >= 18.5 && imc <= 24.9) 
        return nivel[1];

    if(imc < 18.5) 
        return nivel[0];

}

function getIMC(peso, altura){

    const imc = peso/(altura*altura);
    return imc.toFixed(2);

}

function criaP(){

    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid)
        p.classList.add('paragrafo-resultado');
    else{
        p.classList.add('paragrafo-resultado-errado');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}