import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {items: []}
	}
	componentWillMount(){
		fetch( 'http://swapi.co/api/people/?format=json' )
			.then( response => response.json() )
			.then( ({results: items}) => this.setState({items}))
	}
	render(){
		let items = this.state.items
		return(
			<div>
				{items.map(item => 
					<h4 key={item.name}>{item.name}</h4>)}
			</div>
		)
	}
}

export default App




// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {increasing: false}
// 	}
// 	update(){
// 		ReactDOM.render(
// 			<App val={this.props.val+1} />, 
// 			document.getElementById('app'))
// 	}
// 	componentWillReceiveProps(nextProps){
// 		this.setState({increasing: nextProps.val > this.props.val})
// 	}
// 	shouldComponentUpdate(nextProps, nextState) {
// 		return nextProps.val % 5 === 0;
// 	}
// 	render(){
// 		console.log(this.state.increasing)
// 		return (
// 			<button onClick={this.update.bind(this)}>
// 				{this.props.val}
// 			</button>
// 		)
// 	}
// 	componentDidUpdate(prevProps, prevState) {
// 		console.log(`prevProps: ${prevProps.val}`)
// 	}
// }

// App.defaultProps = {val: 0}

// export default App

// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = { val: 0 };
// 		this.update = this.update.bind(this);
// 	}
// 	update(){
// 		this.setState({val: this.state.val + 1})
// 	}
// 	componentWillMount(){
// 		console.log('mounting')
// 		this.setState({m: 2})
// 	}
// 	render(){
// 		console.log('rendering!')
// 		return <button onClick={this.update}>
// 			{this.state.val * this.state.m}
// 		</button>
// 	}
// 	componentDidMount(){
// 		console.log('mounted');
// 		console.log(ReactDOM.findDOMNode(this))
// 		this.inc = setInterval(this.update,500)
// 	}
// 	componentWillUnmount(){
// 		console.log('bye!')
// 		clearInterval(this.inc)
// 	}
// }

// class Wrapper extends React.Component {
// 	constructor(){
// 		super();
// 	}
// 	mount(){
// 		ReactDOM.render(<App />, document.getElementById('a'))
// 	}
// 	unmount(){
// 		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<button onClick={this.mount.bind(this)}>Mount</button>
// 				<button onClick={this.unmount.bind(this)}>Unmount</button>
// 				<div id="a"></div>
// 			</div>
// 		)
// 	}
// }

// export default Wrapper

// class Button extends React.Component {
// 	render(){
// 		return <button>{this.props.children}</button>
// 	}
// }

// const Heart = () => <span className="glyphicon glyphicon-heart"></span>



//import ReactDOM from 'react-dom';

//		class component can have state

//		rendering two elements must be done using a wrapper.
// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			red: 0,
// 			green: 0,
// 			blue: 0
// 		}
// 		this.update = this.update.bind(this)
// 	}
// 	update(e){
// 		this.setState({
// 			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
// 			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
// 			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
// 		})
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<Slider ref="red" update={this.update} />
// 				{this.state.red}
// 				<br />
// 				<Slider ref="green" update={this.update} />
// 				{this.state.green}
// 				<br />
// 				<Slider ref="blue" update={this.update} />
// 				{this.state.blue}
// 				<br />
// 			</div>
// 		);
// 	}
// }

// class Slider extends React.Component {
// 	render(){
// 		return(
// 			<div>
// 			<input ref="inp" type="range"
// 				min="0"
// 				max="255" 
// 				onChange={this.props.update} />
// 			</div>
// 		);
// 	}
// }


// export default App

//		can create props with expected types
//		can also require a prop to be specified in app

// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }

//		can define the default value of a prop

// App.defaultProps ={
// 	txt: 'this is the default txt'
// }

// ReactDOM.render(
// 	<App cat={5} />,
// 	document.getElementById('app')
// );

//		constant variable (stateless function component) does not have state
// const App = () => <h1>Hello All</h1>

//export default App