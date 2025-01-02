function meuEscopo(){

    //const form = document.getElementsByClassName("form");

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    //Evitar o evento de recarregamento da página
    //primeira maneira:

    //form.onsubmit = function(evento){

        //evento.preventDefault();
        //alert(1);
        //console.log('Foi enviado.');

    //};

    //segunda maneira:

    const pessoas = [];

    function recebeEventoForm(evento){

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();