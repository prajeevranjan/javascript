let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);   // NaN as output

let core = null
let valueInNumbers = Number(core)
console.log(typeof valueInNumbers);
console.log( valueInNumbers);  // 0 as output


//  "33"  => 33
//  "33abc", undefined  ==> NaN
//  null  => 0
//  true => 1, flase  => 0

let isloggedin = 1
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

// 1 => true, 0 => false
//  "" => false , "rajeev" => true

let num = 28
let strnum = String(num)
console.log(typeof strnum)
console.log(strnum)

// ------------ operations -----------

let value = 3
let negvalue = -value
console.log(value)
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)

let str1 = "hello "
let str2 = "rajeev"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + 2);
console.log("1" + 2 + 2);
console.log(1+ 2 + "2");

