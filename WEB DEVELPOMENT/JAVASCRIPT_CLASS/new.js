prompt("What do you want to do");
alert("Welcome");

let create_name = "esther";
console.log(create_name);

console.log(45, 34, 48, 39);
console.log("esther", "john", "2003");
console.log(true, false);
console.log({
  name: "daniel",
  age: 45,
  "D-O-B": "25-03,1997",
});

// Array data type
console.log([4, "esther"]);

const HerName = "Hilary";

console.log(10 % 2);
console.log(70 % 15);

// Increament (prefix)

let new_num = 15;
let add_num = ++new_num;
console.log(add_num);
console.log(new_num);

// Increament (postfix)

let new_num_1 = 25;
let add_num_1 = new_num_1++;
console.log(add_num_1);
console.log(new_num_1);

// Assignment Operator

let new_array = [23, 24, false, "esther", false];

// Addition Operator

let additionOperatorNumber = 15;
additionOperatorNumber += 10;
console.log(additionOperatorNumber);

// Subtraction  Operator

let subtractionOperatorNumber = 15;
subtractionOperatorNumber -= 10;
console.log(subtractionOperatorNumber);

// Multiplication Operator

let multiplicationOperatorNumber = 15;
multiplicationOperatorNumber *= 10;
console.log(multiplicationOperatorNumber);

// Division Operator

let divisionOperatorNumber = 10;
divisionOperatorNumber /= 2;
console.log(divisionOperatorNumber);

//  Comparison Operator

//  Equal == Loose
// Not Equal !=
// Strict Equal ===
// Strict Not EQual !=

// Greater than > left to right
// Less than <
// greater than or equal to >=
// less than or equal to <=

console.log("115" == "45");
console.log(45 != 100);
console.log("25" === "25");
console.log(100 > 10);
console.log(100 >= 100);
console.log(10 < 100);
console.log(10 <= 10);

// Logical Opeartor

// Logical And : &&

// Truthy / Falsy

// false
// zero
// Empty Strings
// null
// undefined
// Nan

console.log(Boolean());

// CLASSWORK

let country = "Nigeria";
let continent = "African";
let popultion = 223 + " Million";

console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population:", popultion);

// DATA TYPE

let isIsland = "Nigeria";
let language;
console.log(typeof isIsland);
console.log(typeof popultion);
console.log(typeof country);
console.log(typeof language);

let countryLanguage = "English";

const country_Language = "French";
// country_Language = "Spanish";

// BASIC OPERATOR

let nigeriaPopulation = 200;
let halfPopulation = nigeriaPopulation / 2;
console.log("Population in each half =", halfPopulation, "million");

let population = 300;
population += 1;
console.log(population);

let niajaPopulation = 200;
let finlandPopulation = 100;
let hasMorePopulation = niajaPopulation > finlandPopulation;
console.log(hasMorePopulation);

let myCounty = 200 + "million";
let averagePopulation = 150 + "million";
let hasLessPopulation = myCounty < averagePopulation;
console.log(hasLessPopulation);

let descripton =
  country +
  " is in " +
  continent +
  " and its " +
  popultion +
  " people speakes " +
  countryLanguage;

console.log(descripton);

// STRINGS AND TEMPLATE LITERALS
const HerName1 = "Hilary";
console.log(
  `My name is ${HerName1} and I am ${2025 - 1997} years old. I make $45 annualy`
);

// TYPE CONVERSION

let myName2 = Number("100");
console.log(myName2);

let string = String(false);
console.log(string);

let boolean = Boolean("");
console.log(boolean);

// TYPE COERSION
// Anything aside + convert to number

console.log(10 - "2" + "15");
console.log("23" + "10" - 3);

// '9' - '5'
console.log("9" - "5");

// '19' -'13' +'17';
console.log("19" - "13" + "17");

// '19' -'13' +17;
console.log("19" - "13" + 17);

// '123' < 57;
console.log("123" < 57);

// 5 + 6 +'4' + 9 - 4 - 2 ;
console.log(5 + 6 + "4" + 9 - 4 - 2);