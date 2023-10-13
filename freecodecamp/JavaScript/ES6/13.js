function removeFirstTwo(list) {
    const [first, second, ...removeFirstTwo] = list;
    return removeFirstTwo;
  }