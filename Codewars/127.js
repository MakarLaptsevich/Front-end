Task
Given a list of unique numbers sorted in ascending order, return a new 
list so that the values increment by 1 for each index from the minimum 
value up to the maximum value (both included).




function pipeFix(numbers){
    const arr = [];
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }