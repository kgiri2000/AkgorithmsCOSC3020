class UniqueElement {
    constructor(value, occurrences) {
      this.value = value;
      this.occurrences = occurrences;
    }
  }
  
  function permUnique(elements) {
    let set = new Set(elements);
    let listunique = Array.from(set).map((i) => new UniqueElement(i, elements.filter((el) => el === i).length));
    let u = elements.length;
    return permUniqueHelper(listunique, "0".repeat(u).split("").map((i) => parseInt(i)), u - 1);
  }
  function* permUniqueHelper(listunique, result_list, d) {
    if (d < 0) {
      yield [...result_list];
    } else {
      for (const i of listunique) {
        if (i.occurrences > 0) {
          result_list[d] = i.value;
          i.occurrences--;
          for (const g of permUniqueHelper(listunique, result_list, d - 1)) yield g;
          i.occurrences++;
        }
      }
    }
  }
  
  // call like:
  // permUnique([0,0,1,1])
  console.log(Array.from(permUnique([1,2,2])).join('\n'));