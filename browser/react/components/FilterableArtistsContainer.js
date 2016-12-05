import React from 'react';
import Artists from './Artists';
import FilterInput from './FilterInput';

class FilterableArtistsContainer extends React.Component {
	constructor (props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			inputValue: ''
		}
	}

	handleChange(event) {
		console.log(event.target.value)
		this.setState({ inputValue: event.target.value });
	}

	render () {
		const inputValue = this.state.inputValue;
	    const filteredArtists = this.props.artists.filter(artist =>
	    	artist.name.toLowerCase().match(inputValue.toLowerCase())
	    )

	    return (
	    	<div>
				<FilterInput handleChange={this.handleChange} />
				<Artists artists={filteredArtists} />
			</div>
		)
	}
}




export default FilterableArtistsContainer;