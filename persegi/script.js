// conversion

const textBox = document.getElementById("textBox");
const hitung = document.getElementById("hitung");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
let k;
let l;
let s;



function convert(){
  if(hitung.checked){
    s = Number(textBox.value);
    k= s * 4 ;
    result1.textContent = "keliling nya adalah : "+ k ;
    l = s * s ;
    result2.textContent = "luas nya adalah : "+ l ;
  }else{
    result1.textContent ="select the unit";
  }
}