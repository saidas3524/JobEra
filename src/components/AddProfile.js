import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import PersonalInfoSection from "../components/PersonalInfoSection";
import { EducationSection, ExperienceSection, SkillsSection } from "../components";

import './AddProfile.css';
import { CommonSection } from '../components';

export class AddProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          code: "edu",
          values: [],
        },
        {
          code: "exp",
          values: [],
        },
        {
          code: "skill",
          values: []
        }
      ]

    }
  }

  onAdd = (type,value)=>{

    var sections = this.state.sections;
    sections.forEach((section)=>{
      if(section.code === type){
        section.values.push(value);
      }
    })
    this.setState({
      sections : sections
    })
  }

  render() {
    const { sections } = this.state;
    return (
      <div>
        <PersonalInfoSection />

       { sections && sections.map((section,index)=> {return <CommonSection type={section.code} key={index} values={section.values} onAdd={this.onAdd}/>})}
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}



export default connect(mapStateToProps, null)(AddProfile)
