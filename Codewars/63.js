Oh no, Timmy's created an infinite loop! Help Timmy find and fix
 the bug in his unfinished for loop!



 function createArray(number){
    let newArray = [];
    
    for(let i = 1; i <= number; i++){
      newArray.push(i);
    }
    
    return newArray;
  }