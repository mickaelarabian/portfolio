import React, { Component } from 'react';
import '../../stylesheets/elements/Switch.scss';

export default class Switch extends Component {

    render() {
        const { dark } = this.props
        return (
            <>
                <input 
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                    onClick={this.props.toggleTheme}
                    checked={this.props.dark}
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
            </>
        );
    }
}
