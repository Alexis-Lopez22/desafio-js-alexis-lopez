let numero = Number(prompt("Ingrese un número: "));

for (let i = 1; i <= 10; i++){
    let resultado = numero * i
    document.write(`${numero} x ${i} = ${resultado}` + `<br />`);
}

