// cotações de moeda do dia

const USD = 5.40
const EUR = 6.27
const GBP = 7.22

// obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

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
            convertCurrency(amount.value, USD, "US$")
        break
    
        case "EUR":
            convertCurrency(amount.value, EUR, "¢")
        break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
        break
        }

    }
    

// função para converter a moeda

function convertCurrency(amount , price , symbol){
    //console.log(amount,price,symbol)
    try {
        
    } catch (error) {
        
    }
}