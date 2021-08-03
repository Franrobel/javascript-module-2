/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let pElements = document.querySelectorAll('p')
console.log(pElements)

const firstDiv = document.querySelector('div')
console.log(firstDiv)

const idJumbotronText = document.querySelector('#jumbotron-text')
console.log(idJumbotronText)

const pCprimaryContent = document.querySelectorAll('.primary-content p') 
console.log(pCprimaryContent)
//const pCprimaryContent = document.querySelector('.primary-content')   const pInside = pCprimaryContent.querySelectorAll('p')
//const pCprimaryContent = document.querySelector('.primary-content').querySelectorAll('p')


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text 
"Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn")
alertBtn.addEventListener('click', (event) => 
 alert('Thanks for visiting Bikes for Refugees'));

 

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when 
the 'Change colour' button is clicked.
*/
/*const changeColorBtn = document.querySelector("#bgrChangeBtn")

   changeColorBtn.addEventListener('click', (event) => {
    const assignBody = document.querySelector('body')
    assignBody.style.backgroundColor = 'orange';})*/


/*Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph 
should be added inside the section that says “LEARN MORE”
*/
const addSomeTextBtn = document.querySelector("#TextBtn")

addSomeTextBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    const whereIsShown = document.querySelector('#mainArticles')
    const paragraph =document.createElement('p') 
    paragraph.textContent = 'Un parrafo nuevo para la seccion LEARN MORE'
    whereIsShown.prepend(paragraph)  //lo agrega arriba de todos los articles dentro de #mainarticles
                                        // con appendChild despues de todos 

                                    })
/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links 
on the page should increase.
*/
const largerLinks = document.querySelector('#largerLinksBtn');
largerLinks.addEventListener('click', event =>{
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach((a) => {
    a.style.fontSize = '40px'})})
/*
Task 6
======
Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field 
and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
 const addButton = document.querySelector("#addArticleBtn")
addButton.addEventListener('click', () =>{
    const whereIsShown = document.querySelector('#mainArticles')
    const userText = document.querySelector('.addArticle').value;
    const textInputF = document.createElement('p')
    textInputF.textContent = userText
    whereIsShown.prepend(textInputF)
    
})
const userText1 = document.getElementsByClassName('addArticle')
userText1.innerHTML = ""
/**/
/*
Task 7
======
Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, 
the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const changeColorBtn = document.querySelector("#bgrChangeBtn")
let index = 0;

changeColorBtn.addEventListener('click', () => {
    const colors = ['yellow', 'blue', 'orange', 'purple', '#69e8ec'];
    const assignBody = document.querySelector('body')
    
    if(index > (colors.length-1)) {
        index=0;
    }

    // assignBody.style.backgroundColor = colors[index % colors.length];
    assignBody.style.backgroundColor = colors[index];
    index ++;
})