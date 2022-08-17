import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Games from './view/games';

export default class extends React.Component {

	render() {

		return (
            <div>
				<Games endpoint={this.props.configuration.portletInstance.endpointService}/>
			</div>
		);
	}	
}