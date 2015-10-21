var React = require('react');
var ThumbnailList = require('./dropdown');

var options = {
    title: 'Choose a dessert', //What should show up on the button to open/close the dropdown
    items: [
        'Apple Pie',
        'Peach Cobbler',
        'Coconut Cream Pie'
    ]
};


//React render class
var element = React.createElement(ThumbnailList, options);

//After render, place in selected tag
React.render(element, document.querySelector('.container'));