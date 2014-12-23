// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    $('.verylargebutton').click(function(){
        populateTable();
    });

});

// Functions =============================================================

// Fill table with data
function populateTable() {
console.log('in populate')
    // Empty content string
    var tableContent = '';


    // jQuery AJAX call for JSON
    $.getJSON( '/api/zev', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.name + '" title="Show Details">' + this.name + '</a></td>';
            tableContent += '<td>' + this.address + '</td>';
            tableContent += '<td>' + this.lat + '</td>';
            tableContent += '<td>' + this.long + '</td>';
            tableContent += '</tr>';
        });
    //     // Inject the whole content string into our existing HTML table
        $('#aaa').html(tableContent);
    });
}