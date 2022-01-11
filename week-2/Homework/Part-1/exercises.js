/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 const content = document.querySelector("#content");

 function exerciseOne(arrayOfPeople) {
  for(let i = 0; i < arrayOfPeople.length; i++){
    let h1Name = document.createElement("h1");
    h1Name.textContent = arrayOfPeople[i].name;
    content.appendChild(h1Name)
    let h2Job = document.createElement("h2");
    h2Job.textContent = arrayOfPeople[i].job;
    content.appendChild(h2Job)

  }
}
let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);





/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
const books = [
  {
    title: "The Design of Everyday Things",       //books[0].title
    author: "Don Norman",                         //.author
    alreadyRead: false                            
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",              //books[1]
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",                 //books[2]
    alreadyRead: true
  }
];

const booksDiv = document.createElement("div");
booksDiv.setAttribute("id", "books-exercise");
content.appendChild(booksDiv);

const booksTitle = document.createElement("h1");
booksTitle.innerHTML = "List of Books";
booksTitle.style.textAlign = "center";
booksDiv.appendChild(booksTitle);

const flexBox = document.createElement("div");
flexBox.setAttribute("id", "container");
booksDiv.appendChild(flexBox);

const ul = document.createElement("ul");
ul.style.listStyle = "none"
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
flexBox.appendChild(ul);

books.forEach((book, i)=>{
  const books = document.createElement("li");
  books.style.margin = "10px"
  const paragraph =document.createElement("p");
  paragraph.innerHTML = `${book.title} - ${book.author}`;
  paragraph.style.margin = "10px"
  books.appendChild(paragraph)

    let imageBooks = [ "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
    "https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg" ]
    const image = document.createElement('img');
    image.src = imageBooks[i++];
    image.style.margin = "10px"
    books.appendChild(image)
    image.style.width = "15em";  
    ul.appendChild(books);
  if(book.alreadyRead){
    books.style.backgroundColor = "green"
  } else{
    books.style.backgroundColor = "red"

  }
})


/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
 function exerciseTwo(list) {
  let ulElem = document.createElement('ul')
  content.appendChild(ulElem)
  
  list.forEach((item) => {
let listElem = document.createElement('li')
listElem.innerHTML = item
ulElem.appendChild(listElem)

  }
  ) 
}

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

