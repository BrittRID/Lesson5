/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = date.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let holdMessage = "Hang in there";
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
let anotherMessage = "Woohoo!  It is the weekend!"
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if(dayOfWeek >= 0 && dayOfWeek <= 6)
 {
     console.log(holdMessage);
 }
  else
 {
      console.log(anotherMessage);
  }

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) 
  {
        case 0:
       dayOfWeek = "Sunday";
       anotherMessage = "Woohoo!  It is the weekend!";
         break;
         case 1:
         dayOfWeek = "Monday";
        holdMessage = "Hang in there";
        break;
        case 2:
         dayOfWeek = "Tuesday";
         holdMessage = "Hang in there";
        break;
        case 3:
         dayOfWeek = "Wednesday";
         holdMessage = "Hang in there";
        break;
        case 4:
         dayOfWeek = "Thursday";
         holdMessage = "Hang in there";
        break;
        case 5:
         dayOfWeek = "Friday";
         holdMessage = "Hang in there";
        break;
        case 6:
         dayOfWeek = "Saturday";
         anotherMessage = "Woohoo!  It is the weekend!";
    }

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerHTML = holdMessage;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML = dayOfWeek;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples - Done

// Step 3: Create another function called getTemples. Make it an async function.

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
// const standardURL = '/standard.json';
// fetch(standardURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         templeName = jsonObject['templeName'];
//         location = jsonObject['location'];
//         dedicated = jsonObject['dedicated'];      
//     });

const templesURL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
    fetch(templesURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const temples = jsonObject;
            console.log(temples);
            for (let i = 0; i < temples.length; i++) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let location = document.createElement('h4');
                let dedicated = document.createElement('h4');
                let image = document.createElement('img');
                h2.textContent = temples[i].templeName;
                location.textContent = temples[i].location;
                dedicated.textContent = temples[i].dedicated;
                image.setAttribute('src', temples[i].imageUrl);
                image.setAttribute('alt',  temples[i].templeName);
                card.appendChild(h2);
                card.appendChild(location);
                card.appendChild(dedicated);
                card.appendChild(image);
                document.querySelector('div#temples').appendChild(card);
            }});


            function sortBy() {
              let templesContainer = document.getElementById("temples");
              resetTemples(templesContainer);
              // Sort alphabetically
              //temples.sort();
              temples.sort(function(a, b) {
                return a.templeName > b.templeName;
            });
              let sortContainer = document.getElementById("sortBy");
              let value = sortContainer.value;
              if (value == "templeNameDescending") {
                  temples.reverse();
              }
              buildTemples(temples);
              console.log(value);
          }
          function resetTemples(templesContainer) {
              let parent = templesContainer;
              while (parent.firstChild) {
                  parent.removeChild(parent.firstChild);
              }
          }
          function buildTemples(temples) {
              for (let i = 0; i < temples.length; i++) {
                  let card = document.createElement('section');
                  let h2 = document.createElement('h2');
                   let location = document.createElement('h4');
                  let dedicated = document.createElement('h4');
                  let image = document.createElement('img');
                  h2.textContent = temples[i].templeName;
                  location.textContent = temples[i].location;
                  dedicated.textContent = temples[i].dedicated;
                  image.setAttribute('src', temples[i].imageUrl);
                  image.setAttribute('alt',  temples[i].templeName);
                  card.appendChild(h2);
                  card.appendChild(location);
                  card.appendChild(dedicated);
                  card.appendChild(image);
                  document.querySelector('div#temples').appendChild(card);
              }
          }



// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
// function temples () {
//   console.log(temples.sort());
// }
           

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples



// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', buildTemples);


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files


