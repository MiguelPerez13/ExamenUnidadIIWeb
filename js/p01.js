const mostrarListaBtn = document.getElementById('mostrarListaBtn');
const limparListaBtn = document.getElementById('limparListaBtn');
const resultadosTxt = document.getElementById('resultados');
const tableBody = document.getElementById('tableBody');

const mostrarLista = async()=>{
    let aprovados = 0;
    let total = 0;
    let alumnos = 0;

    await fetch('../js/calificaciones.json')
    .then(respuesta => respuesta.json())
    .then(datos =>{
        datos.forEach(dato => {
            const fila = document.createElement('tr');

            const celdaMatricula = document.createElement('td');
            celdaMatricula.innerText = dato.matricula;
            fila.appendChild(celdaMatricula);
        
            const celdaNombre = document.createElement('td');
            celdaNombre.innerText = dato.nombre;
            fila.appendChild(celdaNombre);
        
            const celdaCalificacion = document.createElement('td');
            let calificacion = parseFloat(dato.calificacion);
            celdaCalificacion.innerText = calificacion;
            fila.appendChild(celdaCalificacion);

            if(calificacion >= 7 ){
                aprovados++;
            }

            total+= calificacion;
            alumnos++;

            tableBody.appendChild(fila);
        });
    })

    let resultado = `
    <p><strong>Promedio Grupal: </strong>${total/alumnos}</p>
    <p><strong>Numero de aprovados: </strong>${aprovados}</p>
    <p><strong>Numero de reprobados: </strong>${alumnos - aprovados}</p>
    `;

    resultadosTxt.innerHTML = resultado;

}


const limpiarLista = ()=>{
    resultadosTxt.innerText = '';
    tableBody.innerHTML = '';
}


limparListaBtn.addEventListener('click',limpiarLista);
mostrarListaBtn.addEventListener('click',mostrarLista);