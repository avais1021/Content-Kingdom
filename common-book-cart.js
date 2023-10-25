// common js
// --
// var perfEntries = performance.getEntriesByType("navigation");

// if (perfEntries[0].type === "back_forward") {
//     location.reload();
// }
// ------------

const cart_Count_item = document.querySelector('.cart_Count_item');

const increment = document.querySelectorAll('.increment');
const decrement = document.querySelectorAll('.decrement');

console.log(increment, 'increment');

ArrayObj[0].myBooks.forEach((books) => {

    increment.forEach((ele) => {
        ele.addEventListener('click', (e) => {

            let currentCard = e.target.closest(".book__card").dataset.card;
            var quantity = e.target.closest(".book__card").querySelector('.quantity')
            console.log(ele.id, 'ele.id');
            console.log(quantity.value, 'testIncrementValur');

            if (books.id == currentCard) {
                quantity.value++;
                books.orderQty = quantity.value;
                let addTotalPrice = books.price;
                books.totalPrice += addTotalPrice;
                books.cartItem = 1;
            }
            localStorage.setItem('myBookData', JSON.stringify(ArrayObj))

            CountPlusAllAmount()

            if (books.cartItem > 0) {
                additionItemCartLogo()
            }
        })
    })
})

ArrayObj[0].myBooks.forEach((books) => {
    decrement.forEach((ele) => {
        ele.addEventListener('click', (e) => {

            let currentCard = e.target.closest(".book__card").dataset.card;
            var quantity = e.target.closest(".book__card").querySelector('.quantity')

            // console.log(quantity.value, 'testDecrementValur');

            if (books.id == currentCard) {
                if (quantity.value > 0) {
                    quantity.value--;
                    books.orderQty = quantity.value;
                    books.totalPrice = (books.totalPrice - books.price);
                    if (books.orderQty == 0) {
                        books.cartItem = 0;
                    }
                    if (books.cartItem == 0) {
                        additionItemCartLogo()
                    }
                }
            }
            localStorage.setItem('myBookData', JSON.stringify(ArrayObj))

            CountPlusAllAmount()

            const sum = ArrayObj[0].myBooks.reduce((accumulator, object) => {
                return accumulator + Number(object.orderQty);
            }, 0);
            console.log(sum, 'sum');


        })
    })
})


CountPlusAllAmount()

// --
// ArrayObj[0].myBooks.forEach((books) => {
function additionItemCartLogo() {
    if (cart_Count_item != null) {
        const sumCartItem = ArrayObj[0].myBooks.reduce((accumulator, object) => {
            return accumulator + Number(object.cartItem);
        }, 0);
        console.log(sumCartItem, 'sum');
        cart_Count_item.innerHTML = sumCartItem;
    }
}
additionItemCartLogo()
// })


// -----
var mouseVal = true;
const cursor_move = document.body.addEventListener('mousemove', () => {
    if (mouseVal == true) {
        countQuantityFun();
        console.log('mouse true')
        // mouseVal = false;
    }else{
        console.log('mouse false')
    }
})
// document.addEventListener('touchmove')
const quantity = document.querySelectorAll('.quantity');

function countQuantityFun() {
    ArrayObj[0].myBooks.forEach((book) => {

        quantity.forEach((ele) => {

            if (book.id == ele.dataset.input) {
                console.log("Hello");
                ele.value = book.orderQty;
            }

        })
    })
}
countQuantityFun();

// --

function CountPlusAllAmount() {

    const Tamount = document.querySelector('#Tamount');
    const VAT = document.querySelector('#VAT');

    let tamount_string = 0;

    ArrayObj[0].myBooks.forEach((book) => {
        tamount_string += book.totalPrice;

    })
    if (Tamount != null || VAT != null) {
        Tamount.innerHTML = tamount_string;
        VAT.innerHTML = tamount_string + 0;
    }

}




