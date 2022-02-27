'use strict';

const inputName = document.querySelector('.name');
const inputDate = document.querySelector('.date');
const inputAmount = document.querySelector('.amount');
const submit = document.querySelector('.submit');
const table = document.querySelector('table');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  const tbodyEl = document.querySelector('tbody');
  e.preventDefault();

  if (
    !inputName.value == '' &&
    !inputDate.value == '' &&
    !inputAmount.value == ''
  ) {
    tbodyEl.innerHTML += `
    
  <tr class="table-row">

    <td class="td-all">${inputName.value}</td>
    <td class="td-all">${inputDate.value}</td>
    <td class="td-all">$${inputAmount.value}</td>
    <td><button class ="btn-table">X</button></td>
  </tr>
    
  `;
  } else return;

  const btnDelete = document.querySelector('.btn-table');
  const tableRow = document.querySelector('tr');
  const tableData = document.querySelector('.td-all');

  //   btnDelete.addEventListener('click', function (e) {
  //     e.preventDefault();

  // tbodyEl.lastElementChild.remove();

  // delete row function
  const deleteRow = function (e) {
    if (!e.target.classList.contains('btn-table')) {
      return;
    }

    const btn = e.target;
    btn.closest('tr').remove();
  };

  table.addEventListener('click', deleteRow);

  inputName.value = inputDate.value = inputAmount.value = '';
});
