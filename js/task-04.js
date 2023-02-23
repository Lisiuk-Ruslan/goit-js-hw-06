// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// < div id = "counter" >
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </ >

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;
const value = document.querySelector('#value');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
btnPlus.addEventListener('click', (e) => {
    e.preventDefault();
    counterValue++;
    value.textContent = counterValue;
})
btnMinus.addEventListener('click', (e) => {
    e.preventDefault();
    counterValue--;
    value.textContent = counterValue;
})