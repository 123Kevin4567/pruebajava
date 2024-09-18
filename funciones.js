let a =20;
let b = 35;
let c = [];

// console.log(typeof c);


// /**
//  * 
//  * @param {*} a 
//  * @param {*} b 
//  * @returns 
//  */

// const sumar = function(a, b) {
//     return a + b;
//   };

//   const resta = function(a, b) {
//     return a - b;
//   };

//   const multiplicar = function(a, b) {
//     return a * b;
//   };

//   const dividir = function(a, b) {
//     return a / b;
//   };
  
  
//   console.log(sumar(a,b));




  const matematicas =function(a,b){
    let resultado = [];
    let suma= a+b;
    let resta= a-b;
    let multiplicar= a*b;
    let dividir= a/b;


//--Aqui se hace un arreglo dentro de un arreglo asi--//

    resultado.push(['Resultado de la suma es',suma]);
    resultado.push(['Resultado de la resta es',resta]);
    resultado.push(['Resultado de la multiplicacion es',multiplicar]);
    resultado.push(['Resultado de la divicion es',dividir.toFixed(2)]);


    return resultado;
  }

  let resultados = matematicas(a,b);

  console.log(resultados);


