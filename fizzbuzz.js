function esMultiploDe(multiplo, numero)
{
  return numero%multiplo === 0;
}

function generarFizzBuzzDe(numero){
  let valorGenerado;
  if(esMultiploDe(15,numero)){
    valorGenerado = "FizzBuzz";
  }
  else if(esMultiploDe(3,numero)){
    valorGenerado = "Fizz";
  }
  else if(esMultiploDe(5,numero)){
    valorGenerado = "Buzz";
  }
  else{
    valorGenerado = numero.toString();
  }
  return valorGenerado;
}

function generarCadenaFizzBuzz(){ 
  var cadenaFizzBuzz = [];
  for(contador = 0; contador<100;contador++){
    cadenaFizzBuzz[contador] = generarFizzBuzzDe(contador);
  }
  return cadenaFizzBuzz;
}

module.exports = {
  generarCadenaFizzBuzz: generarCadenaFizzBuzz,
  generarFizzBuzzDe: generarFizzBuzzDe
}

