import React from 'react';
import Card from '../Card/Card';
export default class CardList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
		{
			this.props.animals.map((user,i) =>{
				return 	<Card 
				name = {this.props.animals[i].name} 
				animal_class = {this.props.animals[i].animal_class} 
				description = {this.props.animals[i].description}/>
			}
		)}
			</div>

		);
	}
}
