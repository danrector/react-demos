import React from 'react';

//		class component can have state

//		rendering two elements must be done using a wrapper.
class App extends React.Component {
	render(){
		return (
			<div>
			<h1>Hello World</h1>
			<b>Bold</b>
			</div>
		);
	}
}


//		constant variable (stateless function component) does not have state
// const App = () => <h1>Hello All</h1>

export default App