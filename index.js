// It's go time
$(function() {

    // Computer, on form submit
    $('#js-shopping-list-form').submit(event => {

        // Don't do that thing you were gonna do
        event.preventDefault();

        // Instead, create a variable to hold the value of the text input
        let listItem = $('#shopping-list-entry').val();

        // And make sure that input's not empty or a bunch of spaces
        if ($.trim(listItem) === "") {
            alert('Lists require items!');
            return;
        }

        // And then create a variable to hold the string of HTML 
        // for the list item we're going to create
        let listItemBoilerplate = `<li>\
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
        $('.shopping-list').append(listItemBoilerplate);

        // And then reset the input form
        $('#shopping-list-entry').val("")

    })

    // Also, computer, if someone clicks the check button
    $('ul').on('click', '.shopping-item-toggle', function(event) {

        // Add the class shopping-item__checked to the the nearest uncle/aunt with the class shopping-item,
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');

        // And while we're at it, check to see if that auncle has .shopping-item__checked. 
        // If it does, change the text of the "check" button to "uncheck"

        if ($(this).parent().siblings('.shopping-item').hasClass('shopping-item__checked')) {
            $(this).text('uncheck');
        } else {
            $(this).text('check');
        }
    });

    

    // Also, computer, if someone clicks the delete button
    $('ul').on('click', '.shopping-item-delete', function(event) {

        // Delete the entire list item
        this.closest('li').remove();
    });

});