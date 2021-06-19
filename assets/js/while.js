//MIentras la condicion sea verdadera el ciclo va a continuar
//SE debe buscar que en algun punto la condicion sea falsa
let year = 2021;


/*
while(year != 1990){
    document.write(`<h1>${year}</h1>`);
    year --;
    //Otra forma de romper el ciclo
    if(year == 2010){
        break;
    }
}
*/

//CICLO DO-WHILE
//Primero ejecuta el codigo y despues verifica si la condicion se cumple

do {
    document.write(`<h1>${year}</h1>`);
} while( year == 2020);