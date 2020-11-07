import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/layouts/Header.scss';
import logo from '../../assets/logo.svg'
import ThemeSwitcher from '../../utils/ThemeSwitcher'
import Switch from '../elements/Switch';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadow: 'false'
        };
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const shadow = window.scrollY < 50 ? "none" : "rgba(0, 0, 0, 0.1) 0px 2px 4px";
            this.setState({ shadow: shadow });
        })
    }

    render() {
        const { dark } = this.props
        return (
            <header id={ThemeSwitcher.setClassName(dark, "header")} style={{ boxShadow: this.state.shadow }}>
                <div id="logo">
                    <Link to="/"><img id="logo-img" width="35px" src={logo} alt=""></img></Link>
                </div>
                <div id="btnSwitch">
                    <Switch toggleTheme={this.props.toggleTheme} dark={dark} />
                </div>
            </header>
        );
    }
}
