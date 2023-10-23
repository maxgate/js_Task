// function findQuadEqn(a, b, c) {
//   // program to solve quadratic equation
//   let root1, root2;

//   // take input from the user
//   let a = prompt("Enter the first number: ");
//   let b = prompt("Enter the second number: ");
//   let c = prompt("Enter the third number: ");

//   // calculate discriminant
//   let discriminant = b * b - 4 * a * c;

//   // condition for real and different roots
//   if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
//   }

//   // condition for real and equal roots
//   else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
//   }

//   // if roots are not real
//   else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     // result
//     console.log(
//       `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//     );
//   }
// }

// console.log(findQuadEqn(1, 6, 5));

//////////////////////////////////////////////////
// JavaScript program to find roots
// of a quadratic equation

// Prints roots of quadratic
// equation ax * 2 + bx + x

function findRoots(a, b, c) {
  // If a is 0, then equation is not
  // quadratic, but linear
  if (a === 0) {
    console.log("Invalid");
    return;
  }

  let d = b * b - 4 * a * c;
  let sqrt_val = Math.sqrt(Math.abs(d));

  if (d > 0) {
    console.log("Roots are real and different");

    console.log(
      (-b + sqrt_val) / (2 * a) + " and " + (-b - sqrt_val) / (2 * a)
    );
  } else if (d == 0) {
    console.log("Roots are real and same");

    console.log(-b / (2 * a) + " and " + -b / (2 * a));
  }

  // d < 0
  else {
    console.log("Roots are complex");

    console.log(
      -b / (2 * a) +
        " + i" +
        sqrt_val / (2 * a) +
        " and " +
        -b / (2 * a) +
        " - i" +
        sqrt_val
    ) /
      (2 * a);
  }
}

let a = 1,
  b = -7,
  c = 12;

findRoots(a, b, c);
// console.log(findRoots());
