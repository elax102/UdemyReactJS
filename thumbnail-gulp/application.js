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

//After render, place in body tag
React.render(element, document.querySelector('.container'));
var Badge = React.createClass({displayName: "Badge",
    render: function(){
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });
    return React.createElement("div", null, 
        list
    )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
        return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
            React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: this.props.imageUrl}), 
                  React.createElement("div", {className: "caption"}, 
                  React.createElement("h3", null, this.props.header), 
                  React.createElement("p", null, this.props.description), 
                    React.createElement("p", null, 
                    React.createElement(Badge, {title: this.props.title, number: this.props.number})
                    )
                  )
                )
            )
    }
});