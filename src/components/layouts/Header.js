import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/layouts/Header.css';
import logo from '../../assets/logo.svg'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadow:'none'
        };
    }

    componentDidMount(){
        document.addEventListener("scroll", () => {
            const shadow = window.scrollY < 50 ? "none" : "rgba(0, 0, 0, 0.1) 0px 2px 4px";
			this.setState({ shadow: shadow });
        })
    }

    render() {
        return (
            <header style={{boxShadow: this.state.shadow}}>
                <div id="logo">
                    <Link to="/"><img id="logo-img" width="35px" src={logo} alt=""></img></Link>
                </div>
            </header>
        );
    }
}
