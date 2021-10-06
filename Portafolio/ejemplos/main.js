
var nombre = 'Franco Caballero';
var altura = 191;

var concatenacion = nombre + ' ' + altura;

//document.write(concatenacion);
var datos = document.getElementById('datos');
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;
if (altura <= 190) {
    datos.innerHTML += '<h1>Es tu altura</h1>';
} else {
    datos.innerHTML += '<h1>No es tu altura</h1>';
}

