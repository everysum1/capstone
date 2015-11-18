// Welcome to the final project for Telegraph Prep! Here we'll be pulling together everything we've learned so far in the course.

// NOTE: it is an explicit goal of this project to get you familiar with functional programming. Functional programming is a whole new way of thinking that requires some practice and experience to feel natural. These prompts are designed to give you experience using functional programming, so go through them as they're written, even if you can think of other ways of doing them without using functional programming. 

// We've created a sparse handful of helper functions in helperFunctions.js to handle making things appear on the screen. If you're interested in understanding it, feel free to look at that file! 
// In programming, it's a super useful skill to get used to just looking at the interfaces of things, and not worrying too much about how they work inside. If you try to figure out how everything works inside you'll find yourself descending through many deep, dark, and scary caves that oftentimes don't expand your programming knowledge very much. As much as possible, try to look at only the interfaces (what arguments a function takes, and what it returns). I'd strongly recommend that you take this approach with makeGameBoard and renderGameBoard. 

// Let's start off by getting used to the gameBoard and how this project is structured.

(function() {

  // Notice that we wrap all of our code in an IIFE (immediately invoked function expression). This is a common pattern that you'll see... can you guess why? If you need some help, try googling "avoid polluting global scope". 
  // Since all of our code will be written inside the local scope of a function, you won't be able to just type a variable name directly in the console and see its value (remember, the console only has access to global scope variables). So, in order to see the values of the variables you declare you'll need to make use of console.log to print them to the console. Writing all your console.logs in your .js file here is a good pattern to get used to. 
  
  // The only thing we want on our global scope is our gameBoard object. We need to make gameBoard a global variable so that all the JavaScript files in our program can access it. Let's explicitly put it on the window object.
  window.gameBoard = makeGameBoard(8);

  // You might be wondering where the makeGameBoard function came from and why we can just invoke it even though we haven't seen it declared in this file... this function was defined in the helperFunctions.js file and it was declared in the global scope, so it's accessible anywhere in our JavaScript code.

  // When in doubt, always console.log whatever it is you're working with to investigate it more. Try that now with gameBoard to figure it out!
  console.log('our gameBoard is:', gameBoard);

  // We've included the underscore.js library on the page, so feel free to use it throughout this project. 

  // gameBoard is an array of arrays (an array that is filled with other arrays). Let's start by using each to iterate through the gameBoard array, console.logging each item inside the gameBoard array. You should see 8 arrays, each of length 8, logged to your console. Each array here represents a row. 

  // Ok, now that we see the gameBoard array contains 8 arrays representing the 8 rows in the board, let's investigate a single row. 
  // Let's use each again, this time invoking it with the first row in the gameBoard. Let's go through and console.log each item in that row. 

  // What you'll see is 8 different objects logged to your console. Click into them to explore them more. 
  // Each of these objects represents a square. We have many different pieces of information we want to store about each square: what color it is, what position it is on the board, what gamePiece is at that position, etc. An object is a perfect way to store information about all these different properties associated with that square. 

  // gameBoard[row][column] will get you the squareObj at that position in the gameBoard. So gameBoard[2][6] will point to the squareObj on row 3 column 7. Quick review on how this works: JS chains operators together, the results of each one being passed to the next operation. So first we're accessing the thing at index 2 in our gameBoard when we say gameBoard[2]. Then, within that thing (which is an array representing a row), we're asking for the item at the 6th index (which is going to be a squareObj). 
  // We could chain this together even more. Explain with your pair each individual operation that's going on when we say:
  gameBoard[3][5].color = 'black';

  // Alright! Now that we've figured out the gameBoard is an array of arrays, and that each square is just an object with some useful properties on it, let's start using our functional programming tools to make some changes to the board. 
  // Use each to iterate through the first row of the gameBoard (the array at position 0 in the gameBoard array). 
    // console.log each item that's passed into our callback. 
    // What is it that's being passed into each invocation of our callback? Can we name this parameter something obvious that makes it clear what it represents?
    // Let's change every square to a different color of your choosing. 

    _.each(gameBoard[0], function(obj) {
      obj.color = "pink";
      console.log(obj);
    });

    var colorArr = ['green', 'red', 'green', 'red', 'green', 'red', 'green', 'red']



      // If you're not familiar with colors in JS, you can do this in three main ways: through rgb values, hex values (the way we've done it right now), or just typing in a color name like 'orange'.
        // Random aside: hex values are really useful if you're trying to create random colors :)
    // Now let's do the same thing using map on the second row of our gameBoard.
      // First, create an array of 8 color strings. Mine would be ['orange','purple','orange','purple','orange','purple','orange','purple']
      // What's the key difference between map and each? map returns an array, whereas each only has side effects, and does not return anything. 
      // Think through how we'd use each and map in different ways to accomplish the same goal. 
      // The key part here is how to leverage the fact that map returns an array of values to you. So what we're going to do in the end is overwrite the second row of the gameBoard with the mutated array map returns to us. 
      // Let's pseudocode!
        // map through an array of colors
        // remember that the callback function has to do three three things:
          // 1. Take in an item.
          // 2. Do something to change that item into what we want to see in the output array.
          // 3. Return the changed item. 
        // On each iteration of map
          // Take in a color
          // Change that color into a squareObj
            // Recall that each squareObj on our board looks like this: 
              // var square = {
              //     position: [row, column],
              //     color: colorToBeDisplayed,
              //     gamePiece: '', // This is the property that will contain our gamePiece object if one is on that square. 
              //     text: ''
              // };
          // Return the squareObj
          // Set the second row of our gameBoard equal to what map returns to us. 
          // Remember, the key difference between map and each is that each purely has side effects, while map is designed to return a new array that is the same length as the old array. In order to use map properly, we must put this returned array to use. 

var newRow = _.map(gameBoard[1], function(value, index) {
  return value = {
    position: [1, index],
    color: "green",
    gamePiece: '',
    text: ''
  }
})

console.log(newRow);
gameBoard[1] = newRow;


    // Now that we've figured out how to use map and each to change the colors in a row, let's nest them inside of another each to change all of the rows!
      // Let's warm up to this by doing it the way we would have before we knew how to program functionally: using nested for loops. 
        // Use an outer for loop to iterate through the entire gameBoard.
          // Each iteration will access one of the rows in the gameBoard. 
        // Use an inner for loop to iterate through a row. 
          // Each iteration will access one of the squareObjs in that row. 
          // While iterating through each object, change it's color property to 'orange' (or any other color of your choosing).

for (var i = 0; i<gameBoard.length; i++) {
  for (var j = 0; j<gameBoard[i].length; j++) {
    gameBoard[i][j].color = "orange"
  }
};


      // Great! Now that we've changed the color of each square to orange using for loops, let's transition this over to functional programming.
        // First, replace the inner for loop with an each statement that changes the color of each square to blue. Be sure to write a new each statement for this- don't just copy and paste the one you've written up above. We want you to get as much practice typing these out as possible!

for (var i = 0; i<gameBoard.length; i++) {
  _.each(gameBoard[i], function(value, index) {
    gameBoard[i][index].color = 'blue';
  })
}

        // Now that all the squares are changed to blue, let's replace the outer for loop with an each statement. Again, write a whole new one from scratch here. 
          // Change the color in the inner each statement to green, just to make sure everything's working. 
          // Remember, when in doubt, console.log the item you're working with to make sure you understand what it is at each step! 

_.each(gameBoard, function (row, index) {
  _.each(row, function(square, indx) {
    square.color='green';
  })
});



            // This is a really useful pattern to get used to. As you work with more and more complex codebases at various jobs, you won't be able to just look at the code and know exactly what you're working with; you'll have to log the results to see what the variables represent. 
          // This is where naming your variables something descriptive makes a ton of sense. What is the thing that is being passed into the callback function on either each statement? Could you name it something that reflects exactly what's being passed in?

      // Awesome! Hopefully at this point you've fully grasped that each is just another way of executing some code on each item in a collection. And that you can make that code do whatever you want it to. 
        // Let's replace our inner each loop with map, changing the colors of all the squares to purple this time. 
        // Remember that to do this, you'll have to first create an array that is just filled with the word purple 8 times. 

  // One of the things you'll need to be great at as an engineer is debugging. Debugging is nothing more than problem solving, or having fun with a puzzle. 
  // As you work through this project, you will get stuck on things. That's totally normal and expected! Getting your code to work when it isn't is called debugging. When you get stuck, follow the debugging pattern we outline below. 
    // Debugging pattern:
      // 1. Verify all of your assumptions by logging them to the console with clear comments on what each log is. For example: console.log('squareObj inside _.each callback', squareObj);
      // 2. Find the last point in your code where things are doing what you expect them to/ the first point in your code where they're not doing what you expect.
      // 3. Iterate rapidly. Try new things (and console.log them!) until you get to a solution that works. Pay attention to each new result along the way (even if it's not what you expect it to be) to see what new information you can learn from it.
      // 4. High five someone nearby when you figure it out!

  // Now that we have a decent understanding of the gameBoard. Now let's test out the makePiece function. 
    // Let's add a new piece (name it anything you want. babyDino is my current favorite, but I'm sure you'll have fun coming up with your own favorite gamePieces!). Try invoking makePiece with the right arguments and make sure it worked by opening up your browser. Uncomment the following lines to make this work. 
    // makePiece(gameBoard, [3,5], 'babyDino');
    // gameBoard[3][5].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";

    // If you're wondering where this makePiece function came from, it was defined in the helperFunctions.js file and it was declared in the global scope, so it's accessible anywhere in our JavaScript code.

    // Now that we've added a piece to the board, let's use that piece to practice filter. If you're not familiar with filter, look it up in the underscorejs docs! 
    // Invoke _.filter on the row that you just added the gamePiece to. See if you can use it to return an array of only the square(s) that have a gamePiece on them. Do you remember the property name where we're storing gamePiece on each squareObj? 

    // Now try adding gamePieces to a couple of different rows throughout the board using this makePiece funcion. 

    // Go ahead and find all the pieces on the whole board, organized by row.
    // The output should be an array that is filled with nested arrays, one for each row. Each object in those nested row arrays should be a square that has a gamePiece on it. 
      // example output: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two gamePieces on row 5. 
    // Think about whether you might want to use each or map. Discuss with your pair why you might want to choose one over the other. 
      // Hint: Remember that each can't return anything, but it can have side effects (that is, modify variables it has scope access to). On the other hand, map DOES return something... what does it return?
      // Bonus: Write two implementations! One using each and one using map. Be sure to label the output "results after filter using each" & "results after filter using map"

  // Before we move onto the next section, consider commenting out any console.logs you have so far. This will make your console easier to read, and your code look more professional. 

  // We're now going to go on a mini-sprint covering reduce, the last critical functional programming tool. Understanding reduce will let us take this messy nested array we have, and turn it into a single, flattened array. 

  // CARRY ON...
  // Go ahead and jump to the file called '2_reduceIntro.js' in the yourOwnGame folder.
})();
