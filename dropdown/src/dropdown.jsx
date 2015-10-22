//We need to show a button and a list
//This componet should know when to show the list
//based on when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

//toggle state of this.state.open when clicked
//setState should rerender for us
module.exports = React.createClass({
    handleClick: function(){
        this.setState({open: !this.state.open})
    },
    
    getInitialState: function(){
    return {open: false}
    },
    
    handleItemClick: function(item){
        this.setState({
            open: false,
            itemTitle: item
        });
    },
    
    render: function(){
    var list = this.props.items.map(function(item){
        return <ListItem 
            item={item} 
            whenItemClicked={this.handleItemClick} 
            className={this.state.itemTitle === item ? "active" : ""}
        />
    }.bind(this));
    
        //if this.state.open is truthy display show if falsy display empty string
        //when clicked, toggle this.state.open and force rerender
        return <div className="dropdown">
        <Button 
            whenClicked={this.handleClick} 
            className="btn-default" 
            title={this.state.itemTitle || this.props.title} subTitleClassName="caret" 
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>{list}</ul>
        
        </div>
    }
});