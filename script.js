const myLibrary = [];
const libraryStand = document.querySelector(".library");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function displayLibrary(library) {
    library.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book");

        const bookData = document.createElement("p");
        bookData.textContent = `Title: ${book.title}, author: ${book.author}, number of pages: ${book.pages}. ID: ${book.id}`;
        bookContainer.appendChild(bookData);

        libraryStand.appendChild(bookContainer);
    });
}

addBookToLibrary("test", "test author", 30);
displayLibrary(myLibrary);