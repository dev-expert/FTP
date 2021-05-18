import React, { Component } from 'react'
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            address: '',
            linkedin: '',
            github: '',
            hobbies:[],
            hobbie: '',
            skills: [],
            skill:'',
            languages: [],
            language : '',

            // education : {
            //     courses : [],
            //     course: '',
            //     },

            courses : [],
            course: '',
            colleges:[],
            college: '',
            years:[],
            year: '',
            streams:[],
            stream: '',
            place: '',
            places:[],

            projects : [],
            projectname: '',
            desc : [],
            description: '',
            organisations: [],
            organisation:'',
            certis: [],
            certi:'',
            achieve: '',
            achieves:[],
            

        }
        
    }

    handleFnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleNumberChange = (event) => {
        this.setState({
            number: event.target.value
        })
    }

    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleLinkedinChange = (event) => {
        this.setState({
            linkedin: event.target.value
        })
    }

    handleGithubChange = (event) => {
        this.setState({
            github: event.target.value
        })
    }

    

    handleSkillsChange = ({target: { value }}) => {
        this.setState({ skill : value })
    }

    addSkill=(e)=>{
        e.preventDefault();
        this.setState(({ skills, skill }) => ({
          skills: [...skills, ...skill.split(",")],
          skill : ""
        }));
        
    }

    handleLanguagesChange = ({target: { value }}) => {
            this.setState({ language : value })
    }

    addLanguage=(e)=>{
        e.preventDefault();
        this.setState(({ languages, language }) => ({
          languages: [...languages, ...language.split(",")],
          language : ""
        }));
        
    }

    handleHobbiesChange = ({target: { value }}) => {
        this.setState({ hobbie : value })
    }

    addHobbies=(e)=>{
        e.preventDefault();
        this.setState(({ hobbies, hobbie }) => ({
          hobbies: [...hobbies, ...hobbie.split(",")],
          hobbie : ""
        }));
        
    }

    handleCourseChange = ({target: { value }}) => {
        this.setState({
            course : value
        })
    }

    addCourses=(e)=>{
        e.preventDefault();
        this.setState(({ courses, course }) => ({
          courses : [...courses, ...course.split(",")],
          course : ""
        }));
        
    }

    handleCollegeChange = ({target: { value }}) => {
        this.setState({
            college: value
        })
    }

    addColleges=(e)=>{
        e.preventDefault();
        this.setState(({ colleges, college }) => ({
          colleges : [...colleges, ...college.split(",")],
          college : ""
        }));
        
    }

    handleYearChange = ({target: { value }}) => {
        this.setState({
            year: value
        })
    }

    addYears=(e)=>{
        e.preventDefault();
        this.setState(({ years, year }) => ({
          years : [...years, ...year.split(",")],
          year : ""
        }));
        
    }

    handleStreamChange = ({target: { value }}) => {
        this.setState({
            stream: value
        })
    }

    addStreams=(e)=>{
        e.preventDefault();
        this.setState(({ streams, stream }) => ({
            streams : [...streams, ...stream.split(",")],
            stream : ""
        }));
        
    }

    handlePlaceChange = ({target: { value }}) => {
        this.setState({
            place: value
        })
    }

    addPlaces=(e)=>{
        e.preventDefault();
        this.setState(({ places, place }) => ({
            places : [...places, ...place.split(",")],
            place : ""
        }));
        
    }

    handleProjectNameChange = ({target: { value }}) => {
        this.setState({
            projectname: value
        })
    }

    addProjects=(e)=>{
        e.preventDefault();
        this.setState(({ projects, projectname }) => ({
            projects : [...projects, ...projectname.split(",")],
            projectname : ""
        }));
        
    }

    handleDescChange = ({target: { value }}) => {
        this.setState({
            description: value
        })
    }

    addDesc=(e)=>{
        e.preventDefault();
        this.setState(({ desc, description }) => ({
            desc : [...desc, ...description.split(",")],
            description : ""
        }));
        
    }

    handleOrganiChange = ({target: { value }}) => {
        this.setState({
            organisation : value
        })
    }

    addOrganis=(e)=>{
        e.preventDefault();
        this.setState(({ organisations, organisation }) => ({
            organisations : [...organisations, ...organisation.split(",")],
            organisation : ""
        }));
        
    }

    handleCertiChange = ({target: { value }}) => {
        this.setState({
            certi: value
        })
    }

    addCertis=(e)=>{
        e.preventDefault();
        this.setState(({ certis, certi }) => ({
            certis : [...certis, ...certi.split(",")],
            certi : ""
        }));
        
    }

    handleAchieveChange = ({target: { value }}) => {
        this.setState({
            achieve:value
        })
    }

    addAchieves=(e)=>{
        e.preventDefault();
        this.setState(({ achieves, achieve }) => ({
            achieves : [...achieves, ...achieve.split(",")],
            achieve : ""
        }));
        
    }

    handleSubmit = (event) => {
        if (this.state.firstname === "" || this.state.lastname === "" || this.state.email === "") {
            // ||this.state.address === "" || this.state.linkedin === ""  || this.state.github === ""  || 
            //  this.state.hobbies === ""  || this.state.skills === ""  || this.state.languages === ""  ){
            alert("All the fields are mandatory")
        } else {
            // alert('A name was submitted: ' + this.state.skills.join(''));
            axios.post("http://localhost:8090/post", this.state)
            
        }


    }


    render() {
        const { firstname, lastname, email, number, address, linkedin,
            github, hobbies, skills, languages, course, college, year,
            projectname, description, organisations, certi, achieve,
            stream, place } = this.state
        return (
            <form style={{textAlign : 'center'}} onSubmit={this.handleSubmit}>
               <u><h3>Personal Details</h3></u> 

                <div>
                    <h5>FirstName</h5>
                    <input type="text"
                        value={firstname}
                        onChange={this.handleFnameChange}
                    ></input>
                </div>

                <div>
                    <h5>LastName</h5>
                    <input type="text"
                        value={lastname}
                        onChange={this.handleLnameChange} ></input>
                </div>

                <div>
                    <h5>Email</h5>
                    <input type="email"
                        value={email}
                        onChange={this.handleEmailChange}></input>
                </div>

                <div>
                    <h5>Mobile Number</h5>
                    <input type="number"
                        value={number}
                        onChange={this.handleNumberChange}></input>
                </div>

                <div>
                    <h5>Address</h5>
                    <textarea
                        value={address}
                        onChange={this.handleAddressChange}></textarea>
                </div>

                <div>
                    <h5>LinkedIn</h5>
                    <input type="url"
                        value={linkedin}
                        onChange={this.handleLinkedinChange}></input>
                </div>

                <div>
                    <h5>Github</h5>
                    <input type="url"
                        value={github}
                        onChange={this.handleGithubChange}></input>
                </div>

                <div>
                    <h5>Hobbies</h5>
                    <input type="text"
                        value={this.state.hobbie}
                        onChange={this.handleHobbiesChange}
                        required={!this.state.hobbies.length}></input>
                        <button type='button' onClick={this.addHobbies}>Add Hobbies</button>

                        
                </div>
                
                <div>
                    <h5>Skills</h5>
                    <input type="text"
                        value={this.state.skill}
                        onChange={this.handleSkillsChange}
                        required={!this.state.skills.length}></input>
                    <button type='button' onClick={this.addSkill}>Add Skill</button>
                </div>

                <div>
                    <h5>Languages</h5>
                    <input type="text"
                        value={this.state.language}
                        onChange={this.handleLanguagesChange}
                        required={!this.state.languages.length}></input>
                        <button type='button' onClick={this.addLanguage}>Add Language</button>
                </div>

                <u><h3>Education</h3></u>

                <div>
                    <h5>Course</h5>
                    <input type="text"
                        value={this.state.course}
                        onChange={this.handleCourseChange}
                        required={!this.state.courses.length}></input>
                        <button type='button' onClick={this.addCourses}>Add Course</button>
                </div>

                <div>
                    <h5>College</h5>
                    <input type="text"
                        value={this.state.college}
                        onChange={this.handleCollegeChange}
                        required={!this.state.colleges.length}></input>
                        <button type='button' onClick={this.addColleges}>Add College</button>
                </div>

                <div>
                    <h5>Stream</h5>
                    <input type="text"
                        value={this.state.stream}
                        onChange={this.handleStreamChange}
                        required={!this.state.streams.length}></input>
                        <button type='button' onClick={this.addStreams}>Add Stream</button>
                </div>

                <div>
                    <u><h5>Year</h5></u>
                    <input type="text"
                        value={this.state.year}
                        onChange={this.handleYearChange}
                        required={!this.state.years.length}></input>
                        <button type='button' onClick={this.addYears}>Add Year</button>
                </div>

                <div>
                    <h5>Place</h5>
                    <input type="text"
                        value={this.state.place}
                        onChange={this.handlePlaceChange}
                        required={!this.state.places.length}></input>
                        <button type='button' onClick={this.addPlaces}>Add Year</button>
                </div>

                <u><h3>Projects</h3></u>

                <div>
                    <h5>Project Name</h5>
                    <input type="text"
                        value={this.state.projectname}
                        onChange={this.handleProjectNameChange}
                        required={!this.state.projects.length}></input>
                        <button type='button' onClick={this.addProjects}>Add Project</button>
                </div>

                <div>
                    <h5>Description</h5>
                    <input type="text"
                        value={this.state.description}
                        onChange={this.handleDescChange}
                        required={!this.state.desc.length}></input>
                        <button type='button' onClick={this.addDesc}>Add Description</button>
                </div>

                <u><h3>Organizations</h3></u>

                <div>
                    
                    <input type="text"
                        value={this.state.organisation}
                        onChange={this.handleOrganiChange}
                        required={!this.state.organisations.length}></input>
                        <button type='button' onClick={this.addOrganis}>Add Organisation</button>
                        
                </div>

                <u><h3>Certifications</h3></u>

                <div>
                    
                    <input type="text"
                        value={this.state.certi}
                        onChange={this.handleCertiChange}
                        required={!this.state.certis.length}></input>
                        <button type='button' onClick={this.addCertis}>Add Certfication</button>
                </div>

                <u><h3>Achievements</h3></u>

                <div>
                    
                    <input type="text"
                        value={achieve}
                        onChange={this.handleAchieveChange}
                        required={!this.state.achieves.length}></input>
                        <button type='button' onClick={this.addAchieves}>Add Achievement</button>
                </div>

                <Link to= "/resume">
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </Link>
            </form>
        )
    }
}

export default Form