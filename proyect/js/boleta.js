function askGrades(cell) {
    const materia = cell.textContent;
    const trimestre1 = prompt(`Ingrese calificación para ${materia} - Trimestre 1:`);
    const trimestre2 = prompt(`Ingrese calificación para ${materia} - Trimestre 2:`);
    const trimestre3 = prompt(`Ingrese calificación para ${materia} - Trimestre 3:`);

    const promedio = calculateAverage(trimestre1, trimestre2, trimestre3);
    if (promedio !== null) {
        const trimestres = [trimestre1, trimestre2, trimestre3];
        for (let i = 0; i < 3; i++) {
            cell.nextElementSibling.textContent = trimestres[0];
            cell.nextElementSibling.nextElementSibling.textContent = trimestres[1];
            cell.nextElementSibling.nextElementSibling.nextElementSibling.textContent = trimestres[2];
            cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = promedio.toFixed(2);
        }
    }
}

function calculateAverage(trimestre1, trimestre2, trimestre3) {
    // Validación de las calificaciones
    const grades = [trimestre1, trimestre2, trimestre3].map(Number);
    if (grades.some(isNaN)) {
        alert("Las calificaciones deben ser números.");
        return null;
    }

    // Cálculo del promedio
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / 3;
}
