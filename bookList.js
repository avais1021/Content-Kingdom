const ArrayObj = JSON.parse(localStorage.getItem('myBookData')) || [{
    myBooks: [{
        id: 0,
        img: 'books images/10-golden-steps.jpg',
        title: '10 GOLDEN Steps of Life',
        price: 108,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 1,
        img: 'books images/atomic-habits.jpg',
        title: 'ATOMIC HABITS',
        price: 195,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 2,
        img: 'books images/daily-inspiration.jpg',
        title: 'DAILY INSPIRATION',
        price: 200,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 3,
        img: 'books images/dont-quit-your-daydream.jpg',
        title: "DON'T QUIT YOUR DAYDREAM",
        price: 529,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 4,
        img: 'books images/hyper-focus.jpg',
        title: 'HYPERFOCUS HOW TO WORK LESS TO ACHIEVE MORE',
        price: 159,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 5,
        img: 'books images/notes-to-my-self.jpg',
        title: 'Notes To Myself - My Struggle To Become A Person',
        price: 249,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 6,
        img: 'books images/paving-your-success.jpg',
        title: 'Paving Your Success: A Motivational Guide To Succeed',
        price: 100,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 7,
        img: 'books images/positive-thinking.jpg',
        title: 'Success Through Positive Thinking: It is Half Empty Or Half Full',
        price: 315,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 8,
        img: 'books images/power-positive-two.jpg',
        title: 'Power Of Positive Thinking.',
        price: 253,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 9,
        img: 'books images/self-motivation.jpg',
        title: 'SELF-MOTIVATION like CRAZY : Increase Your Self-motivation',
        price: 350,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 10,
        img: 'books images/the-power-of-habit.jpg',
        title: 'THE POWER OF HABIT',
        price: 185,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 11,
        img: 'books images/the-power-of.jpg',
        title: 'THE POWER OF YOUR SUBCONSCIOUS MIND',
        price: 108,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 12,
        img: 'books images/ultimate-motivation.jpg',
        title: 'THE ULTIMATE SET FOR MOTIVATION',
        price: 502,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 13,
        img: 'books images/win-friend-dale-carnegie.jpg',
        title: 'HOW TO WIN FRIENDS AND INFLUENCE PEOPLE',
        price: 108,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 14,
        img: 'books images/win-friends.jpg',
        title: 'How To Win Friends And Influence People',
        price: 139,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    },
    {
        id: 15,
        img: 'books images/you-are-essential.jpg',
        title: 'You Are Essential: 100 Inspirational',
        price: 569,
        delivery: 'Free delivery',
        orderQty: 0,
        totalPrice : 0,
        cartItem : 0,
    }]
}]

localStorage.setItem('myBookData', JSON.stringify(ArrayObj))


console.log(ArrayObj, 'ArrayObj');

const books__row = document.querySelector('.books__row');

let html_str_cards = "";

ArrayObj[0].myBooks.forEach((ele , idx) => {

    var id = "id" + Math.random().toString(16).slice(2)

    ele.id = id;

    if(idx <= 3){
    html_str_cards += `
        <div class="book__card" data-card="${ele.id}">
          <img src="${ele.img}" alt="books images">
          <div class="book__info">
              <h3>${ele.title}</h3>
              <hr>
              <p class="price">  <span>${ele.price} &#8377;</span>  <span class="high_price">${0.20 * ele.price + ele.price} &#8377; </span> </p>
              <hr>
              <div class="wrapper_addBook">
              <p class="delivery">Free delivery</p>
              <div class="addBook">
              <button class="decrement" ><i class="fa-solid fa-minus"></i></button>
              <input class="quantity" type="number" value="0" data-input="${ele.id}" >
              <button class="increment"><i class="fa-solid fa-plus"></i></button>
              </div>
              </div>
              <a href="cart.html" class="buyNow">Buy Now</a>
          </div>
       </div>
    `
    }
})

books__row.innerHTML = html_str_cards;






// let number  = 100 ;
// let twentypercent = 0.20 * 10 ;
// console.log(twentypercent,'twentypercent');

