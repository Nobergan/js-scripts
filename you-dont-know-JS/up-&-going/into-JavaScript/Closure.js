function makeAdder(x) {
  // параметр `x` - внутренняя переменная

  // внутренняя функция `add()` использует `x`, поэтому
  // у нее есть "замыкание" на нее
  function add(y) {
    return y + x;
  }

  return add;
}

// `plusOne` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
let plusOne = makeAdder(1);

// `plusTen` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
let plusTen = makeAdder(10);

// plusOne = makeAdder(3); // 4  <-- 1 + 3
// plusOne = makeAdder(41); // 42 <-- 1 + 41

plusTen(13); // 23 <-- 10 + 13

console.log(plusOne(3));
console.log(plusOne(41));

console.log(plusTen(13));
