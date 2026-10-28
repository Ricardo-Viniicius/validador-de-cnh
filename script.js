document.addEventListener('DOMContentLoaded', function () {
    const forUser = document.getElementById('forUser');
    const cardOculto = document.getElementById('cardOculto');
    const form = document.getElementById('formulario')

    window.showForm = function (formType) {
        if(formType === 'formulario'){
            forUser.classList.remove('hidden')
            cardOculto.classList.add('hidden')

        } else if (formType === 'validacao'){
            forUser.classList.add('hidden')
            cardOculto.classList.remove('hidden')
        }
    }

    showForm('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('name').value.trim();
        const anoNascimento = document.getElementById('birthYear').value;
        const year = Number(anoNascimento);

        const anoAtual = new Date().getFullYear();
        const limite = anoAtual - 90

        if (!anoNascimento || year === 0) {
            alert("Por favor, insira um ano de nascimento válido!");
            return;
        } else if (year > anoAtual) {
            alert("O ano de nascimento não pode ser futuro.");
            return;
        } else if (year < limite) {
            alert("Por favor, insira um ano de nascimento mais recente.");
            return;
        };

        const idade = anoAtual - year

        const tittleCard = document.getElementById('tittle');
        const subTittleCard = document.getElementById('subTittle');
        const parCard = document.getElementById('par');

        if (idade >= 18) {
            tittleCard.innerText = `Olá, ${nome}!`;
            subTittleCard.innerText = "Parabéns!";
            subTittleCard.style.color = "#198754";
            parCard.innerText = `Você tem ${idade} anos e pode dar entrada na sua CNH.`;
        } else {
            tittleCard.innerText = `Desculpe, ${nome}.`;
            parCard.innerText = `Você tem ${idade} anos e não pode dar entrada na sua CNH pois é necessário ter 18 anos ou mais.`;
        };

        showForm('validacao');
    });
});

function voltar(){
    const forUser = document.getElementById('forUser');
    const cardOculto = document.getElementById('cardOculto');
    const form = document.getElementById('formulario');

    form.reset();
    forUser.classList.remove('hidden');
    cardOculto.classList.add('hidden');
}
