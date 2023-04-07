
// task 1
const ageTable = document.getElementById("age-table");
console.log(ageTable);


// task 2
const lables = document.getElementsByTagName('label');
console.log(lables);


// task 3
const table = document.querySelector("table");

for (let td of table.querySelectorAll("td")) {

  if (td.textContent.includes("Age")) {
    
    console.log(td);
    break;
  }
}


// task 4

const searchForm = document.querySelector("form[name='search']");





