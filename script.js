// document.querySelector("#my-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>My To Do List</h1>`
// })
// //lightening exercise: add event listeners to the other links in the nav bar and print to the dom.
// document.querySelector("#family-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Family To Do List</h1>`
// })

// document.querySelector("#completed-tasks").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
// })

//use an equal sign, because you are replacing, not adding.  Sometimes you do want to add and use +=, but now is not the time.

// TODO: refactor to make less repetitive

// When the user clicks on the submit button in the new task form, print that task to the DOM
// document.querySelector("#page-content").addEventListener("click", function(){
//     if(event.target.id === "new-task-submit-btn"){
//         console.log("You clicked on the submit button")
//         const taskValue = document.querySelector("#new-task-input").value
//         // Print the task value to the DOM
//         document.querySelector("#page-content").innerHTML += buildSingleTask(taskValue)
//     }
// })


// When the user clicks on the "My Todo List" link in the nav bar, print the from
// document.querySelector("#my-todo-list").addEventListener("click", function(){
//     // Print the heading and build the form
//     const pageContentContainer = document.querySelector("#page-content");
//     pageContentContainer.innerHTML = `<h1>My To Do List</h1>`;
//     pageContentContainer.innerHTML += buildTaskForm();
// })


// When the user clicks on the family list link in the nav bar, print a heading
// document.querySelector("#family-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Family To Do List</h1>`
// })

// When the user clicks on the completed list link in the nav bar, print a heading
// document.querySelector("#completed-tasks").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
// })


//Practice Exercise in Chapter 11

// Practice
// Practice: SPA Navigation Bar
// Setup



// When the user clicks on any given link, they should see an h1 element with an appropriate heading and some lorem ipsum text. For example, when the user clicks on the "Home" link, they should see a heading that says "Home" and some dummy text.
// document.querySelector("#home-btn").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Home</h1>
//     <p>If you fucking give up, you will achieve nothing. Someday is not a fucking day of the week. Fuck. Form follows fucking function. When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? While having drinks with Tibor Kalman one night, he told me, “When you make something no one hates, no one fucking loves it.” The details are not the details. They make the fucking design. Intuition is fucking important.
//     </p>`
// })

// document.querySelector("#contact-btn").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Contact Me</h1>
//     <p>Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. Why are you fucking reading all of this?</p>`
// })

// document.querySelector("#about-btn").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>About Me</h1>
//     <p>If you fucking give up, you will achieve nothing. Someday is not a fucking day of the week. Fuck. Form follows fucking function. When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? While having drinks with Tibor Kalman one night, he told me, “When you make something no one hates, no one fucking loves it.” The details are not the details. They make the fucking design. Intuition is fucking important.
//     </p>`
// })

// document.querySelector("#projects-btn").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Projects</h1>
//     <h3>Project 1</h3>
//     <p>Don’t worry about what other people fucking think. Don’t worry about what other people fucking think. Creativity is a fucking work-ethic. To go partway is easy, but mastering anything requires hard fucking work. The details are not the details. They make the fucking design.</p>
//     <h3>Project 2</h3>
//     <p>A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Someday is not a fucking day of the week. A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Must-do is a good fucking master. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. Make your work consistent but not fucking predictable. The graphic designer’s first fucking consideration is always the size and shape of the format, whether for the printed page or for digital display</p>`
// })


// All content should be rendered and removed dynamically with JavaScript
// You should only have one HTML document.
//done!
// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".
// document.querySelector("#contact-btn").addEventListener("click", function(){
//     Print the heading and build the form
//     const pageContentContainer = document.querySelector("#page-content");
//     pageContentContainer.innerHTML = `<h1>Contact Me</h1>`;
//     pageContentContainer.innerHTML += buildContactForm();
// })

// When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"

// document.querySelector("#page-content").addEventListener("click", function(){
//     if(event.target.id === "new-contact-submit-btn"){
//         console.log("You clicked on the send button")
//         // const contactValue = document.querySelector("#new-contact-input").value
//         // Print 'your message has been sent' to the DOM
//         document.querySelector("#page-content").innerHTML += `<h4>Your message has been sent</h4>`
//     }
// })
//how I had it; long way and repetative.  add a += instead of just an =, so you don't have to repeat yourself by fully replacing the form with "Your message has been sent".
  //     <h1>Contact Me</h1><form>
    //     <input id="new-contact-input" type="text" placeholder="Name" />
    //     <input id="new-contact-input" type="text" placeholder="Message" />
    //     </form>
    // <button id="new-contact-submit-btn">Send</button>


// Challenge: Dynamic Cards
// The learning objective for this challenge is to practice event listeners for click events. You will also practice adding elements to the DOM, and removing elements from the DOM with the removeChild() method. You will even need to use the split() method on a string.



// Requirements

// When the user enters in text into the text area and then clicks the create button, create a new DOM component that has a border, and includes it's own delete button.

// Insert that new component into the DOM.

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

// Pro tip: The card's id attribute, and the button's id attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the split() method on a string? That will be helpful.

// This is an example how one of your card components might look once it's in the DOM:

// <article class="card" id="card--1">
//     <div>Hey, I entered some text</div>
//     <div>
//         <button id="delete--1">Delete This Card</button>
//     </div>
// </article>

//Add an event listenerfor the create button

document.querySelector("#create.btn").addEventListener("click", function(){
    // console.log("you clicked create button")
    const textAreaValue = document.querySelector("#text").value 
    // console.log(textAreaValue)
})

//Inside the event listener, I need to get the value of the textarea input

//build a card component using value from textarea

//print card component to dom w/ delete button