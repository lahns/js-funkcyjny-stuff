const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
    {title: '333', pages: 401, genre: 'whatever', rating: 6},
];
//PRZYKŁADY:
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//zadania
const countTitleLetters = (book) => book.map((book) => book.title.split(" ").join("").length);
const arePagesEven = (book) => book.filter((book) => book.pages % 2 == 0);
const arePagesOdd = (book) => book.filter((book) => book.pages % 2 != 0);
const genereEndsWithY = (book) => book.filter((book) => book.genre.endsWith("y"));
const isRatingGood = (book) => book.filter((book) => book.rating > 5).length;
const hasNumber = (book) => book.filter((book) => /\d/.test(book.title));
const getTitles = (book) => book.map((book) => book.title);
const secondLongest = (titles) => titles.sort((a,b) => b.length - a.length)[1];

const titleLengtsForBooksWithEvenPagesAndGenreEndingWithY = compose(countTitleLetters,arePagesEven,genereEndsWithY);
const booksWithPositiveRankingOddPageNumberAndTitleWithANumber = compose(isRatingGood,arePagesOdd, hasNumber);
const bookWithSecondLongestTitle = compose(secondLongest,getTitles);

console.log(titleLengtsForBooksWithEvenPagesAndGenreEndingWithY(books));
console.log(booksWithPositiveRankingOddPageNumberAndTitleWithANumber(books));
console.log(bookWithSecondLongestTitle(books));