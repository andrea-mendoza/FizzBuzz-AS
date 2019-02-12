function generarValor(numero){
  var valor;
  if(numero % 15 === 0){
    valor = "FizzBuzz";
  }
  else if(numero % 3 == 0){
    valor = "Fizz";
  }
  else if(numero % 5 === 0){
    valor = "Buzz";
  }
  else{
    valor = numero.toString();
  }
  return valor;
}

function fizzbuzz(){
  var auxFizzBuzz = [];
  for(cont = 0; cont<100;cont++){
    auxFizzBuzz[cont] = generarValor(cont);
    console.log(auxFizzBuzz[cont]);
  }
  return auxFizzBuzz;
}

module.exports = {
  fizzbuzz: fizzbuzz,
  generarValor: generarValor
}

