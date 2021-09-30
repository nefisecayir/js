// ARRAYS APPLICATTION

// CREATE AN ARRY HAS "BMW, MERCEDES, OPEL, MAZDA" ELEMENTS

var arr = ["BMW", "Mercedes", "Opel", "Mazda"]

console.log(arr)
console.log(typeof arr)

// HOW MUCH ELEMENTS THIS ARRAY CONTAINS?
    console.log(arr.length)

// WHAT IS THE FIRST AND LAST ELEMANTS OF THIS ARRAY?
    // console.log(arr[0]); // first elements
    // console.log(arr[3]);
    // console.log(arr.length-1); // last element

// ADD "RENAULT" TO END OF THE ARRAY
    // arr[arr.length] = "Renault";
    // arr.push('Renault');


// ADD "Seat" TO BEGINNING OF THE ARRAY
   //  arr.unshift('Seat');


// REMOVE (SHIFT) THE "SEAT" ELEMENT
    // arr.shift('Seat'); (en baştan siler)

// REMOVE (POP) THE "TOYOTA" ELEMENT
   //  arr.pop('Toyota'); (baştan elemanı siler)

// REVERSE THE ELEMENTS
    // arr.reverse();

// SET THE ELEMENTS SORT OF ALPHABET
    // arr.sort();

// LINE UP [1,2,5 80]
var numbers = [1,2,5,80,15];
console.log(numbers.sort());

// IS OPEL AN ELEMENT OF THE ARRAY?
    // console.log(arr.indexOf('Opel')); 
      // (bize kaçıncı eleman olduğunu gösterdi, eğer elemanı olmasaydı -1 gösterecekti)
    // console.log(arr.includes('Opel'));

// TURN "var str= "Chevrolet, Dacia" INTO ARRAY
    var str= "Chevrolet, Dacia"
    var arr2 = str.split(',');
    console.log("array2",arr2)

// PUT (CONCAT) 2 ARRAY'S ELEMENTS TOGETHER WITH ANOTHER ARRAY
    var arr3 = arr.concat(arr2);
    console.log("array3",arr3); 
        // 6 elemanlı dizi haline geldi
    
// REMOVE (POP/SPLICE) LAST 2 ELEMENTS FROM ARR3
    // console.log(arr3.pop());
    // console.log(arr3.pop());
    // console.log(arr3.splice(4,2));
        // 4'den başlayıp iki eleman silindi yani son iki elemanı silmiş olduk

/* HIDE THESE ELEMENTS IN AN ARRAY
    employee1: Nefise Çayır 2001
    employee2: Medine Çayır 1999
    employee3: Bilal Çayır 2004
*/

var employee1 = ['Nefise','Çayır',2001]
var employee2 = ['Medine','Karaaslan',1999]
var employee3 = ['Bilal','Çayır',2004]

var employees = [employee1, employee2, employee3];

console.log(employees)

/* console.log(employees[0]);
    (employee1'ı verir)
*/

/* console.log(employees[0][0]);
    (Nefise'yi verir)
*/

/* console.log(employees[1][1]);
    (Karaaslan'ı verir)
*/








