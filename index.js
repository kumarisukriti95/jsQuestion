// Que 1

let randomNoArr = [];

for (let index = 0; index < 20; index++) {
  randomNoArr.push(Math.floor(Math.random() * 100) + 1);
}

randomNoArr.forEach((Element) => {
  if (Element % 2 === 0) {
    console.log(Element);
  }
});

// QUE 2

let consecutiveNoArr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutiveOne = 0;
  let currentConsecutiveOne = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentConsecutiveOne = 0;
    } else {
      currentConsecutiveOne++;
    }
    if (currentConsecutiveOne > maxConsecutiveOne) {
      maxConsecutiveOne = currentConsecutiveOne;
    }
  }
  return maxConsecutiveOne;
};
console.log(findMaxConsecutiveOnes(consecutiveNoArr));

// QUE 3

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
let repeatedNO = null;
for (let i = 0; i < arr.length; i++) {
  if (i !== arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      repeatedNO = arr[i];
    }
  }
}

console.log(`Repeated No is ${repeatedNO}`);

// QUE 4
axios.get("www.example.com/api/get/1 ").then((res) => {
  this.setState({
    err: false,
    data: res,
  }).catch((err) => {
    this.setState({
      err: true,
      errMessage: err.errMessage,
    });
  });
});

// QUE 5

var obj = [
  { id: "4", name: "abc" },
  { id: "10", name: "ab2" },
  { id: "5", name: "ab3" },
  { id: "6", name: "ab4" },
];
obj.sort(function (a, b) {
  return parseFloat(a.id) - parseFloat(b.id);
});
console.log(obj);
