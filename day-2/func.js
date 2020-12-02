// Sum all valid paswords
module.exports = (input, schema) => {
  const validationFunction = schema === 1 ? validPassword1 : validPassword2;
  return input
    .map(([rule, password]) => {
      return validationFunction(password, rule) ? 1 : 0;
    })
    .reduce((total, value) => total + value);
};

// This is the function that parses the rule into
// its various components (lower, upper and letter)
function parseRule(rule) {
  const [range, letter] = rule.split(" ");
  const [lower, upper] = range.split("-");
  return [letter, lower, upper];
}

// This is the function that applies the logic to establish
// if a password is valid based on the rule for part 1.
function validPassword1(password, rule) {
  const [letter, min, max] = parseRule(rule);
  const appearances = password.split(letter).length - 1;
  return appearances >= min && appearances <= max;
}

// This is the function that applies the logic to establish
// if a password is valid based on the rule for part 2.
function validPassword2(password, rule) {
  const [letter, posA, posB] = parseRule(rule);
  const posACorrect = password[posA - 1] === letter;
  const posBCorrect = password[posB - 1] === letter;

  // Funky way to do XOR using ternary.
  return posACorrect ? !posBCorrect : posBCorrect;
}
