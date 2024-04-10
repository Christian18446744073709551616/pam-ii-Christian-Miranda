function name() {
    let n = 2
    let m = "oi" 
    let a = [0,1,1,2,3,5,8,13,21] 
    let o = {nome: "Christian", idade : "16"}
    //Tipo das variaveis
    console.log(typeof n);
    console.log(typeof m);
    console.log(typeof o);
    console.log(typeof a);
    //rodar o conteudo das variaveis
   console.log(o);
   console.log(a);
   console.log(a[6]);
   //laços de repetição
   a.forEach((el) => 

    console.log( `Elemento : ${el}`)
     )
   console.log(o);
   console.log(o.nome, "tem", o.idade);
    
   // JSON ----- JavaScript Object Notation 
}

console.log(name());