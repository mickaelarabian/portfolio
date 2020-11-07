import React, { Component } from 'react';
import '../../stylesheets/elements/Skills.scss';
import ThemeSwitcher from '../../utils/ThemeSwitcher'

export default class Skills extends Component {

    render() {
        const { dark } = this.props
        return (
            <section id={ThemeSwitcher.setClassName(dark, "skills")}>
                <h3 class={ThemeSwitcher.setClassName(dark, "skill")}>Mes compétences</h3>
                <div id="competenceType">
                    <div id="leger">
                        <div class={ThemeSwitcher.setClassName(dark, "skill-subtitle")}>
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
                        <div class={ThemeSwitcher.setClassName(dark, "skill-subtitle")}>
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
                        <div class={ThemeSwitcher.setClassName(dark, "skill-subtitle")}>
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
                        <div class={ThemeSwitcher.setClassName(dark, "skill-subtitle")}>
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
