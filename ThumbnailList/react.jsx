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
        return <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
            <img src={this.props.imageUrl} />
                  <div className="caption">
                  <h3>{this.props.header}</h3>
                  <p>{this.props.description}</p>
                    <p>
                    <Badge title={this.props.title} number={this.props.number} />
                    </p>
                  </div>
                </div>
            </div>
    }
});

var ThumbnailList = React.createClass({
    render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
    return <Thumbnail {...thumbnailProps} />
        });
    return <div>
        {list}
    </div>
    }
});

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