import React, { Component } from 'react';
import '../../stylesheets/elements/Discover.scss';
import logo from '../../assets/logo.svg'
import ThemeSwitcher from '../../utils/ThemeSwitcher'

export default class Discover extends Component {

	render() {
		const { dark } = this.props
		return (
			<section id={ThemeSwitcher.setClassName(dark, "discover")}>
				<div id="firstdiv">
					<div className="divleft">
						<div className="discover-cadre">
							<div className="title">
								<h1 id={ThemeSwitcher.setClassName(dark, "mainTitle")}>Mickaël ARABIAN</h1>
							</div>
							<div className="subtitle">
								<h2 id={ThemeSwitcher.setClassName(dark, "secondTitle")}>Étudiant à CPE Lyon en <strong className={ThemeSwitcher.setClassName(dark, "strong")}>Informatique et CyberSécurité</strong></h2>
							</div>
						</div>
					</div>
					<div className="divright">
						<div className="imgright">
							<img id="logo-img" width="250" src={logo} alt=""></img>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
