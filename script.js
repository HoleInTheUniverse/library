const myLibrary = [];
const libraryStand = document.querySelector(".library");
const bookForm = document.querySelector("#book-form");
const submitButton = document.querySelector("input[type=submit]");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.id = crypto.randomUUID();
}

Book.prototype.bookRead = function() {
    this.isRead = !this.isRead;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function displayLibrary(library) {
    libraryStand.innerHTML = '';

    library.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book");
        bookContainer.setAttribute("data-id", book.id);

        const bookData = document.createElement("p");
        bookData.textContent = `Title: ${book.title}, author: ${book.author}, number of pages: ${book.pages}. Has been read: ${book.isRead}`;
        bookContainer.appendChild(bookData);

        const bookDelete = document.createElement("button");
        bookDelete.textContent = "Delete Book";
        bookDelete.addEventListener("click", deleteClick);
        bookContainer.appendChild(bookDelete);

        const bookRead = document.createElement("button");
        bookRead.textContent = "Change read status";
        bookRead.addEventListener("click", readClick);
        bookContainer.appendChild(bookRead);

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

function deleteClick(event) {
    const bookID = event.target.parentElement.dataset.id;

    myLibrary.splice(myLibrary.indexOf(myLibrary.find(book => book.id === bookID)), 1);
    displayLibrary(myLibrary);
}

function readClick(event) {
    const bookID = event.target.parentElement.dataset.id;

    myLibrary.find(book => book.id === bookID).bookRead();
    displayLibrary(myLibrary);
}

submitButton.addEventListener("click", submitClick);
displayLibrary(myLibrary);