import React, { Component } from 'react';
import '../../stylesheets/elements/Discover.css';
import logo from '../../assets/logo.svg'

export default class Discover extends Component {

	render() {
		return (
			<section id="discover">
				<div id="firstdiv">
					<div className="divleft">
						<div className="discover-cadre">
							<div className="title">
								<h1>Mickaël ARABIAN</h1>
							</div>
							<div className="subtitle">
								<h2>Étudiant à CPE Lyon en <strong>Informatique et CyberSécurité</strong></h2>
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
