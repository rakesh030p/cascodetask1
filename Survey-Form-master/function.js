let inputs = document.querySelectorAll(".field[required]")
console.log("those are inputs", inputs)
window.addEventListener('load', inputs[0].focus())

inputs.forEach(function(input){
    input.addEventListener('input', function() {
        console.log(`user typed ${input}`)
    })
    input.addEventListener('blur', function(event) {
        const element = event.target
        element.setCustomValidity('')
        let isValid = element.checkValidity()

        if (!isValid) {
            element.setCustomValidity(setErrorMsg(element))
            element.classList.add('invalid')
        } else {
            element.setCustomValidity('')
            element.classList.remove('invalid')
        }

    })
})

const setErrorMsg = (element) => {

    let errorMsg

    switch (element.name) {
        case 'name':
            errorMsg = 'Enter a valid name!'
            break;
        case 'email':
            errorMsg = 'Enter a valid email!'
            break;
        case 'age':
            if (element.value < 18) {
                errorMsg = 'Sorry, we cannot accept your aplication!'
            } else if (element.validity.valueMissing) {
                errorMsg  = 'We need to know how old are you'
            }
            break;
        default:
                errorMsg = 'Please verify this field'
            break;
    }

    return errorMsg
}