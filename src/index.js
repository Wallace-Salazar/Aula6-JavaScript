let dados = ["Luiz", "Thais", "Luanna", 22, true, undefined];
console.log(dados[4]);
for (let indice = 0; indice < dados.length; indice += 2) {
  console.log(`o Elemento de index ${indice} é o nome ${dados[indice]}`);
}

let numbers = [1, 5, 2, 98, 88, 3, 10, 125, 7, 202, 33];

numbers.sort(); // arruma os elementos de uma array em ordem numerica ou alfabetica
console.log(numbers);

//para arrumar o 'erro' na ordem, passamos ao metodo uma função compartiva
numbers.sort(function (a, z) {
  return a - z;
});

console.log(numbers); //.reverse() arrumar uma array de forma inversa

let linguas = ["Java", "Python", "C"];
linguas.unshift("Javascript"); // adiciona um valor no começo da lista
console.log(linguas);

let cidade = ["rio de janeiro", "new york", " caxias"];
cidade.push("madureira"); // adiciona um valor no final da lista
console.log(cidade);

let number = [22, 33, 44, 55];
number.shift(); // remove o primeiro valor da lista
console.log(number);

let numberr = [11, 22, 99, 33];
number.pop(); //remove o ultimo valor da lista
console.log(numberr);

//.splice remove, adiciona ou substitui um elemento especifico da array
//remove
const nome = ["Thayssa", "LUIZ", "Ana"];
nome.splice(1, 2);
console.log(nome);
//adicionar
nome.splice(1, 0, "Luanna");
console.log(nome);
//substituição
nome.splice(2, 1, "Anna");
console.log(nome);

//NO SPLICE O PRIMEIRO PARAMETRO É O INDICE DO ELEMENTO A SER REMOVIDO E O SEUGUNDO É O NUMERO DE ELEMENTOS A SEREM REMOVIDOS
//-------------------------------------------------------------
//Objetos
let dadoss = {};
console.log(dadoss);

/*let dados ={
    chave:'valor'  sintaxe basica do objeto
} */
let dadoos = {
  nome: "João",
  idade: 22,
  telefone: 20505533,
  endereço: ["Bonsucesso", "Barra", "Paris", "eua"]
};
dadoos.comida = "arroz"; // adionando um chave no objeto
delete dados.nome; // deletando um chave no objeto'
console.log(dadoos.endereço[1]);

let dadosss = [
  {
    nome: "Rachel"
  },
  {
    nome: "Ester"
  },
  {
    nome: "Daiana"
  },
  {
    nome: "salazar"
  }
];
console.log(dadosss[2].nome);

let fruit = ["grape", "apple", "banana", "kiwi", "passion fruit"];
// Utilize um método para adicionar um nome inicio do array.
fruit.unshift("pear");
console.log(fruit);

// Utilize um método para remover o último nome do array.
fruit.pop();
console.log(fruit);

// Utilize um método para adicionar dois nomes ao fim do array.
fruit.push("apple", "melancia");
console.log(fruit);

// Utilize um método para remover o primeiro nome do array.
fruit.shift();
console.log(fruit);

// Utilize um método para organizar em ordem crescente o seguinte array:
const numberss = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numberss.sort(function (a, b) {
  return a - b;
});

// Crie um array que receba 5 itens e exiba no console.
let array = [1, 2, 3, 4, 5];
console.log(array);
