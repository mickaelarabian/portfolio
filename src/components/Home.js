import React, { Component } from 'react';
import '../stylesheets/Home.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Skills from './elements/Skills';
import Formation from './elements/Formation';
import Projects from './elements/Projects';
import Presentation from './elements/Presentation';
import Discover from './elements/Discover';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Discover />
					<Presentation />
					<Skills />
					<Formation />
					<Projects />
				</main>
				<Footer />
			</div>
		);
	}
}
