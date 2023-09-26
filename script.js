// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buySubmit = document.querySelector('.buy-submit');
const empty_message = document.getElementById('empty')


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

// Arrow Function
const buyNow =() => {
  if (userLeterPreview.textContent.replace(' ', '').length === 0){
    empty_message.innerHTML = "Please enter your name";
    empty_message.style.color = 'red';
  }

  else if (userLeterPreview.textContent === "Your Name"){
    empty_message.innerHTML = "Enter a new text";
    empty_message.style.color = 'red';
  }

  else {
    if (userLeterPreview.textContent.replace(' ', '').length > 15){
            empty_message.innerHTML = "We have 15 letters left in stock, and you have exceeded the limit";
          }
          
          else{
            empty_message.innerHTML = "Success!!!";
            empty_message.style.color = 'green';
          }
        }
      }
      
        //Buy Now button Event
       buySubmit.onclick = () =>{
        buyNow();
       }