// Numbers

let val;

// val = Number('10');

// val = parseInt('10'); (tam sayıya döndürür)

// val = parseFloat('10.5') (ondalıklı sayıyı yazar)

// val = isNaN('10'); (sayısal değer. nan değil diyor --> sonuç: false)

// val = isNaN('a10'); (sonuç --> true)

// var num = 10.4236457;
// val = num.toPrecision(5); //sayıyı 5. basamağına kadar gösterir

// val = num.toFixed(2); //virgülden sonraki iki basamağı temsil ediyor

val = Math.PI; // pi sayısını gösterir

val = Math.round(2.4); //en yakın sayıya yuvarlar

val = Math.ceil(2.3); //her zaman yukarıya yuvarlar

val = Math.floor(2.8); //her zaman aşağıya yuvarlar

val = Math.sqrt(64); // 8'in kare kökü 8'i alır

val = Math.pow(2,4); // iki üssü üç alır

val = Math.abs(-100); // sayının mutlak değerini alıp sonucu verir

val = Math.min(1,2,3,4,5); // bu sayılar arasındaki en küçük sayıyı bize verir

val = Math.max(1,2,3,4,5); // bu sayılar arasındaki en büyük sayıyı bize verir

val = Math.random(); // bizde o ile 1 arası rastgele sayı üretir

val = Math.floor(Math.random()*100); // iki basamaklı rastgele sayılar
console.log(val);
console.log(typeof val);