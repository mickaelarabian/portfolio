import React, { Component } from 'react';
import '../../stylesheets/elements/Skills.css';

export default class Skills extends Component {

    render() {
        return (
            <section id="skills">
                <h3 class="skill">Mes compétences</h3>
                <div id="competenceType">
                    <div id="leger">
                        <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 7, color:'#212529' }}>
                            Client Léger
            </div>
                        <div>
                            <div>
                                <div class="principale">
                                    PHP
                </div>
                                <div class="secondaire">
                                    Laravel
                </div>
                            </div>
                            <div>
                                <div class="principale">
                                    Javascript
                </div>
                                <div class="secondaire">
                                    Nodejs
                </div>
                                <div class="secondaire">
                                    React
                </div>
                                <div class="secondaire">
                                    React Native
                </div>
                            </div>
                            <div>
                                <div class="principale">
                                    Css
                </div>
                                <div class="secondaire">
                                    Bootstrap
                </div>
                            </div>
                            <div>
                                <div class="principale">
                                    Html
                </div>
                            </div>

                        </div>
                    </div>

                    <div id="lourd">
                        <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 7, color:'#212529' }}>
                            Client lourd
            </div>
                        <div>
                            <div>
                                <div class="principale">
                                    Java
                </div>
                                <div class="secondaire">
                                    Hibernate
                </div>
                            </div>
                            <div>
                                <div class="principale">
                                    C
                </div>
                            </div>
                        </div>
                    </div>
                    <div id="requetage">
                        <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 7, color:'#212529' }}>
                            Données
            </div>
                        <div>
                            <div>
                                <div class="principale">
                                    SQL
                </div>
                            </div>
                        </div>
                    </div>
                    <div id="admin">
                        <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 7, color:'#212529' }}>
                            Administration
            </div>
                        <div>
                            <div>
                                <div class="principale">
                                    Linux
                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
