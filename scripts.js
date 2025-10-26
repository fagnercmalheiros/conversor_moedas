// cotações de moeda do dia

const USD = 5.40
const EUR = 6.27
const GBP = 7.22

// obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// manitpular o imput de amount para receber só número

amount.addEventListener("imput", () => {
    //console.log(amount.value)
    const hasCharacterRegex = /\D+/g //esse regex, pega tudo que não fou número
    amount.value = amount.value.replace(hasCharacterRegex, "") // troca todos os valores não número por espaço em branco

})

// captura do evento submit (enviar) do form

form.onsubmit = (event) => {
    event.preventDefault() //desabilita a atualização dos dados
    //console.log(currency.value)
    switch(currency.value){
        case "USD":
            convertCurrency(Number(amount.value), USD, "US$")
        break
    
        case "EUR":
            convertCurrency(Number(amount.value), EUR, "¢")
        break

        case "GBP":
            convertCurrency(Number(amount.value), GBP, "£")
        break
        }

    }
    

// função para converter a moeda

function convertCurrency(amount , price , symbol){
    //console.log(amount,price,symbol)
    try {
        // mostra a cotação da moeda selecionada
        description.textContent =  `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = Number(amount.value) * price
    

        if(Number.isNaN(total))
        {
            throw new Error("O valor informado não é um número")
        }
        

        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`

        //aplica a classe para exibir o footer mostrando o resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde!")
    }
}

//formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}