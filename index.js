function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        
        let expression = display.value
            .replace(/sqrt/g, 'Math.sqrt')
            .replace(/sin\(([^)]+)\)/g, (_, p1) => 'Math.sin(${toRadians(p1)})')
            .replace(/cos\(([^)]+)\)/g, (_, p1) => 'Math.cos(${toRadians(p1)})')
            .replace(/tan\(([^)]+)\)/g, (_, p1) => 'Math.tan(${toRadians(p1)})')
            .replace(/pow/g, 'Math.pow');
        
       
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function toggleScientific() {
    const scientificButtons = document.querySelector('.scientific-buttons');
    scientificButtons.classList.toggle('hidden');
}
