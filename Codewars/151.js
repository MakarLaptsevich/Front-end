Given a random non-negative number, you have to return the digits of 
this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]




function digitize(n) {
    const arr = n.toString().split("").reverse();
    for ( let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
    }
    return arr;
  }