let numeroAdivina;
let numerosIngresados = [];
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', comparaNumeros);

let botonNumero = document.getElementById('btNumero');

function cargaApp()
{
    numeroAdivina = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(numeroAdivina);
}

function comparaNumeros(e)
{
    e.preventDefault();
    let dato = document.getElementById('ingresaNum');
    let numeroIngresado = parseInt(dato.value);
    formulario.reset();
    if(numerosIngresados.includes(numeroIngresado))
    {
        alert('El número que ingreso ya lo habia ingresado anterormente. Revise la tabla >:(');
    }else if(numeroIngresado > 100 || numeroIngresado <= 0)
    {
        alert('El número que ingreso es menor a 0 o mayor que 100. Por favor lea las indicaciones que para algo estan >:(')
    }else if(numerosIngresados.length < 10)
    {
        numerosIngresados.push(numeroIngresado);
        agregATabla(numeroIngresado);
        if(numeroAdivina === numeroIngresado)
        {
            alert('Usted acerto al número aleatorio.');
            modificarBoton();
        }
    }else
    {
        alert('Mejor suerte la proxima. Usted a ocupado todos sus intentos. Recargue la pagina y vuelva a intentarlo');
        modificarBoton();
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

function modificarBoton()
{
    botonNumero.className = 'btn btn-success disabled';
}