// Task 1: Array Manipulation Basics

//Create an empty array called shoppingList.
let shoppingList = [];
//Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
function addItem() {
    item = prompt("Enter an item.")
    shoppingList.push(item) // Add item to shopping list
    console.log(shoppingList)

}
//Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeItem() {
    shoppingList.pop() // Removes the last item from list
    console.log(shoppingList)

}
//Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList() {
    for (let item of shoppingList) {
        console.log(shoppingList)

    }
}

// Task 2: Filter and Search an Array
//Modify the addItem function to only add the item if it is not already in the shoppingList array.



//Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems() {
    item = prompt("Enter the item you'd like to search for.")
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] === item) {
            alert(item)
            console.log("Item is present.")
        } else {
            console.log("Item is not present.")

        };
    }
}

// Task 3: Render the List in the Browser
//Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.

//Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
addItemButton.addEventListener("click", function addItem() {
    let item = itemInput.value;
    if (item === "") {
    alert("Please enter an item.");
    return
  }
shoppingList.push(item); // Add item to list
console.log(shoppingList);

//displayList()
  }

);

//Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

removeItemButton.addEventListener("click", function removeItem() {
    //let item = itemInput.value;
    shoppingList.pop(); // Remove last item from list
    console.log(shoppingList);

}
);