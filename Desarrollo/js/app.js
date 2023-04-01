let numeroAdivina;
let numerosIngresados = [];
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', comparaNumeros);
function cargaApp()
{
    numeroAdivina = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(numeroAdivina);
}

function comparaNumeros(e)
{
    e.preventDefault();
    console.log('A comparar los numeros');
    let dato = document.getElementById('ingresaNum');
    let numeroIngresado = parseInt(dato.value);
    formulario.reset();
    if(numerosIngresados.includes(numeroIngresado))
    {
        alert('El numero que ingreso ya lo habia ingresado anterormente.');
    }else
    {
        numerosIngresados.push(numeroIngresado);
        agregATabla(numeroIngresado);
        if(numeroAdivina === numeroIngresado)
        {
            alert('Usted acerto al numero aleatorio.');
        }
    }
}

function agregATabla(numeroIngresado)
{
    //Se agregan datos a la tabla
    let contenedor = document.getElementById('tablaNumeros');
    let nuevaLinea = document.createElement('tr');
    let numero = document.createElement('th');
    let estado = document.createElement('th');
    let estadoMuestra = document.createElement('p');
    numero.innerHTML = numeroIngresado;
    numero.className = 'fw-bolder fs-4';
    if(numeroIngresado === numeroAdivina)
    {
        estadoMuestra.innerHTML = 'Correcto';
        estadoMuestra.className = 'fw-bold fs-4 text-success';
    }else
    {
        estadoMuestra.innerHTML = 'Incorrecto';
        estadoMuestra.className = 'fw-bold fs-4 text-danger';
    }
    //Debo insertar la nueva linea en el DOM
    estado.appendChild(estadoMuestra);
    nuevaLinea.appendChild(numero);
    nuevaLinea.appendChild(estado);
    contenedor.appendChild(nuevaLinea);
}