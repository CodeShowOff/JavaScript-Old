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