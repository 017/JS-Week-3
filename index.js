// Age Array Functions
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function subtractFirstArrValue(arr) {
  arr.shift();
  console.log(`First Value Removed: ${arr}`);
}

function addNewAgeToArr(arr, val) {
  arr.push(val);
  console.log(`Add New Age: ${arr}`);
}

function ageLoopArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    return sum / arr.length;
  }
  console.log(arr);
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
  return avg;
}

function concatNames(arr) {
  return arr.join();
}

averageLetters(names);
concatNames(names);

let nameLengths = [];
function nameLen(arr) {
  for (let l = 0; l < arr.length; l++) {
    nameLengths.push(arr[l].length);
  }
  let nameLenSum = 0;
  for (let o = 0; o < nameLengths.length; o++) {
    nameLenSum += nameLengths[o].length;
  }
  console.log(`Sum of All Elements in 'nameLengths': ${nameLenSum}`);
}

function concatWord(word, n) {
  let combinedWords;
  for (let w = 0; w <= n; w++) {
    combinedWords += word;
  }
  console.log(`Concat Word Result: ${combinedWords}`);
  return combinedWords;
}

concatWord(word, 3);

function concatName(first, last) {
  let fullName = `${first} ${last}`;
  return fullName;
}
concatName('Robert', 'Ochi');

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

const testArray = [
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
];
console.log(testArray);
greaterThan100(testArray);

function averageArr(arr) {
  let sum = arr.reduce((previous, current) => (current += previous));
  let avg = sum / lengths.length;
  console.log(`averageArray: The average of the elements is ${avg}.`);
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
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
];
const testArr2 = [
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
  Math.random(0, 100),
];
compareArrAvg(testArr1, testArr2);

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    console.log(
      `You choose to buy a drink, as it is hot outside and you have more than 10.50 in your pocket.`
    );
    return true;
  } else {
    if (isHotOutside && moneyInPocket < 10.5) {
      console.log(
        `Despite that you would like to due to how hot it is, you can't buy a drink, as you don't have enough money. (${moneyInPocket})`
      );
    } else if (!isHotOutside) {
      console.log(
        `It's not that hot out, so you don't feel the need to buy a drink.`
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
