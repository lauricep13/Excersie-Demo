import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layout/index';
import Excersies from './Exercises';

export default class extends Component {
	render() {
		return (
			<Fragment>
				<Header />

				<Excersies />

				<Footer />
			</Fragment>
		);
	}
}
