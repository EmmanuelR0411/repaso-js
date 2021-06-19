let num1 = prompt('Ingrese un numero: ');
let num2 = prompt('Ingrese un numero: ');

if (!isNaN(num1) || !isNaN(num2) && !isNaN(num1) && !isNaN(num2)){
    if (num1 == num2){
        document.write(`<h2>Los numeros son iguales</h2>`);
    } else if (num1 > num2){
        document.write(`<h2>El numero ${num1} es mayor que el numero ${num2}</h2>`);
    }else{
        document.write(`<h2>El numero ${num2} es mayor que el numero ${num1}</h2>`);
    }
}else{
    document.write(`<h2>Te dije numeros :p</h2>`);    
}
