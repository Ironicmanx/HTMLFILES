



document.querySelector('button').addEventListener('click',() =>{

const input = document.querySelector('input')
const guess = Number(input.value)

const random_number = Math.floor(Math.random() * 6) + 1

if(guess == random_number){
    alert("Correct!! the number is " + random_number)
}
else{
    alert("Wrong the number is "  + random_number)
}
input.value = ''
input.focus
})