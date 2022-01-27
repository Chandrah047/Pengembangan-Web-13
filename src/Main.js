import React, { Component } from 'react';
import Card from './components/Card';

//Latihan 5.10, Props function
export default class Main extends React.Component{

	constructor(){
			super();
			this.state = {
				your_name : '',
				status : ''
		}
}

	render() {
		return(
			<React.Fragment>
				<h2 style={{width: '550px', margin : 'auto', textAlign : 'center',
				color : '#4d90fe'}}> Sistem Informasi E-biz
				</h2>
				<Input getValues={(name, value)=> this.setState({[name] : value}) } />
				
				<Card.Container>
					<Card.Header>{this.state.your_name}</Card.Header>
					<Card.Body>
						<p>{this.state.status}</p>
					</Card.Body>
				</Card.Container>
			</React.Fragment>
		);
	}
}

//Latihan 5.7, Child Component
// export default class Main extends React.Component{
// 	render() {
// 		return(
// 			<Card>
// 				<p>Build encapsulated components that manage their own state, then compose 
// 				them to make complex UIs. </p> 
// 			</Card>
//  		);
//  	}
// }