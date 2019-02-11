
function fizzbuzz(){
  var retorna = [];
  for(cont = 0; cont<100;cont++){
    if(cont % 15 === 0){
      retorna[cont] = "FizzBuzz";
      console.log("FizzBuzz");
    }
    else if(cont % 3 == 0){
      retorna[cont] = "Fizz";
      console.log("Fizz");
    }
    else if(cont % 5 === 0){
      retorna[cont] = "Buzz";
      console.log("Buzz");
    }
    else{
      retorna[cont] = cont.toString();
      console.log(cont);
    }
  }
  return retorna;
}

module.exports = {
  fizzbuzz: fizzbuzz
}

