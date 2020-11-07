import React, { Component } from 'react';
import '../stylesheets/NotFound.scss';
import Header from './layouts/Header';

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="notfound">
					<h1 className="not">Oups ! Erreur 404 !</h1>
				</main>
			</div>
		);
	}
}
