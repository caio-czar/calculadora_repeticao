//do {
   // console.log("um é igual a um.");
//} while (1==1);
do {
    console.log("----------------------")
    console.log("[1]- Adição");
    console.log("[2]- Subutração");
    console.log("[3]- Multiplicação");
    console.log("[4]- Divisão");
    console.log("----------------------")
    var soma, subtracao, divisao, multiplicacao;
    var numero = parseInt(prompt("Digite um opção: "));
    
    var numero1= parseInt(prompt("Digite o primeiro número: "));
    var numero2 = parseInt(prompt("Digite o segundo número: "));
    
    soma= numero1 + numero2;
    sub = numero1 - numero2;
    multi = numero1 * numero2;
    div = numero1 / numero2;
    
    
    
    
    if(numero == 1){
       console.log("o resultado da soma é:", soma);
    }else if(numero == 2){
       console.log("o resultado da subtração é:", sub);
    }else if (numero == 3){
        console.log("o resultado da multiplicação é:", multi);
    }
     else if (numero == 4){
      console.log("o resultado da divisão é: ", div)
     }
     else
        console.log(":)")
    var continua = parseInt(prompt("você deseja continuar ? [pressione 1 para sim] / [pressiona 2 para não]: "))
    } while (continua == 1);