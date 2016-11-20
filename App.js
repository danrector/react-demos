import React from 'react';
import ReactDOM from 'react-dom';

//		class component can have state

//		rendering two elements must be done using a wrapper.
class App extends React.Component {
	render(){
		
		return <h1>{this.props.txt}</h1>
	}
}

ReactDOM.render(
	<App txt="this is the props text" />,
	document.getElementById('app')
);

//		constant variable (stateless function component) does not have state
// const App = () => <h1>Hello All</h1>

//export default App