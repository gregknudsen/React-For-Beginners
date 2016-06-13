var React = require('react');
var ReactDOM = require('react-dom');


/*
	App
*/

var App = React.createClass({

	render : function() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header />
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
});

/*
	Header
	<Header />
*/

var Header = React.createClass({
	render : function () {
		return (
			<p>Header</p>
		)
	}
});

/*
	Order
	<Order />
*/

var Order = React.createClass({
	render : function () {
		return (
			<p>Order</p>
		)
	}
});

/*
	Inventory
*/

var Inventory = React.createClass({
	render : function () {
		return (
			<p>Inventory</p>
		)
	}
});

/*
	StorePicker
	This will let us make StorePicker
*/

var StorePicker = React.createClass({

	render : function() {
		var name = 'greg';
		return (
			<form className="store-selector">
		{/* How to write a comment in JSX */}
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" required />
				<input type="Submit" />
			</form>
		)
	}
});


ReactDOM.render(<App/>, document.querySelector('#main'));