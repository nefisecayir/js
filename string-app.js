// STRING APPLICATION

var sentence = " Tagged template literals call a function /the tag function with an array of any text segments from the literal followed by arguments with the values of any substitutions, which is useful for DSLs ";

var url = "https://developer.mozılla.org/en-US/docs/Web/Java Scrıpt/Reference/Template literals";

// number of characters
console.log(sentence.length);

// how many sentences you used?
console.log(sentence.split(' '));

// make sentences all lower case
console.log(sentence.toLowerCase());

// trim the first characters
console.log(sentence.trim());

// cut the / from sentence
console.log(sentence.replace('/'),(' '));

// slice the str from url
var str = 'https://'
console.log(url.slice(str.lenght));

// which protocol url is using?
console.log(url.startsWith('http')); // true
console.log(url.startsWith('https')); // true

// is url includes '.com'?
console.log(url.includes('.com')); // false
console.log(url.indexOf('.org')) 

// make the url correctly
console.log(url.toLowerCase()
               .replace(/ /g,'-') //tüm boşluk karakterlerini - ile değiştirir
               .replace(/ı/g,'i') //bütün ı'ları i ile değiştirir
);









