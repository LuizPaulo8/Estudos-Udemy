 // nome = 'Luiz'; NÃO FAÇA ISSO, SEMPRE CRIAR USANDO LET OU CONST

 const nome = 'Luiz'; // STRING
 const nome1 = 'luiz'; // STRING
 const nome2 = `Luiz`; // STRING
 const num1 = 10; // NUMBER
 const num2 = 10.52; // NUMBER
 let nomeAluno; //undefined = não aponta pra local nenhuma na memória
 const sobrenomeAluno = null; // nulo -> não aponta pra local nenhum
 const aprovado = true; // boolean = true = sim e false = não (valor lógico)

 //console.log(typeof num2, num2); typeof para ver o tipo do texto

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

