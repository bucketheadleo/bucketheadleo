
// scroll down

const scrollBtn = document.querySelector('.scroll-from-deposite');
const destination = document.querySelector('#deposits-withdrawals');


scrollBtn.addEventListener('click', ()=> {
    destination.scrollIntoView({behavior: "smooth", block: "start", });
});


// display dithdrawal or deposite 

// tables
const depositsTable = document.querySelector('.deposits-withdrawals__table-deposits');
const withdrawalTable = document.querySelector('.deposits-withdrawals__table-withdrawals');
// btns
const showDepositsBtn = document.querySelector('.show-deposits');
const showWithdrawalsBtn = document.querySelector('.show-withdrawals');


showDepositsBtn.addEventListener('click', ()=> {
    // switch button
    showDepositsBtn.classList.add('active');
    showWithdrawalsBtn.classList.remove('active');
    //switch table
    depositsTable.classList.add('shown');
    withdrawalTable.classList.remove('shown');

});
showWithdrawalsBtn.addEventListener('click', ()=> {
    // switch button
    showDepositsBtn.classList.remove('active');
    showWithdrawalsBtn.classList.add('active');

    //switch table
    depositsTable.classList.remove('shown');
    withdrawalTable.classList.add('shown');
});