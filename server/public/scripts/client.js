/* jshint esversion: 6 */

//`employee` constructor
class Employee {
  constructor (firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn) {
      this.firstName = firstNameIn;
      this.lastName = lastNameIn;
      this.idNumber = idNumberIn;
      this.jobTitle = jobTitleIn;
      this.annualSalary = annualSalaryIn;
  }
}
const employeeList = [];
let salarySum = 0;

// createEmployee ('Atticus', 'Pomerantz', 1234, 'Intern', 5000);
// createEmployee ('Jesse', 'River', 5678, 'Guitar Tech', 4000);

$(document).ready(readyNow);

function readyNow () {
  engageEventHandlers ();
  // addToTable();
}
//function to create a new Employee class
function createEmployee (firstName, lastName, idNumber, jobTitle, annualSalary) {
  let newEmployee = new Employee (firstName, lastName, idNumber, jobTitle, annualSalary);
  employeeList.push(newEmployee);
  console.log(employeeList);
}

function engageEventHandlers () {
  $('#submitButton').on('click', submitClicked);
  $('#tableId').on('click', '.removeButton', removeClicked);

}

function removeClicked () {
  let removeButton = $("#removeButton");
  // console.log($(this).parent().parent());
  $(this).parent().parent().remove();
  // let monthlySalaryRemove = ($(this).parent().parent().children().first().next().next().next().next().next().text());
  // let monthlySalaryRemoveNum = parseInt(monthlySalaryRemove);
  // return monthlySalaryRemoveNum;
}

//function performed when #submitButton is clicked
function submitClicked () {
  passToConstructorAndTable();
}

//function to pass all input field .val()s to createEmployee() and addToTable ()
function passToConstructorAndTable () {
    let inputFirstName = $('#firstNameInput').val();
    let inputLastName = $('#lastNameInput').val();
    let inputIdNumber = $('#idNumberInput').val();
    let inputJobTitle = $('#jobTitleInput').val();
    let inputAnnualSalary= $('#annualSalaryInput').val();
    if (inputFirstName.length > 0 && inputLastName.length > 0 && inputIdNumber.length > 0 && inputJobTitle.length > 0 && inputAnnualSalary.length > 0 ) {
      createEmployee(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);
      addToTable(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);
      salaryMath();
      $('#firstNameInput').val('');
      $('#lastNameInput').val('');
      $('#idNumberInput').val('');
      $('#jobTitleInput').val('');
      $('#annualSalaryInput').val('');
      $('#errorMessage').empty();
      $('#errorMessage').append("(All input fields are required)");
      $('#errorMessage').css('color', 'black');
    }
    else {
      $('#errorMessage').empty();
      $('#errorMessage').append("something's wrong...did you fill in all the input fields?");
      $('#errorMessage').css('color', 'red');
    }
}

//accepts inputs from passToConstructorAndTable() and appends them to #tableId
function addToTable (inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary) {
  let removeButton = '<button type="button" class="removeButton"> Remove Employee </button>';
  console.log(inputFirstName, inputLastName, inputIdNumber, inputJobTitle, inputAnnualSalary);
  $('#tableId').append('<tr><td>'+inputFirstName+'</td><td>'+inputLastName+'</td><td>'+inputIdNumber+'</td><td>'+inputJobTitle+'</td><td>'+inputAnnualSalary+'</td><td>' + (inputAnnualSalary/12).toFixed() + '</td><td>'+ removeButton +'</td></tr>');
}

//function to empty then increment var salarySum and append it to #grandTotal
function salaryMath () {
 for (let eachEmployee of employeeList) {
   // console.log('At salaryMath beginning salarySum is:', salarySum);
   let increaseSalaryCount = Math.floor((parseInt(eachEmployee.annualSalary)/12));
   salarySum += increaseSalaryCount;
   // console.log("now salarySum is", salarySum);
   $('#grandTotal').empty();
   $('#grandTotal').append('$' + salarySum);
   greaterThanTwentyThousand();
 }
}

//function to change the color of #grandTotal when it is > 20,000
function greaterThanTwentyThousand () {
  if (salarySum >= 20000) {
    $('#grandTotal').css('color', 'red');
  }
}











//end
