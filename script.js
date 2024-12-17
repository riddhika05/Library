const add=document.querySelector(".add");
const new_book=document.querySelector(".books");
const myLibrary = [];

function Book(book_name,title,author,pages) {
   this.book_name=book_name;
   this.title=title;
   this.author=author;
   this.pages=pages;
}

function addBookToLibrary() {
  const book=document.createElement("div");
  const b=new Book("B","A");
  console.log(b.book_name);
  book.textContent=b.book_name;
  new_book.style.color="black";
  new_book.appendChild(book);

}
add.addEventListener('click',addBookToLibrary);

