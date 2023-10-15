Write a function to convert a name into initials. This kata strictly
 takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



function abbrevName(name){
    const arr = name.split(" ")
    arr[0] = arr[0][0].toUpperCase();
    arr[1] = arr[1][0].toUpperCase();
    return arr[0] + "." + arr[1];
  }