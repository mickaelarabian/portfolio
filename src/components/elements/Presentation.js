import React, { Component } from 'react';
import '../../stylesheets/elements/Presentation.scss';
import ThemeSwitcher from '../../utils/ThemeSwitcher'

export default class Presentation extends Component {

    render() {
        const { dark } = this.props
        return (
            <section id={ThemeSwitcher.setClassName(dark, "presentation")}>
                <div>
                    <h3 class={ThemeSwitcher.setClassName(dark, "phtitle")}>Présentation personnelle</h3>
                </div>
                <div id="textpropos">
                    <p className={ThemeSwitcher.setClassName(dark, "desc")}> Je suis actuellement étudiant en formation d'ingénieur en Informatique et CyberSécurité au sein de <a href="https://www.cpe.fr/"><strong className={ThemeSwitcher.setClassName(dark, "strong")}>CPE LYON</strong></a>.
             						 <br />Sur ce portfolio qui j'ai réalisé dans le cadre de mes études, vous trouverez tout ce qui concerne ma formation, mes compétences et mes projets.<br />
										Vous pourrez également visualiser mon CV et ainsi accéder à mon compte linkedin et Github. </p>
                </div>
            </section>
        );
    }
}
