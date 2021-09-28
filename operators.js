// Operatörler

let val;
const a=10;
const b=5;
let   c=4;
const d=5   

// 1- aritmetik operators (matematiksel hesaplama)

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = c++;
val = ++c;
val = --c;
val = c--;

// 2- atama operators 

val = a;
val +=a; // val burada val + a olur
val -=a; // val burada val - a
val *=a; // val burada val * a
val /=a;
val %=a;

// 3- karşılaştırma operators

val = a==b;
val = b==d;
val = b===d; // değer kontrolü ve type kontrolü
val = a!=b; // eşit değil midir?
val = a!==b;
val = a > b; // a b'den büyük mü?
val = b < a; // b a'dan küçük mü?
val = a >= b; // a b'den büyük mü eşit mi?***
val = 5 >= 5;
val = a <= b;



// 4- mantıksal operators

    // && and operators

   val = (a>b) && (a>c) 
      // 1 v 1 = 1

      // true && true => true
      // true && false => false
      // false && false => false

    
    // || or operators

    val = (a>b) || (a<c) 
       // 1 ^ 0 = 1
    val = (a<b) || (a>c)
       // 0 ^ 1 = 1


    // (!) not operators // bir ifadenin değilini alma

    val = (a>b) // true -1-
    val = !(a>b) // false -0-

        // !true => false
        // !false => true
        
console.log(val);
console.log(typeof val);