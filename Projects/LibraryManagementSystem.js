// 🌍 Global books array (shared across all users)
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

class UserLibrary {
    constructor(userName) {
        this.userName = userName;
        this.lastFilteredBooks = books;
    }

    // 🏷 Filter books based on a single key-value pair
    applyFilter(filterKey, filterValue) {
        this.lastFilteredBooks = books.filter(book => book[filterKey] === filterValue);

        console.log(`📚 ${this.userName} filtered books by ${filterKey} = ${filterValue}`);
    }

    // 🔍 Apply multiple filters at once
    applyMultipleFilters(filters) {
        this.lastFilteredBooks = books.filter(book =>
            Object.keys(filters).every(key => book[key] === filters[key])
        );

        console.log(`📚 ${this.userName} filtered books with conditions:`, filters);
    }

    // 📚 Get all books (auto-prints)
    getAllBooks() {
        this.lastFilteredBooks = books;
        console.log(`📚 ${this.userName} viewed all books.`);
    }

    // ➕ Add a new book
    addBook(book) {
        books.push(book);
        console.log(`✅ ${this.userName} added a new book:`, book);
    }

    // ❌ Remove a book
    removeBook(title) {
        const index = books.findIndex(book => book.title === title);
        if (index !== -1) {
            books.splice(index, 1);
            console.log(`❌ ${this.userName} removed the book: "${title}"`);
        } else {
            console.log(`⚠️ Book "${title}" not found!`);
        }
    }

    // ℹ Get user details
    getUserInfo() {
        console.log(`👤 User Info:`, { user: this.userName });
    }

    // 🖨 Print the last filtered books or all books
    printBooks() {
        console.log(`📖 ${this.userName}'s Books:`, this.lastFilteredBooks);
    }
}

// 🎭 Create users
const user1 = new UserLibrary("Alice");
const user2 = new UserLibrary("Bob");

// 🔥 Users perform different actions
user1.applyFilter('genre', 'Fiction');
user1.printBooks();

user2.getAllBooks();
user2.printBooks();

user2.applyMultipleFilters({ genre: 'Science', publish: 2011 });
user2.printBooks();

user1.addBook({ title: "New Mystery", genre: "Mystery", publish: 2022, edition: 2023 });
user1.getAllBooks();
user1.printBooks();

user2.removeBook("Book One");
user2.getAllBooks();
user2.printBooks();

user1.getUserInfo();
user2.getUserInfo();
