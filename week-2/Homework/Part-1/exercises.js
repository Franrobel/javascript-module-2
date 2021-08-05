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
function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");
  let h1Elem = document.createElement('h1')
  let h2Elem = document.createElement('h2')
  content.prepend(h1Elem)
  content.appendChild(h2Elem)
 for( let i = 0; i < people[0].length; i++){
                          //3
  h1Elem.textContent == people[i].name 
 }
  
}
let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];
console.log(people[0].name, people[0].job)
console.log(people[1].name, people[1].job)
console.log(people[2].name, people[2].job)

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

exerciseThree(books);

function exerciseThree(books) {
  //Write your code in here
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
 function exerciseTwo(shopping) {
  const content = document.querySelector("#content");
  let ulElem = document.createElement('ul')
  content.appendChild(ulElem)
  

  //let shoppingLists = ulElem.appendChild(listElem)

  for(let i = 0; i < shopping.length ; i++){
    let listElem = document.createElement('li')
    ulElem.appendChild(listElem)

    listElem.innerHTML = shopping[i]     //ulElem.appendChild(shopping[i])
   // console.log(shopping[i])

   // listElem.shopping[i]
    //console.log(listElem.shopping[i])
                //[i] es cada item del array
  }

  //Write your code in here

}

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
//console.log(shopping.slice(0,7))
exerciseTwo(shopping);

