import React, { Component } from 'react';
import '../stylesheets/Home.scss';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Skills from './elements/Skills';
import Formation from './elements/Formation';
import Projects from './elements/Projects';
import Presentation from './elements/Presentation';
import Discover from './elements/Discover';
import ThemeSwitcher from '../utils/ThemeSwitcher'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dark: false
		};
	}

	componentDidMount() {
		if (localStorage.getItem("dark") != null) {
			const mode = JSON.parse(localStorage.getItem("dark"));
			this.setState({ dark: mode });
		}
	}

	toggleTheme = () => {
		localStorage.setItem("dark", !this.state.dark)
		this.setState({ dark: !this.state.dark })
	}

	render() {
		const { dark } = this.state
		return (
			<>
				<Header toggleTheme={this.toggleTheme} dark={dark} />
				<main id={ThemeSwitcher.setClassName(dark, "mainApp")}>
					<Discover dark={dark} />
					<Presentation dark={dark} />
					<Skills dark={dark} />
					<Formation dark={dark} />
					<Projects dark={dark} />
				</main>
				<Footer dark={dark} />
			</>
		);
	}
}
