'use strict'

const pessoas = [
    {
        nome: 'Eu',
        mensagem: 'anotações',
        quantidade: '2',
        tempo: 'Agora ',
        foto: 'eu.jfif',
        contato: 'Julia'
    },
    {
        nome: 'Biel',
        mensagem: 'Vou sair hoje, vc vem?',
        quantidade: '3',
        tempo: 'Há 5 minutos',
        foto: 'biel.jfif',
        contato: 'Julia'
    },
    {
        nome: 'Mamis',
        mensagem: 'Ja comprou sua roupa?',
        quantidade: '5',
        tempo: 'Há 1 minuto',
        foto: 'img.2.mamae.jfif',
        contato: 'Julia'
    },
    {
        nome: 'Papai',
        mensagem: 'Filha, ja fiz o pix.',
        quantidade: '1',
        tempo: 'Há 25 minutos',
        foto: 'img.4.pai.jfif',
        contato: 'Julia'
    }
]

function mostrarCards(pessoas){

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoas.foto}`
    img.alt = pessoas.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('informacoes')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = pessoas.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('qtdMensagem')
    qtdMensagem.textContent = pessoas.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoas.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoas.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = pessoas.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

pessoas.forEach(mostrarCards)