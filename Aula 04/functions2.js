n = document.getElementById(number)

const TesteImparPar = (n) => 
    {
        let calculoTeste = n % 2
       let msg = ""

       return (calculoTeste == 1) ? "Número Impar" : "Número Par"
      /*  if (calculoTeste==1) 
        {
            return msg = "Número Impar"
        }
         
              msg = "Número Par"
              return msg
        
    */
    }
console.log(TesteImparPar(38));
console.log(n,TesteImparPar(n));
console.log(TesteImparPar(2036));
console.log(TesteImparPar(1100));