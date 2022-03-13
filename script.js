'use strict';

const inputName = document.querySelector('.name');
const inputDate = document.querySelector('.date');
const inputAmount = document.querySelector('.amount');
const submit = document.querySelector('.submit');
const table = document.querySelector('table');
const form = document.querySelector('form');

// Adding eventListener on form
form.addEventListener('submit', function (e) {
  // Creating varibale so i can access table-body
  const tbodyEl = document.querySelector('tbody');
  // This is a must - the page will reload if i dont preventDefault
  e.preventDefault();

  // If these 3 fields are not empty, continue with tasks, else - submition will not be able, return
  if (
    !inputName.value == '' &&
    !inputDate.value == '' &&
    !inputAmount.value == ''
  ) {
    // Creating table cells with values form user input.
    tbodyEl.innerHTML += `
    
  <tr class="table-row">

    <td class="td-all">${inputName.value}</td>
    <td class="td-all">${inputDate.value}</td>
    <td class="td-all">$${inputAmount.value}</td>
    <td><button class ="btn-table">X</button></td>
  </tr>
    
  `;
  } else return;

  // delete row function
  const deleteRow = function (e) {
    // Searching for specific classList with contains(btn-table)
    if (!e.target.classList.contains('btn-table')) {
      return;
    }
    // Our click action
    const btn = e.target;
    // closest table row to our click event will be removed/deleted
    btn.closest('tr').remove();
  };

  // Calling deleteRow function on our tabel
  table.addEventListener('click', deleteRow);

  // Reseting every value to empty, after subbmition
  inputName.value = inputDate.value = inputAmount.value = '';
});
