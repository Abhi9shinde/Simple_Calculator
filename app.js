const display = document.querySelector('#display');
const butn = document.querySelectorAll('button');

let string = '';

function solve(val) {
    if (val === 'DEL') {
        string = string.slice(0, -1);
        display.value = string;
    }
    else if (val === 'C') {
        clearDisplay();
    }
    else if (val === '=') {
        display.value = calculate();
        string = display.value;
    }
    else {
        string += val;
        display.value = string;
    }
}

//FOR MOUSE CLICK
butn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const value = btn.value;
        solve(value);
    })
})

//FOR KEYBOARD
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key >= '0' && key <= '9' || ['+', '-', '*', '/', '%'].includes(key)) {
        solve(key)
    }
    else if (key === '=' || key === 'Enter') {
        solve('=');
    }
    else if (key === 'C') {
        solve('C');
    }
    else if (key === 'DEL' || key === 'Backspace') {
        solve('DEL');
    }

})
document.ad
function clearDisplay() {
    string = "";
    display.value = "";
}
function calculate() {
    try {
        return eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
        string = '';
    }
}
