angular.module('librarymanagementApp').service('libraryService', function () {
    //to create unique book id
    var uid = 1;

    //books array to hold list of all books
    var books = [{
        id: 0,
        'bookname': 'Satkahon',
        'authorname': 'Samoresh Mojumdar',
        'serialno': '123456',
        'description': 'A story of a strong girl Dipa.'
    }];

    //save method create a new book if not already exists
    //else update the existing object
    this.savebook = function (book) {
        if (book.id == null) {
            //if this is new book, add it in books array
            book.id = uid++;
            books.push(book);
        } else {
            //for existing book, find this book using id
            //and update it.
            for (i in books) {
                if (books[i].id == book.id) {
                    books[i] = book;
                }
            }
        }
    }

    //simply search books list for given id
    //and returns the book object if found
    this.getbookbyid = function (id) {
        for (i in books) {
            if (books[i].id == id) {
                return books[i];
            }
        }
    }

    //iterate through books list and delete 
    //book if found
    this.deletebook = function (id) {
        for (i in books) {
            if (books[i].id == id) {
                books.splice(i, 1);
            }
        }
    }

    //simply returns the books list
    this.list = function () {
        return books;
    }
});
