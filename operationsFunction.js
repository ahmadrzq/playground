const operations = {
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  mod: function (a, b) {
    return a % b;
  },
};

function calculate(a, b, operation) {
  return operations[operation](a, b);
}
console.log(calculate(90, 2, "mul"));
