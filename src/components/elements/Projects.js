import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/elements/Projects.css';
import projetc1 from '../../assets/designer_1.svg'
import project2 from '../../assets/cto.svg'
import project3 from '../../assets/laboratory_analyst.svg'
import project4 from '../../assets/team_meeting_2.svg'
import projetc5 from '../../assets/it_support.svg'

export default class Projects extends Component {

    render() {
        return (
            <section id="projects">
                <div id="containProjet">
                    <div class="boxProjet">
                        <div class="cardProjet">
                            <Link title="Projet de Stage - Visual"><img style={{ paddingTop: 35 }} width="150px" src={projetc1}
                                alt=""></img></Link>
                        </div>
                        <div style={{ textAlign: 'center', display: 'inline-block' }}>
                            <p style={{ fontSize: 25 }}>Visual</p>
                        </div>
                    </div>
                    <div class="boxProjet">
                        <div class="cardProjet">
                            <Link title="Projet de BTS - GSB Back Office"><img style={{ paddingTop: 30 }} width="150px" src={project2}
                                alt=""></img></Link>
                        </div>
                        <p style={{ fontSize: 25 }}>GSB Back Office</p>
                    </div>
                    <div class="boxProjet">
                        <div class="cardProjet">
                            <Link title="Projet de BTS - GSB Mobile"><img style={{ paddingTop: 30 }} width="150px"
                                src={project3} alt=""></img></Link>
                        </div>
                        <p style={{ fontSize: 25 }}>GSB Mobile</p>
                    </div>
                    <div class="boxProjet">
                        <div class="cardProjet">
                            <Link title="Projet de Stage - DomoTech"><img style={{ paddingTop: 40 }} width="150px"
                                src={project4} alt=""></img></Link>
                        </div>
                        <p style={{ fontSize: 25 }}>DomoTech</p>
                    </div>
                    <div class="boxProjet">
                        <div class="cardProjet">
                            <Link title="Veille technologique - MongoDB"><img style={{ paddingTop: 35 }} width="150px"
                                src={projetc5} alt=""></img></Link>
                        </div>
                        <p style={{ fontSize: 25 }}>Veille</p>
                    </div>
                </div>
            </section>
        );
    }
}
