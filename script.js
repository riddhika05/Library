const add=document.querySelector(".add");
const new_book=document.querySelector(".books");
const myLibrary = [];
const form=document.querySelector(".form");
const overlay=document.querySelector(".overlay");
const submit=document.querySelector(".submit");
const books=document.querySelector(".books");
const del=document.querySelector(".del");
const place=document.querySelector(".place_holder");
function Book(title,author,pages) {
   
   this.title=title;
   this.author=author;
   this.pages=pages;
}
function remove(Book)
{
    Book.style.display="none";
}
function createBook(Title,Author,Pages)
{
  const book=document.createElement("div");
  const text=document.createElement("div");
  const text1=document.createElement("p");
  const text2=document.createElement("p");
  const text3=document.createElement("p");
  const text4=document.createElement("p");
  const dele=document.createElement("button");
   //dele.classList.add("del");
   dele.style.position="relative";
   dele.style.bottom="-10px";
   dele.style.right="-140px";
   dele.style.borderRadius="5px";
   dele.style.borderStyle="none";
   dele.style.width="5px";
   dele.style.height="35px";
   dele.style.padding="18px";
   dele.style.backgroundColor=" rgb(97, 96, 96)";
   const img = document.createElement("img");
   img.src="delete.png";
    img.style.width="15px";
   dele.style.display="flex";
   dele.style.justifyContent="center";
   dele.style.alignItems="center";
   dele.append(img);
   dele.style.backgroundSize = "contain";
   text1.textContent="Title : "+Title;
   text2.textContent="Author : "+Author;
   text3.textContent="No. of Pages : "+Pages;
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.checked = false;
   text4.textContent="Read ?    ";
   text4.append(checkbox);
   text.append(text1);
   text.append(text2);
   text.append(text3);
   text.append(text4);
   book.append(dele);
  book.style.width="180px";
  book.style.height="200px";
  text.style.fontFamily="monospace";
  text.style.position="relative";
  text.style.bottom="-15px";
  text.style.textAlign="center";
  book.style.backgroundColor="rgba(255, 255, 255,0.5)";
  book.style.margin="20px";
  book.style.padding="5px";
  book.append(text);
  books.append(book);
  dele.addEventListener('click',function(){book.style.display="none"});
}
function closeForm() {
  form.style.display = "none";
  overlay.style.display = "none";
}
function submitForm(){
   const Title=document.getElementById("title").value;
   const Author=document.getElementById("author").value;
   const Pages=document.getElementById("pages").value;
   const new_book=new Book(Title,Author,Pages);
   console.log(new_book.title);
   myLibrary.push(new_book);
  document.getElementById("title").value="";
  document.getElementById("author").value="";
  document.getElementById("pages").value="";
  form.style.display = "none";
  overlay.style.display = "none";
  books.style.display="flex";
  createBook(Title,Author,Pages);
}

function addBookToLibrary() {

  form.style.display="block";
  overlay.style.display="block";
  // books.style.display="none";
  const close=document.querySelector(".close");
  close.addEventListener('click',closeForm);
  submit.addEventListener('click',submitForm);
 
  
}

add.addEventListener('click',addBookToLibrary);
del.addEventListener('click',function(){place.style.display="none"});



