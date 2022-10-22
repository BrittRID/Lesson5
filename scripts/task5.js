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
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
  templeList = temples;
  let div = document.getElementById('temples');

  temples.forEach(temple => {

    // - Creates an HTML <article> element
    let article = document.createElement('article');

    // - Creates an HTML <h3> element and add the temple's templeName property to it
    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    let h3 = document.createElement('h3');
    h3.innerHTML = temple.templeName;
    article.appendChild(h3);

    // - Creates an HTML <h4> element and add the temple's location property to it
    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    let h4First = document.createElement('h4');
    h4First.innerHTML = temple.location;
    article.appendChild(h4First);

    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    let h4Second = document.createElement('h4');
    h4Second.innerHTML = temple.dedicated;
    article.appendChild(h4Second);

    // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    let image = document.createElement('img');
    image.setAttribute('src', temple.imageUrl);
    article.appendChild(image);
    
    // - Appends the <article> element to the HTML element with an ID of temples
    div.appendChild(article);

  });
  
};
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {

    //Json file allows image to displayed
  // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
  let responseFromURL = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

  // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
  let templeArray = await responseFromURL.json();
  output(templeArray);

};
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
getTemples(templeList);

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  return document.getElementById('temples').innerHTML = '';
};

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function sortBy(e) {
  reset();

  // - Sorts the global temple list 
  let sort = document.getElementById('sortBy');

  // sort by function returns a number
  if (e.target.value === 'templeNameAscending') {
    let sorted = templeList.sort(function(a,b) {return a.templeName>b.templeName ? 1 : -1});
    
    return output(sorted);

  }else if (e.target.value === 'templeNameDescending') {
    let sorted = templeList.sort(function(a,b) {return b.templeName>a.templeName ? 1 : -1});
    
    return output(sorted);
  };
  
};
           
// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);
/* STRETCH */
// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files


