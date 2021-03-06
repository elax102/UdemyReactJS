var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [{
        title: 'See Tutorials',
        number: 12,
        header: 'Learn React',
        description: 'This is a description of the thumbnail.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png'
    },{
        title: 'See Tutorials',
        number: 42,
        header: 'Learn Gulp',
        description: 'I have no idea what Gulp is but I am goona find out.',
        imageUrl: 'http://www.fsjohnny.com/content/images/2015/07/gulp.jpg'
    }]
};


//React render class
var element = React.createElement(ThumbnailList, options);

//After render, place in selected tag
React.render(element, document.querySelector('.container'));