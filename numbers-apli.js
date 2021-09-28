// NUMBER APLLICATION

var num = 15.48284843;

console.log(num.toPrecision(3)); // baştan itibaren 3 basamaklı sayı yazar

console.log(num.toFixed(4)); // sadece ondalıklı kısımdan sonraki 4 sayıyı yazar

console.log(Math.round(num)); // en yakın tam sayıya yuvarlama

console.log(Math.ceil(num)); 

console.log(Math.floor(num));

console.log(Math.min(1,2,5,9));
console.log(Math.max(1,2,5,9));

//sayı aralığıyla rastgele sayı üret

var min = 50;
var max = 100;

console.log(Math.random()*max); // üretilen sayı 0 ile 100 arası olur

console.log(min+Math.random()*max); // 50 ile 150 arası sayılar

console.log(min+Math.random()*(max-min)) // 50 ile 100 arası ondalıklı sayılar

/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas*0.25

console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2));
