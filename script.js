const myLibrary = [];
const libraryStand = document.querySelector(".library");
const bookForm = document.querySelector("#book-form");
const submitButton = document.querySelector("input[type=submit]");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function displayLibrary(library) {
    library.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book");

        const bookData = document.createElement("p");
        bookData.textContent = `Title: ${book.title}, author: ${book.author}, number of pages: ${book.pages}.`;
        bookContainer.appendChild(bookData);

        libraryStand.appendChild(bookContainer);
    });
}

function submitClick(event) {
    event.preventDefault();
    const formData = new FormData(bookForm);
    bookForm.reset();

    addBookToLibrary(formData.get("title"), formData.get("author"), formData.get("pages"));
    displayLibrary(myLibrary);    
}

submitButton.addEventListener("click", submitClick);
displayLibrary(myLibrary);