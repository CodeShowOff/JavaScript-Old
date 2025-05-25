const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
const resetButton = document.querySelector('.reset-button')

// console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        // console.log(event)
        // console.log(event.target)
        
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
        }
    })
})

resetButton.addEventListener('click', function (event) {
    body.style.backgroundColor = '#212121';
});
