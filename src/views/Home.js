import React from 'react';

//Tugas 4.1
export default class Home extends React.Component {
	
	constructor(){
		super();
		this.state = {
			name : "",
			status: "",
		}
	}
		
	render() {
		return (
			<div>
				<h2 className='text-center text-info'>Sistem Informasi E-biz</h2>
			
				<Input 
				get Values={(name, value) => this.setState({ [name] : value})} />
				<Card name={this.state.name}>
				<p>{this.state.status}</p>
				</Card>
			</div>
			
		)
	}
}

//Latihan 5.5, State
// export default class Home extends React.Component {
	
// 	constructor(props){
// 		super(props);
// 		this.state = {name : this.props.name}
// 	}
		
// 	render() {
// 		return (
// 			<div>
// 				<h2>Title Home Component</h2>
// 				<p>Hello my name is {this.props.name}</p>
// 				<button onclick={()=> this.setState({name : 'Tyrion Lannister'
// 				}) }> Change my name </button>
// 			</div>
// 		)
// 	}
// }

//Latihan 5.4
// export default class Home extends React.Component{ 
// 	render() {
// 		return (
// 		<div>
// 			<h2> Title Home Component </h2>
// 			<p> Hello my name is {this.props.name} </p>
// 		</div>
// 		)
// 	}
// }

//Latihan 5.3
// export default class Home extends React.Component{ 	
// 	render() {
// 		return (
// 		<div>
// 			<h2> Title Home Component </h2>
// 			<p> Content Home component </p>
// 		</div>
// 		)
// 	}
// }
