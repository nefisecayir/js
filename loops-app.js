// **LOOPS APPLICATION**

//* 1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
//** puanlama yapın.
//** kullanıcı kaç kerede bileceğini belirtebilsin.


// *Math.random = 0 ile 1 arası sayılar verir.*

var life, bullet;
var guess, tries=0;
var number = Math.floor((Math.random()*10)+1);
bullet = Number(prompt('in how many tries you are gonna find the right number?'))
life = bullet;


console.log(number);
        // *1 ile 9 arası random sayılar verir.*

        while(life>0){
            life--;
            tries++;
            guess = Number(prompt('type a number...'));
        
            if(number==guess){
                console.log(`congrats! you found in ${tries} try!`);
                console.log(`score : ${100 - (100/bullet)}`);
                break;
            }else if(number>guess){
                console.log('higher...');
            }else{
                console.log('lower...');
            }
            if(life==0){
                console.log('no more life left, GAME OVER. the number was : '+number);
            }
        }


// **for (loop)*

// for(let i=0; i<10; i++){
//     console.log(i);
// }
    // *0'dan 9'a kadar sayıları sıralayıp konsola yazar*


// for(let i=0; i<=10;  i++){
//     if(i==9){
//         console.log('my fav number: ' +i);
//         continue;
                // *continue dendiği zaman aynı rakam bir daha yazılmaz, kod 4'den devam eder.*
    
//     }
    
//     if(i==6){
//         console.log('the number i dont like is: 6');
//         break;
                 // *break dendiği zaman o rakam sonrası yazılmaz, kod 6'dan sonra yazılmaya devam etmez. (işletilmez)*
//     }
// console.log(i)
    
// }

// for (let i=10; i>0; i--){
//      console.log(i);
//    }

// let toplam=0;
// for (let i=10; i>0; i--){
//     toplam+=i;
//   }

// console.log(toplam);
            // *10'dan 1'e kadar olan sayıların toplamını yazar



// let result= 1;
// for (let i=13; i>0; i--){
//     console.log('before operation i=' +i+ ' result= ' +result)
//     result+=i;
//     console.log('after operation i=' +i+ ' result= ' +result)
    
//   }

// let val= 1;
// for (let i=15; i<20; i++){
//     val*=i;
//     console.log(val);
// }
// console.log(val);
        // *15'den 19 kadar olan sayıları 1 arttırarak 1 ile çarpıp yazar.*

// let val=1;
// for (let i=15; i<20; i++){
//     if(i%2==0){
//         val*=i;
//     }
    
// }
// console.log(val); 
        // *(sadece çift sayıların çarpımı için if(i%2==0) tek için if(i%2==1))*


// for (let i=0; i<10; i++){

//     for (let j=0; j<10; j++){
//         console.log(`i : ${i} j : ${j}`);
//     }
// }

let val = '\n';
    // *('\n') ile bir alt satıra geçirir.*
for (let i=0; i<10; i++){

    for (let j=0; j<12; j++){
        val += '* ';
    }
    val += '\n';
}

console.log(val);


  


