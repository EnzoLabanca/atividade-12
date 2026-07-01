let nome = "x";
let senha = "y";
while((nome !== "admin")&&(senha !== "senai123")){
  nome = (prompt("escreva o nome"));
  senha = (prompt("digite a senha"));
    if ((nome == "admin")&&(senha == "senai123")){
    console.log("acesso concedido")}
    else {console.log("acesso negado");
        nome = (prompt("escreva o nome"));
  senha = (prompt("digite a senha"));
    }
}
