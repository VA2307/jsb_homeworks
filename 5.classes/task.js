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
            return this._state
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem  {
    constructor() {
        super(name);
        super(releaseDate);
        super(pagesCount);
        super(state);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem  {
    constructor(author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        super(state);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        super(state);
        this.type = 'NovelBook';
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor(author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        super(state);
        this.type = 'FantasticBook';
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author) {
        this.type = 'DetectiveBook';
        this.author = author;
    }
}