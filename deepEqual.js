// some examples in python pseudo-code
// >> equals({"key1" : "value",
//            "key2" : {"key3": 1}},
//           {"key1" : "value",
//            "key2" : {"key3": 1}})
// >> true
// >> equals({"key1" : "value1",
//            "key2" : {"key3": 1},
//            "key4" : "value2"},
//           {"key1" : "value",
//            "key2" : {"key3": 1}})
// >> false

// Solution 1
// I decided to compare these two objects using JSON.stringify. This method just mostly cares
// about the content of each object rather than the checking to see if both objects are contained in the same memory location
// But I'm probably going to guess this isn't what you are looking for
const deepEquality = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};


// Solution 2
// The time complexity here in this solution is pretty tricky. I iterated through an object to grab the keys and values (This is linear time or O(n)).
// But then we have a conditional here where if the value is an object then, we will call the same function again, also known as recursion.
// Recursions can be tricky, and I don't have that much experience with the time complexity of a recursion.
// So i will make an educated guess, the time complexity for this solution is 2^n or n!
// and the space complexity is constant or O(1).
const deepEquality2 = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false;

    if (typeof obj1[key] === 'object') {
      let isEqual = deepEquality2(obj1[key], obj2[key])
      if (!isEqual) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false
    };
  }

  return true;
}

console.log(
  deepEquality2(
    { "key1": "value", "key2": { "key3": 1 } },
    { "key1": "value", "key2": { "key3": 1 } }
  )
);

console.log(
  deepEquality2(
    {"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
    {"key1" : "value", "key2" : {"key3": 1}})
);