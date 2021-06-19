const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

for(let i=0; i < 12 ; i++){
    console.log(`${i+1} mes del año ${meses[i]}`);
    
}

const multiplicar = (numero) =>{
    for(let i=1; i <= 10; i++){
        document.write(`<h2>${numero} x ${i} = ${numero * i}</h2>`)
    }

}

multiplicar(9);