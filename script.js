function calcularImc() {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.querySelector('.result')

    altura = parseFloat(altura)
    peso = parseFloat(peso)

    let imc = peso / (altura * altura)

    let mensagem = `${nome}, seu IMC é ${imc.toFixed(2)}. `

    if (imc < 18.5) {
        mensagem += 'Você está abaixo do peso.'
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem += 'Você está com o peso normal.'
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem += 'Você está com sobrepeso.'
    } else {
        mensagem += 'Você está com obesidade.'
    }
    if (!nome) {
        alert('Digite um nome!')
    } else {
        resultado.innerHTML = mensagem
        resultado.style.height = '200px'
    }

}