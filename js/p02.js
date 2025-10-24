const valorAuto = document.getElementById('valorAuto');
const plazo = document.getElementById('plazo');
const enganche = document.getElementById('enganche');
const pagoInicial = document.getElementById('pagoInicial');
const totalFinanza = document.getElementById('totalFinanza');
const pagoMensual = document.getElementById('pagoMensual');
const calcularBtn = document.getElementById('calcularBtn');
const resultadosDiv = document.getElementById('resultados');


const intereses = [{
    12 : 12.5,
    18 : 17.2,
    24 : 21,
    36 : 26,
    48 : 45
}];

const calcular = ()=>{
    let _valorAuto = valorAuto.value;
    let _plazo = parseInt(plazo.value);
    let _enganche = parseFloat(enganche.value);

    let _pagoInicial = _valorAuto*(_enganche/100);
    let _totalFinanza = (_valorAuto - _pagoInicial) * ( 1 + (intereses[0][_plazo]/100));
    let _pagoMensual = (_totalFinanza/_plazo);

    pagoInicial.value = _pagoInicial;
    totalFinanza.value = _totalFinanza;
    pagoMensual.value = _pagoMensual;
}

calcularBtn.addEventListener('click',calcular);