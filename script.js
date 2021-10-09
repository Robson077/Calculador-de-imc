function calculaImc() {
    const altura = document.getElementById("altura").value

    const peso = document.getElementById("peso").value

    const imc = peso / (altura * altura)

    const pegar = document.getElementById("exibir")

    if (imc < 18.5) {
        pegar.innerHTML = "Você está abaixo do peso"
    }

    else if(imc >= 18.5 && imc < 25){
        pegar.innerHTML = "Você está no peso normal"
    }

    else if(imc >= 25 && imc < 30){
        pegar.innerHTML = "Você está com sobrepeso"
    }

    else if(imc >= 30 && imc < 40){
        pegar.innerHTML = "Você está com obesidade"
    }

    else if(imc >= 40){
        pegar.innerHTML = "Você está obesidade grave"
    }
}