// console.log("naber")
// console.log(1234);
// console.log(true);
// console.log([1, 2, 3])
// console.error("hata oluştu");
// console.warn("bir uyarı oluştu");

// // yorum satırı

// /*

// yorum
// yorum
// yorum

// */

// console.clear();

// // değişkenler

// var age;
// console.log(age);

// age=20;
// console.log(age);

// var fullname='Nefise Çayır'
// console.log(fullname)

// fullname='Leyla Çayır';
// console.log(fullname)

// // değişken tanımlama kuralları

// // sayısal ifadeyle başlayamaz!!

// var 1yas;
//  var_yas2; 
//  var $yas3;

// // komut isimleriyle tanımlama yapılmaz

// var for;
// var switch;

// // birden fazla kelime kullanılamaz

// var ad='Nefise';
// var soyad='Çayır';

// var ad_soyad='Nefise Çayır'
// var adSoyad='Nefise Çayır' 

// // case sansitive (büyük küçük duyarlılığı)

// var firstName='Nefise';
// var Firstname='Çınar';

// // var, let, const

// let city='Adana'
// console.log(city);

// const email='abc@gmail.com'
// console.log(email)

// email=''


// değişken tipleri

// primitive types

  // string
//   let firstName='Nefise';

//   // number
//   let age= 20;
//   let money = 100.5;

//   //Boolean (koşul)
//   let isActive = true;

//   // null (boşluk - değer atanmadı)
//   let job = null;

//   //undefined
//   let car;





//  // referance types - objects

//     // array

//     let names=['Nefise', 'Bilal', 'Medine'];

//     // object

//     let address = {
//         city:'Adana',
//         country:'Türkiye'
//     }

//     // function

//     var calculateAge = function(){
//         return 0;
//     };
     
//   console.log(typeof calculateAge);

// tür dönüşümü

// let num1 = Number('5');
// let num2 =  Number('10');

// let total = num1+num2;

// console.log(total);
// console.log(typeof total);

// let val;


// // number to string
// val = String(10);

// // bool to string
// val = String(true);

// // date to string
// val = String(new Date());

// // array to string
// val = String([1,2,3,4]);

// // toString()

// val = (10).toString();
// val = (false).toString();

// // string to number

// val = Number('10')
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('a');
// val = Number([1,2,3,4]);

// // parseInt (yuvarlayarak yazar)
// //parseFloat (virgüllü kısmını da yazar)

// val = parseInt('10');
// val = parseInt('10.5');
// val = parseFloat('10.5')

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// değişkenler-uygulama

var customerName = 'Nefise';
var customerLastName = 'Çayır'

var fullName = 'Nefise Çayır'
var musteriId = '21231312345';

var total = 205.6;
var gender = 'false'; // erkek true, kadın false

//object
var address = {
    city: 'Adana',
    district: 'Çukurova',
    body: 'Mahfesığmaz mah.'

}


//array
var hobbies = ['Sinema','Kitap','Spor']

// sipariş toplamı

var order1 = Number('100');
var order2 = Number('150');

var totalOrder = order1 + order2
console.log(totalOrder);

var order3 = Number('100.2');
var order4 = Number('150.5');

var totalOrder2 = order3 + order4
console.log(totalOrder2);

var order5 = parseInt('100.2');
var order6 = parseInt('150.5');

var totalOrder3 = order5 + order6
console.log(totalOrder3)

// doğum yılına göre yaş hesaplama

var yearOfBirth = 1986;

console.log(new Date().getFullYear()-yearOfBirth)

// aşağıdaki string ifadenin karakter satısını bul

var course = 'Modern Javascript Kursu';

console.log(course.length);
