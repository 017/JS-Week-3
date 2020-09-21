// Age Array Functions
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(`Ages Array: ${ages}`);

function subtractFirstArrValue(arr) {
  arr.shift();
  console.log(`First Value Removed: ${arr}`);
}

function addNewAgeToArr(arr, val) {
  arr.push(val);
  console.log(`Add New Age: ${arr}`);
}

function ageLoopArr(arr) {
  let sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    let avgAge = sum / arr.length;
    return sum / arr.length;
  }
  console.log(`Average Age: ${avgAge}`);
}

subtractFirstArrValue(ages);
addNewAgeToArr(ages, 77);
ageLoopArr(ages);

//
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function averageLetters(arr) {
  let lengths = [];
  for (let j = 0; j < arr.length; j++) {
    lengths.push(arr[j]);
  }
  let sum = lengths.reduce((previous, current) => (current += previous));
  let avg = sum / lengths.length;
  console.log(`Average Number of Letters Per Name: ${avg} (${arr})`);
  return avg;
}

function concatNames(arr) {
  result = arr.join();
  console.log(`Concatenate Names: ${result} (${arr})`)
  return result;
}

averageLetters(names);
concatNames(names);

let nameLengths = [];

function nameLen(arr) {
  for (let l = 0; l < arr.length; l++) {
    nameLengths.push(arr[l].length);
  }
  console.log(`NameLengths: ${nameLengths}`);
  let nameLenSum = 0;
  for (let o = 0; o < nameLengths.length; o++) {
    nameLenSum += nameLengths[o].length;
  }
  console.log(`Sum of All Elements in 'nameLengths': ${nameLenSum} (${arr})`);
}
nameLen(names);

function concatWord(str, n) {
  let combinedWords = '';
  for (let w = 0; w < n; w++) {
    combinedWords += str;
  }
  console.log(`Concat Word Result: ${combinedWords}`);
}

concatWord('word', 3);

function concatName(first, last) {
  let fullName = `${first} ${last}`;
  return fullName;
}
console.log(`Concat Name: ${concatName('Robert', 'Ochi')}`);

function greaterThan100(numberArr) {
  let sum = numberArr.reduce((previous, current) => (current += previous));
  if (sum > 100) {
    console.log(`greaterThan100: ${numberArr} is greater than 100. (True)`);
    return true;
  } else {
    console.log(
      `greaterThan100: ${numberArr} is not greater than 100. (False)`
    );
    return false;
  }
}

// add a little randomness to this so it can be tested properly
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const testArray = [
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
];
greaterThan100(testArray);

function averageArr(arr) {
  let sum = arr.reduce((previous, current) => (current += previous));
  let avg = sum / arr.length;
  console.log(`averageArray: The average of the elements is ${avg}.`);
  return avg;
}

function compareArrAvg(arr1, arr2) {
  let arr1Avg = averageArr(arr1);
  let arr2Avg = averageArr(arr2);

  if (arr1Avg > arr2Avg) {
    console.log(
      `The average of ${arr1} is ${arr1Avg}, which is greater than ${arr2}'s average of ${arr2Avg}. (True)`
    );
    return true;
  } else {
    console.log(
      `The average of ${arr2} is ${arr2Avg}, which is greater than ${arr1}'s average of ${arr1Avg}. (False)`
    );
    return false;
  }
}
const testArr1 = [
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
];
const testArr2 = [
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
  getRandomInt(1, 100),
];
compareArrAvg(testArr1, testArr2);

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    console.log(
      `willBuyDrink: You choose to buy a drink, as it is hot outside and you have more than 10.50 in your pocket. (isHotOutside: ${isHotOutside}, moneyInPocket: ${moneyInPocket})`
    );
    return true;
  } else {
    if (isHotOutside && moneyInPocket < 10.5) {
      console.log(
        `willBuyDrink: Despite that you would like to due to how hot it is, you can't buy a drink, as you don't have enough money. (isHotOutside: ${isHotOutside}, moneyInPocket: ${moneyInPocket})`
      );
    } else if (!isHotOutside) {
      console.log(
        `willBuyDrink: It's not that hot out, so you don't feel the need to buy a drink. (isHotOutside: ${isHotOutside}, moneyInPocket: ${moneyInPocket})`
      );
    }
    return false;
  }
}

willBuyDrink(false, 10);
willBuyDrink(false, 20);
willBuyDrink(true, 10);
willBuyDrink(true, 35);

// function for removing vowels from a string
function disemvowel(str) {
  let newStr = '',
    i;

  for (i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i].toLowerCase())) continue;
    newStr += str[i];
  }
  return newStr;
}

const pt = disemvowel('Promineo Tech');
console.log(`Disemvowel: ${pt}`);