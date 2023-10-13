Write a function that returns the total surface area and volume of 
a box as an array: [area, volume]



function getSize(width, height, depth) {
    const arr = new Array(2);
    arr[0] = width * depth * 2 + width * height * 2 + height * depth * 2;
    arr[1] = width * depth * height;
    return arr;
  }
  