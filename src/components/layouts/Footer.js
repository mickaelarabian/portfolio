import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/layouts/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div id="footer">
					<div className="footer-box">
						<div>
							<Link className="footer-title" to="https://github.com/mickaelarabian">Github</Link>
						</div>
					</div>
					<div className="footer-box">
						<div>
							<Link className="footer-title" to="https://gitlab.com/mickaelarabian">Gitlab</Link>
						</div>
					</div>
					<div className="footer-box">
						<div>
							<Link className="footer-title" to="https://www.linkedin.com/in/mickaelarabian">Linkedin</Link>
						</div>
					</div>
					<div className="footer-box">
						<div>
							<Link className="footer-title" to="mailto:mickaelarabian@gmail.com">mickaelarabian@gmail.com</Link>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
