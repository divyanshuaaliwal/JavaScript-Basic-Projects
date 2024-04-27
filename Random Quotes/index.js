const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = 
[
    "Avoid daydreaming about the years to come",
    "You are the most important person in your whole life", 
    "Always be true to who you are, and ignore what other people have to say about you", 
    "Only demonstrate your strength when it’s really required", 
    "Subscribe to Drop X Out", 
    "Believe in your ability to overcome any obstacle", 
    "Find joy in the journey, not just the destination", 
    "Success is the sum of small efforts repeated day in and day out", 
    "Embrace failure as a stepping stone to success", 
    "Your limitations are only as real as you allow them to be", 
    "Be the reason someone believes in the goodness of people", 
    "Every setback is a setup for a comeback", 
    "Invest in yourself, it's the best investment you'll ever make", 
    "Your attitude determines your direction in life", 
    "The only way to do great work is to love what you do", 
    "Challenges are what make life interesting; overcoming them is what makes life meaningful", 
    "Life is short, make every moment count", 
    "The only person you should try to be better than is the person you were yesterday", 
    "Dream big, work hard, stay focused, and surround yourself with good people", 
    "Happiness is not something you postpone for the future; it is something you design for the present"
]

btn.addEventListener("click",() => {
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})