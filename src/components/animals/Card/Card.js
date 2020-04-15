import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Front from  '../Front/Front';
import Back from '../Back/Back';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 

	render() {
		return (
			<div className = 'fl w-third pa2 grow'>
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
	        		<Front toFlip = {this.handleClick} name = {this.props.name} animal_class = {this.props.animal_class}/>
	        		<Back toFlip = {this.handleClick} name = {this.props.name} description = {this.props.description} animal_class = {this.props.animal_class}/>
	      		</ReactCardFlip>
      </div>
		);
	}
}
