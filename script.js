//right side elements
const display = document.querySelector('#display')
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')

//left side elements
const inputSize = document.querySelector('#input-size')
const inputColor = document.querySelector('#input-color')
const inputBgColor = document.querySelector('#input-bg-color')
const enterText = document.querySelector('#enter-text')
const selectFont = document.querySelector('#select-font')

//call handler function
inputSize.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
enterText.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)

function handleInput() {
    //get input values
    const fontSize = inputSize.value
    const fontFam = selectFont.value
    const fontColor = inputColor.value
    const bgColor = inputBgColor.value
    const text = enterText.value

    display.style.fontSize = fontSize + "px"
    display.style.fontFamily = fontFam
    display.style.color = fontColor
    display.style.backgroundColor = bgColor
    display.innerHTML = text

    showSize.innerHTML = fontSize
    showFont.innerHTML = fontFam
    showColor.innerHTML = fontColor
    showBgColor.innerHTML = bgColor
}