import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import  PersonalInfoSection  from "../components/PersonalInfoSection";
import { EducationSection,ExperienceSection,SkillsSection } from "../components";

import './AddProfile.css';

export class AddProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      educations:[{

        institute: "Top",
        fromYear: "2015",
        toYear: "2017",
        degree: "BE",
        branch: "CSE",
        grade: "99%"
      
      },
      {
        institute: "Top",
        fromYear: "2015",
        toYear: "2017",
        degree: "BE",
        branch: "CSE",
        grade: "99%"
      }
        
      ],
      experiences:[{
        title: "SE",
        company: "Microasof",
        location: "redminf",
        fromYear: "2017",
        toYear: "2019",
      },{
        title: "SE",
        company: "Microasof",
        location: "redminf",
        fromYear: "2017",
        toYear: "2019",
      }],
      skills:[{
        Name:"skill1"
      },{
        Name:"skill2"
      }]
    }
  }

  render() {
    const {educations} = this.state;
    const { experiences} = this.state;
    const {skills} = this.state;
    return (
      <div>
        <PersonalInfoSection />
        <EducationSection educations={educations}/>
        <ExperienceSection experiences={experiences}/>
        <SkillsSection skills={skills}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps =(dispatch)=> {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile)
