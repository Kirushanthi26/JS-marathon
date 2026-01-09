//------------------------------------------------------
//Q13 -steps
/*
 #   
 ##  
 ###
 ####
*/
const steps = (num) => {
  for (let r = 0; r < num; r++) {
    let s = " ";
    for (let c = 0; c < num; c++) {
      if (c <= r) {
        s += "#";
      } else {
        s += " ";
      }
    }

    console.log(s);
  }
};

steps(4);

//------------------------------------------------------
//Q14 -steps
/*
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
*/

for (let r = 0; r < 4; r++) {
  let line = "";
  for (let c = 1; c <= 5; c++) {
    line += "1 ";
  }
  console.log(line);
}

console.log();

//------------------------------------------------------
//Q15 -steps
/**
1 1 1 1
2 2 2 2
3 3 3 3
 */

for (let r = 1; r < 4; r++) {
  let line = "";

  for (let c = 1; c <= 4; c++) {
    line += r + " ";
  }

  console.log(line);
}

console.log();
//------------------------------------------------------
//Q16 -steps
/**
1 1 1 1
3 3 3 3
5 5 5 5
 */

for (let r = 1; r <= 5; r++) {
  if (r % 2 !== 0) {
    let line = "";
    for (let c = 1; c <= 4; c++) {
      line += r + " ";
    }
    console.log(line);
  }
}

console.log();
//------------------------------------------------------
//Q17 -steps
/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/

for (let r = 1; r < 4; r++) {
  let line = "";
  for (let c = 1; c <= 5; c++) {
    line += c + " ";
  }
  console.log(line);
}

//------------------------------------------------------
//Q18 -pyramid
/*
 *
 ***
 *****
 *******
 *********
 */

let totalRows = 5;

for (let r = 1; r <= totalRows; r++) {
  let line = "";

  // add spaces
  for (let s = 1; s <= totalRows - r; s++) {
    line += " ";
  }

  // add stars
  for (let c = 1; c <= 2 * r - 1; c++) {
    line += "*";
  }

  console.log(line);
}
