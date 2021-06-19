const edad = 80;
let  imprimir = '';
const texto = 'Hola';

//Dentro de los parentesis esta la variable que se va a evaluar
//El default es por si no se cumple ningun caso anterior
switch(texto){
    //En case puedes comparar numeros y cadenas
    case 18:
    imprimir = 'Caso 18';
    break;

    case 20:
        imprimir = 'Caso 20';
    break;

    case 'Hola':
        imprimir = 'Hola'
    break;

    default:
        imprimir = 'Datos por defecto'
    break;

}

document.write(`<h1>${imprimir}</h1>`);