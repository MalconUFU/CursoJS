/* //PRIMEIRA FORMA

function pegaMes(mes){

    switch(mes){

        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'marco';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
        default:
            return '';
    }

}

function pegaDia(hoje){

    switch(hoje){

        case 0:
            return 'domingo';
        case 1:
            return 'segunda';
        case 2:
            return 'terca';
        case 3:
            return 'quarta';
        case 4:
            return 'quinta';
        case 5:
            return 'sexta';
        case 6:
            return 'sabado';
        default:
            return '';
    }

}

function zeroAEsquerda(num){

    return num >= 10 ? num : `0${num}`

}

function pegaData(){

    const hoje = new Date();

    const diaTexto = pegaDia(hoje.getDay());
    const mesTexto = pegaMes(hoje.getMonth());

    return `${diaTexto}-feira, ${hoje.getDate()} de ${mesTexto} de ${hoje.getFullYear()} ${hoje.getHours()}:${hoje.getMinutes().toString().padStart(2, '0')}`;


}

function mostraData(){

    const data = document.querySelector('.h1');
    
    data.textContent = pegaData(); //mudar o conteúdo do elemento

}

mostraData();

*/

/* //SEGUNDA FORMA

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
});

*/

//TERCEIRA FORMA - REMOÇÃO DO SWITCH

function pegaMes(mes){

    const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[mes];
    
}

function pegaDia(hoje){

    const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

    return dias[hoje];

}

function zeroAEsquerda(num){

    return num >= 10 ? num : `0${num}`

}

function pegaData(){

    const hoje = new Date();

    const diaTexto = pegaDia(hoje.getDay());
    const mesTexto = pegaMes(hoje.getMonth());

    return `${diaTexto}-feira, ${hoje.getDate()} de ${mesTexto} de ${hoje.getFullYear()} ${hoje.getHours()}:${hoje.getMinutes().toString().padStart(2, '0')}`;


}

function mostraData(){

    const data = document.querySelector('.h1');
    data.textContent = pegaData(); //mudar o conteúdo do elemento

}

mostraData();


