export function calcularPromedio(notas) {
    return notas.reduce((a, b) => a + b, 0) / notas.length;
}
export function estaAprobado(promedio) {
    return promedio >= 11;
}
// Comentario para forzar el Pull Request