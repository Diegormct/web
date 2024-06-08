var currentMatricula = null;

function assignMatricula() {
    var userNumber = document.getElementById('user-number').value;

    
    if (userNumber.trim() === '') {
        alert('Por favor, ingresa un número de usuario válido.');
        return;
    }

   
    var userNumberInt = parseInt(userNumber, 10);

    
    if (isNaN(userNumberInt) || userNumberInt < 1 || userNumberInt > 30) {
        alert('El número de usuario debe estar entre 1 y 30.');
        return;
    }

    var matricula = generateMatricula(userNumberInt);

    if (currentMatricula) {
        currentMatricula.remove();
    }

    displayMatricula(matricula);
}

function generateMatricula(userNumber) {
    
    return '1234567890' + userNumber; 

function displayMatricula(matricula) {
    
    var matriculaElement = document.createElement('p');
    matriculaElement.textContent = 'Tu matrícula asignada es: ' + matricula;

    var matriculaQuestion = document.getElementById('matricula-question');

    matriculaQuestion.parentNode.insertBefore(matriculaElement, matriculaQuestion);

    currentMatricula = matriculaElement;
}
