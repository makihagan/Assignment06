// HANDLE THE LOAD EVENT OF THE WINDOW
// ---Added defer in script tag

// ---GETELEMENTBYID
const $ = (id) => document.getElementById(id);

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let btnAddEmployee = $('btnAddEmployee');
let loginDetails = $('loginDetails');

btnAddEmployee.addEventListener('click', (e) => {
    window.open('add-employee.html', 'addEmployee', 'width=800,height=700');
})

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP