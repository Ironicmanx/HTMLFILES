const input = document.querySelector('input')
const output = document.querySelector('output')
const button = document.querySelector('button')


button.addEventListener('click',() => {

const sek = Number(input.value)

const eur = sek * 0.88

output.innerHTML = eur.toFixed(5)

})

c