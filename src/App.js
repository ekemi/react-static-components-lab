import React, { Component } from 'react';
import CatComponent from './CatComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MousseComponent from './MouseComponent';
class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MousseComponent/>
			</div>
		);
	}
}

export default App;
