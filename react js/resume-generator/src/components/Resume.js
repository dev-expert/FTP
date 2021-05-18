import React, { Component } from 'react'
import Profile from './Profile'
import Skills from './Skills'
import Languages from './Languages'
import Interests from './Interests'
import Education from './Education'
import Projects  from './Projects'
import Organizations from './Organizations'
import Courses from './Courses'
import Achievements from './Achievements'
import Name from './Name'


export default class Home extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                            <Skills/>
                            <Languages/>
                            <Interests/>
                        </div> 
                        <div className="col s12 m8 l9">
                                <Name />
                                <Education />
                                <Projects />
                                <Organizations />
                                <Courses />
                                <Achievements />
                            </div>      
                    </div>
                </div>
            </section>
        )
    }
}
