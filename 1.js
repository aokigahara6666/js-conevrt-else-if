let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

// орг тернальный оператор
// (a>10?a:a*2)>5?2*a)+1:(a<3?1:2*(a-2))>4?5:(a%2==0?6:7);

// if else)
let resultIf;

let leftSide = a > 10 ? a : a * 2;

if (leftSide > 5) {
  resultIf = (2 * a) + 1;
} else {
  let innerLeft = a < 3 ? 1 : 2 * (a - 2);
  if (innerLeft > 4) {
    resultIf = 5;
  } else {
    if (a % 2 == 0) {
      resultIf = 6;
    } else {
      resultIf = 7;
    }
  }
}

console.log("IF...ELSE результат:", resultIf);

// свич
// switch не очень подходит для диапазонов, но можно юзать switch(true)
let resultSwitch;
let leftSideSwitch = a > 10 ? a : a * 2;

switch (true) {
  case leftSideSwitch > 5:
    resultSwitch = (2 * a) + 1;
    break;
  case (a < 3 ? 1 : 2 * (a - 2)) > 4:
    resultSwitch = 5;
    break;
  case a % 2 == 0:
    resultSwitch = 6;
    break;
  default:
    resultSwitch = 7;
}

console.log("SWITCH результат:", resultSwitch);
