const addPizza = document.getElementById('add-btn-pizza');
const addHamburger = document.getElementById('add-btn-hamburger');
const addBeer = document.getElementById('add-btn-beer');
const footer = document.getElementById('footer');
const remove = document.getElementById('remove');
const menu1 = document.getElementById('menu-1');
const menu2 = document.getElementById('menu-2');
const menu3 = document.getElementById('menu-3');
const main = document.getElementById('main');
const body = document.getElementById('body');
const title = document.getElementById('title');
const name = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const ccv = document.getElementById('ccv');
let totalOrder = 0;

function handleClick(pizzaPrice, hamburgerPrice, beerPrice) {
  body.addEventListener('click', function (e) {
    document.querySelector('.title').style.display = 'block';
    if (e.target.id === 'add-btn-pizza') {
      title.insertAdjacentHTML(
        'afterend',
        `
  <div class="order-list" id="pizza">
    <h4>Pizza</h4>
    <p id="remove-pizza">remove</p>
    <h3>$14</h3>
</div>`
      );
      totalOrder += 14;
    } else if (e.target.id === 'add-btn-hamburger') {
      title.insertAdjacentHTML(
        'afterend',
        `
  <div class="order-list" id="hamburger">
    <h4>Hamburger</h4>
    <p id="remove-hamburger">remove</p>
    <h3>$18</h3>
</div>`
      );
      totalOrder += 18;
    } else if (e.target.id === 'add-btn-beer') {
      title.insertAdjacentHTML(
        'afterend',
        `
  <div class="order-list" id="beer">
    <h4>Beer</h4>
    <p id="remove-beer">remove</p>
    <h3>$11</h3>
</div>`
      );
      totalOrder += 11;
    }
    console.log(e.target.id);
    if (e.target.id === 'remove-beer') {
      document.getElementById('beer').remove();
      totalOrder -= 11;
    } else if (e.target.id === 'remove-pizza') {
      document.getElementById('pizza').remove();
      totalOrder -= 14;
    } else if (e.target.id === 'remove-hamburger') {
      document.getElementById('hamburger').remove();
      totalOrder -= 18;
    }
    document.getElementById('total-order').textContent = `$${totalOrder}`;

    if (e.target.id === 'complete-btn') {
      document.querySelector('.card-details').style.display = 'flex';
    } else if (e.target.id === 'close') {
      document.querySelector('.card-details').style.display = 'none';
    } else if (e.target.id === 'pay-btn' && name.value !== '' && ccv.value !== 0 && cardNumber.value !== 0) {
      document.querySelector('.footer').style.display = 'none';
      document.querySelector('.card-details').style.display = 'none';
      document.querySelector('.done-order').style.display = 'block';
    }
  });
}
handleClick();
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
});
