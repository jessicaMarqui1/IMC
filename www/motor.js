alert('funcionou')

function calcIMC(){
    var imc, massa, altura

    massa = document.getElementById('massa').value
    altura = document.getElementById('altura').value

    imc = massa / (altura * altura)

    if(imc <= 18.5) {
        document.getElementById('resultado').textContent = imc + "voce esta abaixo do peso"
    }
    else if ((imc > 18.5) && (imc <= 24.9)) {
        document.getElementById('resultado').textContent = imc + "voce esta no peso ideal"

    }
    else if((imc > 24.9) && (imc <= 29.9)) {
        document.getElementById('resultado').textContent = imc + "você está ligeiramente acima do peso!"
        }
    else if((imc > 29.9) && (imc <= 34.9)) {
        document.getElementById('resultado').textContent = imc + "você está com obesidade grau I!"
        }
    else if((imc > 34.9) && (imc <= 39.9)) {
        document.getElementById('resultado').textContent = imc + "você está com obesidade grau II!"
        }
    else if(imc >= 40){
        document.getElementById('resultado').textContent = imc + "você está com obesidade grau III!";
    }
}