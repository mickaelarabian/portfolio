import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/layouts/Footer.scss';
import ThemeSwitcher from '../../utils/ThemeSwitcher'

export default class Footer extends Component {
	render() {
		const { dark } = this.props
		return (
			<footer>
				<div id={ThemeSwitcher.setClassName(dark, "footer")}>
					<div className="footer-box">
						<div>
							<a className={ThemeSwitcher.setClassName(dark, "footer-title")} href="https://github.com/mickaelarabian">Github</a>
						</div>
					</div>
					<div className="footer-box">
						<div>
							<a className={ThemeSwitcher.setClassName(dark, "footer-title")} href="https://gitlab.com/mickaelarabian">Gitlab</a>
						</div>
					</div>
					<div className="footer-box">
						<div>
							<a className={ThemeSwitcher.setClassName(dark, "footer-title")} href="https://www.linkedin.com/in/mickaelarabian">Linkedin</a>
						</div>
					</div>
					<div className="footer-box">
						<div>
							<a className={ThemeSwitcher.setClassName(dark, "footer-title")} href="mailto:mickaelarabian@gmail.com">mickaelarabian@gmail.com</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
