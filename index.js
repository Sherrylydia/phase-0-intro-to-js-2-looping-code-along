// Code your solutions in this file
function writeCards(names, occasion) {
    // Create a new, empty array to hold the messages
    const messages = [];
  
    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
      // Build out the thank you message using string interpolation
      const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
  
      // Add the message to the new array
      messages.push(message);
    }
  
    // Return the new array
    return messages;
  }
  
  const namesArray = ["Charlie", "Samip", "Ali"];
  const occasion = "birthday";
  const thankYouMessages = writeCards(namesArray, occasion);
  console.log(thankYouMessages); 

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);