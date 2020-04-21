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
document.querySelector("#home-btn").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Home</h1>
    <p>If you fucking give up, you will achieve nothing. Someday is not a fucking day of the week. Fuck. Form follows fucking function. When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? While having drinks with Tibor Kalman one night, he told me, “When you make something no one hates, no one fucking loves it.” The details are not the details. They make the fucking design. Intuition is fucking important.
    </p>`
})

document.querySelector("#contact-btn").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Contact Me</h1>
    <p>Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. Why are you fucking reading all of this?</p>`
})

document.querySelector("#about-btn").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>About Me</h1>
    <p>If you fucking give up, you will achieve nothing. Someday is not a fucking day of the week. Fuck. Form follows fucking function. When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? While having drinks with Tibor Kalman one night, he told me, “When you make something no one hates, no one fucking loves it.” The details are not the details. They make the fucking design. Intuition is fucking important.
    </p>`
})

document.querySelector("#projects-btn").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Projects</h1>
    <h3>Project 1</h3>
    <p>Don’t worry about what other people fucking think. Don’t worry about what other people fucking think. Creativity is a fucking work-ethic. To go partway is easy, but mastering anything requires hard fucking work. The details are not the details. They make the fucking design.</p>
    <h3>Project 2</h3>
    <p>A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Someday is not a fucking day of the week. A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Must-do is a good fucking master. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. Make your work consistent but not fucking predictable. The graphic designer’s first fucking consideration is always the size and shape of the format, whether for the printed page or for digital display</p>`
})


// All content should be rendered and removed dynamically with JavaScript
// You should only have one HTML document.
//done!
// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".

// When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"