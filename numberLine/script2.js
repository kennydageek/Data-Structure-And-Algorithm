function solution(operations) {
  // 1. collect all possible obstacle positions
  const coords = [];
  for (let op of operations) {
    if (op[0] === 1) {
      coords.push(op[1]);
    }
  }

  // 2. sort unique
  coords.sort((a, b) => a - b);
  let unique = [];

  for (let x of coords) {
    if (unique.length === 0 || unique[unique.length - 1] !== x) {
      unique.push(x);
    }
  }

  // 3. Binary Indexed Tree
  const bit = new Array(unique.length + 1).fill(0);

  function update(index, value) {
    while (index < bit.length) {
      bit[index] += value;
      index += index & -index;
    }
  }

  console.log(coords, unique, bit);
}

console.log(
  solution([
    [1, 2],
    [1, 5],
    [2, 3, 2],
    [2, 3, 3],
    [2, 1, 1],
    [2, 1, 2],
  ]),
);
