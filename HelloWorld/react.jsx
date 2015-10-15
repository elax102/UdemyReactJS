//Define a class
var HelloWorld = React.createClass({
    render: function(){
        return <div>
            Hello World!
        </div>
    }
});

//React render class
var element = React.createElement(HelloWorld);

//After render, place in body tag
React.render(element, document.body);