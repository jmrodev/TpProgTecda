let array = [
  
    "m", "a", "k", 1, "d", "z", 2, "r", 3, "g", 4, "h", 5, "j", "e", 6, "n", 7, "o",
    8, "p", "b", 9, "s", 0, "q", "l", "t", "f", 1, "u", 2, "v", 3, "x", "c", 4, "y",
    "i", 5, "w", 6, "b", "a", 7, "d", 8, "f", "m", 9, "z", 0, "j", "n", "g", 1, "p",
    2, "r", 3, "t", 4, "k", "c", 5, "o", 6, "l", 7, "e", 8, "x", "s", 9, "q", 0, "i",
    "u", 1, "v", 2, "w", "h", 3, "y", 4, "a", 5, "d", 6, "f", "c", 7, "k", "b", 8,
    "j", 9, "g", 0, "m", 1, "p", 2, "r", 3, "t", 4, "e", "n", 5, "o", 6, "l", 7, "s",
    "z", 8, "q", 9, "u", 0, "v", 1, "h", 2, "x", "i", 3, "w", 4, "y", 5, "b", 6, "c",
    "f", 7, "m", 8, "d", 9, "a", 0, "k", "r", 1, "p", 2, "j", "g", 3, "n", 4, "o", 
    "t", 5, "s", "l", 6, "e", 7, "x", 8, "u", "q", 9, "v", 0, "h", 1, "w", 2, "i", 
    3, "y", 4, "a", 5, "d", 6, "b", 7, "f", 8, "j", 9, "g", 0, "k", "m", 1, "z", 
    "p", 2, "r", 3, "t", 4, "n", 5, "o", "c", 6, "s", "l", 7, "e", 8, "x", 9, "u", 
    "q", 0, "v", 1, "h", 2, "i", "w", 3, "y", 4, "z", 5, "d", 6, "b", 7, "c", 8, 
    "f", 9, "a", 0, "m", 1, "k", 2, "r", 3, "p", 4, "j", "g", 5, "n", 6, "o", "t", 
    7, "s", "l", 8, "e", 9, "x", 0, "u", "q", 1, "v", 2, "w", 3, "h", 4, "i", 5, "y"
  ];
  
  function findIquals(array, item) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
      if (array[index] === item) {
        count++;
      }
    }
    return [item, count];
  }
  
  function pushArraystoOne(array) {
    let MainArray = [];
    let checked = []; // Array para guardar los elementos que ya hemos contado
    
    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      
      // Si el elemento no ha sido contado, lo contamos y lo añadimos a `checked`
      let alreadyCounted = false;
      for (let j = 0; j < checked.length; j++) {
        if (checked[j] === item) {
          alreadyCounted = true;
          break;
        }
      }
  
      if (!alreadyCounted) {
        MainArray[MainArray.length] = findIquals(array, item);
        checkhtop
        ed[checked.length] = item; // Añadimos el elemento a `checked`
      }
    }
    
    return MainArray;
  }
  
  console.log(pushArraystoOne(array));
  