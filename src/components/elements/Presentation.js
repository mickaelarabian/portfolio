import React, { Component } from 'react';
import '../../stylesheets/elements/Presentation.css';

export default class Presentation extends Component {

    render() {
        return (
            <section id="presentation">
                <div>
                    <h3 class="phtitle">Présentation personnelle</h3>
                </div>
                <div id="textpropos">
                    <p> Je suis actuellement étudiant en formation d'ingénieur en Informatique et CyberSécurité au sein de <a href="https://www.cpe.fr/"><strong>CPE LYON</strong></a>.
             						 <br />Sur ce portfolio qui j'ai réalisé dans le cadre de mes études, vous trouverez tout ce qui concerne ma formation, mes compétences et mes projets.<br />
										Vous pourrez également visualiser mon CV et ainsi accéder à mon compte linkedin et Github. </p>
                </div>
            </section>
        );
    }
}
