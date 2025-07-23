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
    libraryStand.innerHTML = '';

    library.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book");
        bookContainer.setAttribute("data-id", book.id);

        const bookData = document.createElement("p");
        bookData.textContent = `Title: ${book.title}, author: ${book.author}, number of pages: ${book.pages}.`;
        bookContainer.appendChild(bookData);

        const bookDelete = document.createElement("button");
        bookDelete.textContent = 'Delete Book';
        bookContainer.appendChild(bookDelete);

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

    myLibrary.forEach(book => {
        if (book.id === bookID) myLibrary.splice(myLibrary.indexOf(book), 1);
    });
    displayLibrary(myLibrary);
}

submitButton.addEventListener("click", submitClick);
libraryStand.addEventListener("click", deleteClick);
displayLibrary(myLibrary);