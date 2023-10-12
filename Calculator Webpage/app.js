let outputVal = document.querySelector('#output')

function display(num) {
    outputVal.value = outputVal.value + num
}


function clr() {
    outputVal.value = outputVal.value.slice(-1, 1)
}

function del() {
    outputVal.value = outputVal.value.slice(0, -1)
}

function calculate() {
    if (true)
        outputVal.value = eval(outputVal.value)
}
