 /*
    The Map object holds key - value pairs and remembers the original insertion 
    order of the keys.Any value(both objects and primitive values) may be used as 
    either a key or a value

    Map objects are collections of key - value pairs.A key in the Map 
    may only occur once; it is unique in the Map's collection. A Map 
    object is iterated by key-value pairs — a for...of loop returns 
    a 2-member array of [key, value] for each iteration. Iteration 
    happens in insertion order, which corresponds to the order in 
    which each key-value pair was first inserted into the map by the 
    set() method (that is, there wasn't a key with the same value 
    already in the map when set() was called).
*/

// Its similar to objects but is different and also objects doesnt remembers the insertion order.

const myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

// console.log(myMap);// Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// console.log(myMap.get("a"));
// myMap.set("a", 97);
// console.log(myMap);// Map(3) { 'a' => 97, 'b' => 2, 'c' => 3 }
// console.log(myMap.get("a"));
// console.log(myMap.size);
// myMap.delete("b");
// console.log(myMap.size);


// for loop for map:
for(const key of myMap){
    // console.log(key);
}
// Output:
// ['a', 1]
// ['b', 2]
// ['c', 3]
// but thats not what we wanted so:


for (const [key] of myMap) {
    // console.log(key);
}
// Output:
// a
// b
// c


for (const [key, value] of myMap) {
    console.log(key, ':-', value);
}
// Output:
// a :- 1
// b :- 2
// c :- 3


// Note: For-In loop doesnt works with map as map is not iterable;