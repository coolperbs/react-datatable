import React from 'react'
import {Router,Route,Link} from 'react-router'

console.log(3333)

const page1 = React.createClass({
	render	: 	function(){
		return (<div> 第一页 </div>);	
	}
	
});
const page2 = React.createClass({
	render	: function(){
		return (<div> 第二页 </div>);
	}
});

const app = React.createClass({
	render	: 	function(){
		console.log(123);
		return (
			<div>
			<a href="#"><Link to="/page1">1</Link></a>
			<a href="#"><Link to="/page1">2</Link></a>
			</div>
		)
	}
})

React.render((
	<Router>
		<Route path="/" component={app} >
			<Route path="page1" component={page1} ></Route>
			<Route path="page2" component={page2} ></Route>
		</Route>
	</Router>

),document.body);

React.render(
  <h1>Hello, world!</h1>
  ,document.body
);

