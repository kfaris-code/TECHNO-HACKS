function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '';
    } catch (e) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1500);
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 100);
    });
});
