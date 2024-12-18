const add=document.querySelector(".add");
const new_book=document.querySelector(".books");
const myLibrary = [];
const form=document.querySelector(".form");
const overlay=document.querySelector(".overlay");
function Book(title,author,pages) {
   
   this.title=title;
   this.author=author;
   this.pages=pages;
}

function addBookToLibrary() {
  const book=document.createElement("div");
  // const b=new Book("B","A","30");
  // console.log(b.title);
  form.style.display="block";
  overlay.style.display="block";
  book.textContent=b.title;
  new_book.style.color="black";
  new_book.appendChild(book);

}
add.addEventListener('click',addBookToLibrary);

