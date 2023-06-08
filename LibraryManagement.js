// Sample book data
const books = [{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        subject: 'Classic',
        publishDate: '1925',
        image: 'great-gatsby.jpg'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        subject: 'Classic',
        publishDate: '1960',
        image: 'to-kill-a-mockingbird.jpg'
    },
    // Add more books here with their respective properties
    {
        title: '1984',
        author: 'George Orwell',
        subject: 'Dystopian',
        publishDate: '1949',
        image: '1984.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        subject: 'Classic',
        publishDate: '1813',
        image: 'pride-and-prejudice.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        subject: 'Coming-of-age',
        publishDate: '1951',
        image: 'catcher-in-the-rye.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        subject: 'Fantasy',
        publishDate: '1937',
        image: 'the-hobbit.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'To Kill a Kingdom',
        author: 'Alexandra Christo',
        subject: 'Young Adult Fantasy',
        publishDate: '2018',
        image: 'to-kill-a-kingdom.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        subject: 'Fiction',
        publishDate: '1988',
        image: 'the-alchemist.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        subject: 'Young Adult Dystopian',
        publishDate: '2008',
        image: 'the-hunger-games.jpg'
    },
    // Add more books here with their respective properties
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        subject: 'Fantasy',
        publishDate: '1997',
        image: 'harry-potter.jpg'
    }
];
// ...rest of the code remains the same...


// Display the book list
function displayBooks(pageNumber = 1) {
    const booksPerPage = 10;
    const startIndex = (pageNumber - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    const filteredBooks = getFilteredBooks();
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    paginatedBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = 'Author: ' + book.author;

        const subject = document.createElement('p');
        subject.textContent = 'Subject: ' + book.subject;

        const publishDate = document.createElement('p');
        publishDate.textContent = 'Publish Date: ' + book.publishDate;

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(subject);
        bookDiv.appendChild(publishDate);

        bookList.appendChild(bookDiv);
    });

    displayPagination(pageNumber, filteredBooks.length, booksPerPage);
}

// Filter the books based on user input
function getFilteredBooks() {
    const filterTitle = document.getElementById('filterTitle').value.toLowerCase();
    const filterAuthor = document.getElementById('filterAuthor').value.toLowerCase();
    const filterSubject = document.getElementById('filterSubject').value.toLowerCase();
    const filterPublishDate = document.getElementById('filterPublishDate').value;

    return books.filter(book => {
        return (
            book.title.toLowerCase().includes(filterTitle) &&
            book.author.toLowerCase().includes(filterAuthor) &&
            book.subject.toLowerCase().includes(filterSubject) &&
            (filterPublishDate === '' || book.publishDate === filterPublishDate)
        );
    });
}

// Display pagination links
function displayPagination(currentPage, totalBooks, booksPerPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalBooks / booksPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.classList.toggle('active', i === currentPage);
        pageLink.addEventListener('click', () => {
            displayBooks(i);
        });

        pagination.appendChild(pageLink);
    }
}

// Load the initial book list
displayBooks();