//Define a class
var Badge = React.createClass({
    render: function(){
        return <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});

var Thumbnail = React.createClass({
    render: function(){
        return <div className="thumbnail">
        <img src={this.props.imageUrl} />
                  <div className="caption">
                  <h3>{this.props.header}</h3>
                  <p>{this.props.description}</p>
                    <p>
                    <Badge title={this.props.title} number={this.props.number} />
                    </p>
                  </div>
                </div>
    }
});

var options = {
title: 'See Tutorials',
number: 32,
header: 'Learn React',
description: 'This is a description of the thumbnail.',
imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png'
};


//React render class
var element = React.createElement(Thumbnail, options);

//After render, place in body tag
React.render(element, document.querySelector('.target'));