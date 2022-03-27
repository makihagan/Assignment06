// HANDLE THE LOAD EVENT OF THE WINDOW

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
// ---Popup window size is set in window.open in main.js

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - 800) / 2), ((window.screen.height - 700) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => document.getElementById(id);


// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
let cancel = $('cancel');
cancel.addEventListener('click', (e) => {
    window.close();
})
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION


// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
let empForm = $('empForm');
let id = $('id');
let name = $('name');
let extension = $('extension');
let email = $('email');
let department = $('department');

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
let parentoutput = window.opener.document.getElementById('loginDetails');

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    parentoutput.innerHTML = `ID: ${id.value}<br>Name: ${name.value}<br>Extension: ${extension.value}<br>Email: ${email.value}<br>Department: ${department.value}`
    window.close();
})

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE