function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}

criaCartao(

    'Geografia ',

    'Qual é a capital da mongolia',

    'Ulaanbaatar'

)

criaCartao(

    'ciências',

    'Nome do maior animal terrestre ?',

    'Elefante'

)

criaCartao(

    'Futebol',

    'Quantas mundiais o Palmeiras tem ?',

    'Nenhuma KSKS'

)

criaCartao(

    'Geografia',

    'Qual o maior oceano do planeta ?',

    'Oceano Pacifico'

  )
