const testh1 = document.querySelector('h1');
const para = document.querySelector('.desc');
const ulClass = document.querySelector('ul')
const extra = document.querySelector('.extra')
const button = document.createElement('button')
const input = document.querySelectorAll('input')
const item = document.createElement('li')

// 1: Set the text of the <h1> element
testh1.textContent = 'Bucketlist';

// 2: Set the color of the <h1> to a different color
testh1.style.color = 'red';
    


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
para.innerHTML = "stuff that <strong>hi</strong>"
    

    


// 4: Set the class of the <ul> to 'list'
ulClass.className = "list"


// 5: Create a new list item and add it to the <ul>
item.innerHTML = "<input >Surfing"
ulClass.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes



// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
