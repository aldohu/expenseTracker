const balanceEl = document.getElementById('balance');
let balance = 0;

const money_plusEl = document.getElementById('money-plus');
let money_plus = 0;
const money_minusEl = document.getElementById('money-minus');
let money_minus = 0;
const list = document.getElementById('list');

const form = document.getElementById('form');

const btn = document.querySelector('.btn');

const reason = document.getElementById('name');

const amount = document.getElementById('amount');
console.log(list);
const addTransaction = (e) => {
	e.preventDefault();
	balanceEl.innerHTML = '';

	if (reason.value.trim() === '' || amount.value.trim() === '') {
		return alert('Please add a name and amount');
	}
	if (+amount.value < 0) {
		list.innerHTML += `<li class="minus"><span>${reason.value}</span><span>${amount.value}</span></li>`;
		money_minusEl.innerHTML = '';
		money_minus = money_minus + +amount.value;
		money_minusEl.innerHTML = `$${money_minus}`;
	} else {
		list.innerHTML += `<li class="plus"><span>${reason.value}</span><span>${amount.value}</span></li>`;
		money_plusEl.innerHTML = '';
		money_plus = money_plus + +amount.value;
		money_plusEl.innerHTML = `$${money_plus}`;
	}

	balance = balance + +amount.value;

	console.log(money_minus);
	balanceEl.innerHTML = `$${balance}`;
	form.reset();
};
form.addEventListener('submit', addTransaction);
