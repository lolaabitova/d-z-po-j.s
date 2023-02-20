// zadacha 1
function yourName(name, surname) {
  console.log("My name is "+ name + " " + surname);
}
yourName("Lola", "Abitova");


// zadacha 2
function konus(height, radius){
  console.log((1 / 3) * height * (radius * radius) * 3.14);
}
konus(10 ,5);
// zadacha 3
function dlinaStroki(x){
  console.log(x.length);
}
dlinaStroki("lola");
dlinaStroki("Mama myla ramu");

// zadacha 4
function chislo(num){
  if (num % 2 === 0){
    console.log("Chislo " + num + " chetnoe");
  }
  else {
    console.log("Chislo " + num + " nechetnoe")
  }
}
chislo(6);

// zadacha 5
function kvadratChisla(x){
  console.log(x ** 2);
}
kvadratChisla(4);
// zadacha 6
function koren(x){
  console.log(x **(1 / 2));
}
koren(16);
// zadacha 7
function perimetr(a, b, c, d, e){
  console.log(a + b + c + d + e);
}
perimetr(5, 5, 6, 9, 4);
// zadacha 8
for (let i = 0; i <= 33; i += 3) {
  console.log(i);
}

// zadacha 9
let result = 1;
let n = 1;
while(n <= 8){
    result *= n++;
}
console.log(result);

// zadacha 10
console.log("Zadacha #10, kvadraty chisel ot 1 do 10");
for (let i = 0; i <= 10; i ++) {
  console.log(i ** 2);
}
// zadacha 11
let sum = 0;
for (let i = 1; i <= 25; i ++) {
  sum += i;
}
console.log(sum);
// zadacha 12
for (let i = 0; i <= 20; i ++) {
  if(i % 2 === 0){
     console.log(i);
  }
}
// zadacha 13
for (let i = 1; i <= 15; i ++) {
  if (i % 2 !== 0){
     console.log(i);
  }
}
// zadacha 14
let massiv = ["lola", "Karakol", "Bishkek"]
massiv.push ("Imya", "gorod", "vozrast");
massiv.unshift("dobavili", "elementy")
console.log(massiv);

// zadacha 15
let arr = [4, 2, 5, 6];
function arraySum(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);

// zadacha 16
let arrChet = [2,3,4,8,10,9,7]
function arraySumchet(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
  if (array[i] % 2 === 0){
    sum += array[i];
  }
    
    }
console.log(sum);
}
arraySumchet(arrChet);
// zadacha 17
let massiv1 = ["I", "like", "to", "eat!"]
let a = "";
for (let i = 0; i< massiv1.length; i++){
  a = a + massiv1[i] + " ";
}
console.log(a);
// zadacha 18
let cifry =  ["one", "two", "three"] ;
let cifry1 = cifry.reverse();
console.log(cifry1);
//  zadacha 19

