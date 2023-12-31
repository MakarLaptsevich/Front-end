Given a non-empty array of integers, return the result of multiplying 
the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
  let mul = 1;
  for ( i = 0; i < x.length; i++) {
    mul *= x[i];
  }
  return mul;
}