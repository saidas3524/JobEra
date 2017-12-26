import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import  PersonalInfoSection  from "../components/PersonalInfoSection";
import { EducationSection,ExperienceSection,SkillsSection } from "../components";

import './AddProfile.css';

export class AddProfile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <PersonalInfoSection/>
        <EducationSection/>
        <ExperienceSection/>
        <SkillsSection/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps =(dispatch)=> {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile)
