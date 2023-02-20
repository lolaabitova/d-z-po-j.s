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