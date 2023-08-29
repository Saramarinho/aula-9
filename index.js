/*sara this is a js file
Sara Marinho
/*A) Exercício de interpretação de código;
1. let array
console.log('a. ', array); // undefined.

array = null
console.log('b. ', array); // null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array length); // 11.

let i = 0
console.log('d. ', array[i]); // 3.

array[i+1] = 19
console.log('e. ', array); // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13].

const valor = array[i+6];
console.log('f. ', valor); // 9.

2.const frase = prompt("Digite uma frase");
console.log(frase.toUpperCase().replaceAll("A, I"), frase.length);
// "SUBI NUM ÕNIBUS EM MIRROCOS" Caracteres 27.

B) Exercício de escrita de código;
1.
let nome = prompt("Qual o seu nome?");
let email = prompt("Qual seu e-mail?");
console.log("O e-mail" +email, "foi cadastrado com sucesso. Seja bem-vinda(o)" +nome);

2.

const comidaP = ["Salpicão", "Fricassêdefrango", "Strogonoff", "Arrozdeforno", "Guacamole"];
console.log(comidaP);
console.log("Essas são as minhas comidas preferidas:")
console.log(comidaP[0]);
console.log(comidaP[1]);
console.log(comidaP[2]);
console.log(comidaP[3]);
console.log(comidaP[4]);

let preferidaC = prompt("Qual sua comida preferida?");
comidaP[1] = preferidaC;
console.log("Nova lista de comidaP:", comidaP);

3. 
*/
 let listaDeTarefas = [];
 listaDeTarefas.push(prompt("Digite 1 tarefas realizadas no seu dia à dia").toString());
 listaDeTarefas.push(prompt("Digite 1 tarefas realizadas no seu dia à dia").toString());
 listaDeTarefas.push(prompt("Digite 1 tarefas realizadas no seu dia à dia").toString());
console.log(listaDeTarefas);

let id = Number(prompt("Digite um índice de uma tarefa que ja foi realizada"));
listaDeTarefas.splice(id, 1);
console.log(listaDeTarefas);


