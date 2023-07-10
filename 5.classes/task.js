class PrintEditionItem  {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state = this.state * 1.5
    }

    set state(state) {
        if (state < 0) {
            return this._state = 0
        } else if (state > 100) {
            return this._state = 100
        } else {
            return this._state = state
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem  {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem  {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'novel';
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'fantastic';
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'detective';
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
           this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
          if (book[type] === value) {
            return book;
          }
        }
        return null;
      }

      giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].name === bookName) {
            const book = this.books[i];
            this.books.splice(i, 1);
            return book;
          }
        }
        return null;
      }
}


class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark >= 2 && mark <= 5) {

            if(!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
            }

            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if(this.marks.hasOwnProperty(subject)) {

            if(this.marks[subject].length > 0) {
                return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length
            } else {
                return 0;
            }

        } else {
            return 0;
        }
    }

    getAverage() {
        debugger
        let subjects = Object.keys(this.marks);
        let total = 0;

        for(let i in this.marks) {
            if(this.marks.hasOwnProperty(i)) {
                total += this.getAverageBySubject(i);
            }
        }

        if(total > 0 && subjects.length > 0) {
            return total / subjects.length;
        } else {
            return 0;
        }
    }
}

