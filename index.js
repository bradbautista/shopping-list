// So what do we need to do

// In terms of user experience, your shopping list app must allow users to:

//  -  ENTER ITEMS THEY NEED TO PURCHASE BY ENTERING TEXT AND HITTING "RETURN" OR CLICKING THE "ADD ITEM" BUTTON

    // Listen for user input on and collect user data from
        // <form id="js-shopping-list-form">
        //   <label for="shopping-list-entry">Add an item</label>
        //   <input type="text" name="shopping-list-entry" id="shopping-list-entry" placeholder="e.g., broccoli">
        //   <button type="submit">Add item</button>
        // </form>
            // On button submit or on enter keypress
            // We'll also want to prevent default behavior here

    // Add new <li> element to ul class "shopping list" containing user data

//  -  CHECK AND UNCHECK ITEMS ON THE LIST BY CLICKING THE "CHECK" BUTTON

    // Listen for user input on
        // <button class="shopping-item-toggle">
        //     <span class="button-label">check</span>
        // </button>
    
    // Toggle strikethrough on 
        // <span class="shopping-item">apples</span>
        // Bonus points if I can get it to say "uncheck"
        // Thinkful suggestions imply toggleClass() method may be worth investigating here

//  -  PERMANENTLY REMOVE ITEMS FROM THE LIST

    // Remove existing <li> element from ul class "shopping list"
        // On button click
            // <button class="shopping-item-delete">
            // <span class="button-label">delete</span>
            // </button>