function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  // ориг терн.оператор
  // return (
  //   a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : ''))
  //   + (a === 15 ? 'but a is not 15' : '')
  //   + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ')
  //   + (a % 2 ? ' and a is odd' : ' and a is even ');

  // if/elsr
  function manyChecksIfElse(a) {
    let result = '';

    // 1: a > 10
    if (a > 10) {
      result += 'a is bigger than 10';
    } else {
      result += 'a is less than or equal to 10 ';
      // 1а: a === 5 (вложил в else)
      if (a === 5) {
        result += 'an example of a special case';
      }
    }

    // 2: a === 15
    if (a === 15) {
      result += 'but a is not 15';
    }

    // 3: a > 5
    if (a > 5) {
      result += 'and a is greater than 5';
    } else {
      result += 'and a is less than or equal to 5 ';
    }

    // 4: четность
    if (a % 2) {
      result += ' and a is odd';
    } else {
      result += ' and a is even ';
    }

    return result;
  }

  console.log("IF...ELSE результат:", manyChecksIfElse(a));

  // свичи
  function manyChecksSwitch(a) {
    let result = '';

    // 1: a > 10
    switch (true) {
      case a > 10:
        result += 'a is bigger than 10';
        break;
      default:
        result += 'a is less than or equal to 10 ';
        // 1а: a === 5
        switch (a) {
          case 5:
            result += 'an example of a special case';
            break;
        }
    }

    // 2: a === 15
    switch (a) {
      case 15:
        result += 'but a is not 15';
        break;
    }

    // 3: a > 5
    switch (true) {
      case a > 5:
        result += 'and a is greater than 5';
        break;
      default:
        result += 'and a is less than or equal to 5 ';
    }

    // 4: чётность
    switch (a % 2 !== 0) {
      case true:
        result += ' and a is odd';
        break;
      default:
        result += ' and a is even ';
    }

    return result;
  }

  console.log("SWITCH результат:", manyChecksSwitch(a));
}

manyChecks();
