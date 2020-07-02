
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://digitalinnovation.one");
    //window.location.href = "https://digitalinnovation.one";
}

function trocar(elemento) {
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
   // document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
   // alert("trocar texto");
   elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/* var validar = 0;

function validaIdade(idade){
    //var validar;
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual é sua idade");
console.log(validaIdade(idade));
alert(idade);
alert(validar);
*/



/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

*/


/*
var count = 0;
for(count=0; count <= 5;  count ++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++
    //count = count + 1;
};
*/

/*
var idade = prompt("Qual sua idade")
//var idade = 18
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}
*/


/* var fruta = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(fruta);
alert(fruta[1].nome);
*/

/* var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor); */


/* var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();

console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - ")); */


/* var nome = "Carwyn Valiente";
var idade = 43;
var idade2 = 10;
var frase = "Japão é o melhor país do mundo"
/*alert("meu primeiro js");
alert("Bem-vindo " + nome)
alert(idade + idade2) 
console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase()); */
