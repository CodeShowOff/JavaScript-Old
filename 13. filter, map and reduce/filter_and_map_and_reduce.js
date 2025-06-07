// 'for-each' doesn't return anything but 'filter' returns an array;

// filter():
    const myNums = [1,2,3,4,5,6,7,8,9,10]

    let nums = myNums.filter( (num) => num >= 5);
    // console.log(nums);// [ 5, 6, 7, 8, 9, 10 ]

    nums = myNums.filter((num) => (num >= 5));
    // console.log(nums);// [ 5, 6, 7, 8, 9, 10 ]

    nums = myNums.filter( (num) => {
        return num >= 5;
    } )
    // console.log(nums);// [ 5, 6, 7, 8, 9, 10 ]


    // Note: if we dont use '{}' then we dont need to write 'return' because when we use '{}' we opens a scope so we need to return from that scope;



    // Real-world practice: Applying filters to get only specific items;
    // this is how the data comes from databases:
    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];

    // filter out those books whose genre is history:
    let requiredBooks = books.filter( (book) => book.genre === 'History');
    // console.log(requiredBooks);

    requiredBooks = books.filter( (book) => book.publish >= 1995 && book.genre === 'Science');
    console.log(requiredBooks);


// map():
    const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const newNums = nums2.map(num => num + 10);
    console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ]


// reduce():
    /*
    🔹 Arrays.reduce() is used to ** reduce an array to a single value ** (number, object, array, etc.).  
    🔹 It ** iterates over each element **, updating an ** accumulator ** based on logic provided.  

    **Syntax:**

        array.reduce((accumulator, currentValue) => {
            return updatedAccumulator;
        }, initialValue);

        - `accumulator` → Stores the result as the array processes.  
        - `currentValue` → The current element being processed.  
        - `initialValue` → The starting value of`accumulator`(optional).  
        -  at last it returns the final calculated value;
    */

    // Example: Sum of Numbers:
    const numbers = [10, 20, 30, 40];

    const initialValue = 0;
    const sum = numbers.reduce( function(accumulator, currentValue){

        console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
        return accumulator + currentValue;
    }, initialValue)

    console.log(sum);

    // simplified above code:
    const sum2 = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum2); // 100

    // ** How It Works:**
    //     1️⃣ Start with `acc = 0`(initial value).  
    //     2️⃣ Add each number to `acc`: `0 + 10 → 10`, `10 + 20 → 30`, `30 + 30 → 60`, `60 + 40 → 100`.  



    // Total cost of items in Shopping Cart:
    const shoppingCart = [
        {
            item: 'JS course',
            price: 2999
        },
        {
            item: 'C++ course',
            price: 3999
        },
        {
            item: 'Java course',
            price: 5999
        }
    ]

    const processingFee = 29;
    const totalCost = shoppingCart.reduce( (acc, item) => acc + item.price, processingFee);

    console.log(totalCost);
    


    // Counting Occurrences in an Array
    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

    const fruitCount = fruits.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1;
        return acc;
    }, {});

    console.log(fruitCount);
    /*
    {
    apple: 3,
    banana: 2,
    orange: 1
    }
    */



// Chaining of Methods:
const values = [1,2,3,4,5,6,7,8,9];

const newValues = values.map(num => num * 10)
                        .map(num => num + 1)
                        .filter(num => num >= 40);

console.log(newValues);