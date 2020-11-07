import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/elements/Formation.scss';
import ThemeSwitcher from '../../utils/ThemeSwitcher'

export default class Formation extends Component {

    render() {
        const { dark } = this.props
        return (
            <section id={ThemeSwitcher.setClassName(dark, "formation")}>
                <div style={{ textAlign: 'center', marginBottom: 25 }}>
                    <h3 className={ThemeSwitcher.setClassName(dark, "formation-btitle")}>Mon parcours</h3>
                </div>
                <div id="parcours">
                    <div class="timeline">
                        <div class="containetime left">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>2017 - 2018</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}>Baccalauréat Scientifique - Lycée Charlie Chaplin</p>
                            </div>
                        </div>
                        <div class="containetime right">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>17/06/19 - 31/07/19</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}><b>Stage:</b> Développement d'applications web - ADDE</p>
                            </div>
                        </div>
                        <div class="containetime left">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>01/08/19 - 31/08/19</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}><b>CDD:</b> Développeur Full-Stack junior - ADDE</p>
                            </div>
                        </div>
                        <div class="containetime right">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>10/02/20 - 03/04/20</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}><b>Stage:</b> Développement d'applications mobiles - Atlantic Tech</p>
                            </div>
                        </div>
                        <div class="containetime left">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>2018 - 2020</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}>Brevet de Technicien Supérieur - Institution des chartreux</p>
                            </div>
                        </div>
                        <div class="containetime right">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>01/06/20 - 14/08/20</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}><b>CDD:</b> Développeur Full-Stack - Atlantic Tech</p>
                            </div>
                        </div>
                        <div class="containetime left">
                            <div class="contenttime">
                                <p className={ThemeSwitcher.setClassName(dark, "formation-date")}>2020 - 2023</p>
                                <p className={ThemeSwitcher.setClassName(dark, "formation-title")}>Ingénieur en Informatique et CyberSécurité - CPE Lyon</p>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:'center', marginTop:20}}>
                        <Link className={ThemeSwitcher.setClassName(dark, "link")} download="CV_Mickael_Arabian.pdf" target="_blank">Curriculum vitæ</Link>
                    </div>
                </div>
            </section>
        );
    }
}
