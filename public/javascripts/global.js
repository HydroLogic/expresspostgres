// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    $('.verylargebutton').click(function(){
        populateTable();
    });
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

});

// Functions =============================================================

// Fill table with data
function populateTable() {
console.log('in populate');
    // Empty content string
    var tableContent = '';


    // jQuery AJAX call for JSON
    $.getJSON( '/api/bruce', function( data ) {
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