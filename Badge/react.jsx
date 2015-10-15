//Define a class
var Badge = React.createClass({
    render: function(){
        return <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});

var options = {
title: 'Inbox',
number: 32
};


//React render class
var element = React.createElement(Badge, options);

//After render, place in body tag
React.render(element, document.body);