// So what do we need to do

// In terms of user experience, your shopping list app must allow users to:

// ===============================================================================================================
//  -  ENTER ITEMS THEY NEED TO PURCHASE BY ENTERING TEXT AND HITTING "RETURN" OR CLICKING THE "ADD ITEM" BUTTON
// -------------------------------------------------------------------------------------------------------------
    // ++ Listen for user input on and collect user data from
        // ++ <form id="js-shopping-list-form">
        // ++  <label for="shopping-list-entry">Add an item</label>
        // ++  <input type="text" name="shopping-list-entry" id="shopping-list-entry" placeholder="e.g., broccoli">
        // ++  <button type="submit">Add item</button>
        // ++ </form>
            // ** On button submit or on enter keypress -- I think this is just general submission behavior but we can test after
            // ++ We'll also want to prevent default behavior here
    // ++ Add new <li> element to ul class "shopping-list" containing user data
    // ++ Account for empty input
// ===============================================================================================================

// It's go time
$(function() {

    // Computer, on form submit
    $('#js-shopping-list-form').submit(event => {

        // Don't do that thing you were gonna do
        event.preventDefault();

        // Instead, create a variable to hold the value of the text input
        let listItem = $('#shopping-list-entry').val();

        // And make sure that input's not empty
        if (listItem === "") {
            alert('Lists require items!');
            return;
        }

        // And then create a variable to hold the string of HTML for our list item
        let listItemContainer = `<li>\
             <span class="shopping-item">${listItem}</span>\
             <div class="shopping-item-controls">\
             <button class="shopping-item-toggle">\
                 <span class="button-label">check</span>\
             </button>\
             <button class="shopping-item-delete">\
                 <span class="button-label">delete</span>\
             </button>\
             </div>\
         </li>`;

        // and append to all elements classed .shopping-list, in this case 
        // a lone ul, a new li via the HTML string up there
        $('.shopping-list').append(listItemContainer);

        // And then reset the input form
        $('#shopping-list-entry').val("")

    })
    


// ===============================================================================================================
//  -  CHECK AND UNCHECK ITEMS ON THE LIST BY CLICKING THE "CHECK" BUTTON
// ----------------------------------------------------------------------
// ++ Listen for user input on
        // ++<button class="shopping-item-toggle">
        // ++    <span class="button-label">check</span>
        // ++ </button>
    
    // ++ Toggle strikethrough on 
        // ++ <span class="shopping-item">apples</span>
        // ++ Bonus points if I can get it to say "uncheck"
        // ++ Thinkful suggestions imply toggleClass() method may be worth investigating here
// ===============================================================================================================

    // Computer, if someone clicks the check button
    $('ul').on('click', '.shopping-item-toggle', function(event) {

        // Add the class shopping-item__checked to the parent element with the class shopping-item,
        this.find('shopping-item').toggleClass('shopping-item__checked');

        // And while we're at it let's try to get cheeky by changing "check" to "uncheck"
        // this.find('span').text('uncheck');

        // this.closest('li').remove();
      });
    // <span class="shopping-item">apples</span>

    // .shopping-item__checked {
    //     text-decoration: line-through;
    //   }

    

// ===============================================================================================================
//  -  PERMANENTLY REMOVE ITEMS FROM THE LIST
// ----------------------------------------------
    // ++ Remove existing <li> element from ul class "shopping list"
        // ++ On button click
            // ++ <button class="shopping-item-delete">
            // ++ <span class="button-label">delete</span>
            // ++ </button>

    // Can't delete created divs. Why?
// ===============================================================================================================

 // Computer, if someone clicks the delete button
  $('ul').on('click', '.shopping-item-delete', function(event) {

    // Delete the entire list item
    this.closest('li').remove();
  });

});