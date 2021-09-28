// DATE OBJECTS

 //Get Methods (istediğimiz kısımları alma metodu)
let d = new Date(); 
    // anlık tam tarih yazılır

console.log(d.getDate());
    // sadece kaçıncı gün

console.log(d.getDay());
    // haftanın kaçıncı günü

console.log(d.getFullYear());
    // sadece yıl bilgisi

console.log(d.getHours());
    // saat bilgisi

console.log(d.getMinutes());
    // dakika bilgisi

console.log(d.getMonth());
    // ay bilgisi

console.log(d.getSeconds());
    // saniye bilgisi

 
 //Set Methods(istediğimiz kısımların bilgisini değiştirme)
 d.setFullYear(2020);
 d.setMonth(12);
 d.setDate(20);
 d.setHours(10);
 d.setMinutes(3)


 // bir doğum günü seçelim

 let birthday = new Date(1990,1,5);

 console.log(d.getFullYear()-birthday.getFullYear());


console.log(d);
console.log(typeof d); // object olduğu için tarihten istediğimiz kısmı seçip yazabiliriz