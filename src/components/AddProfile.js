import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import PersonalInfoSection from "../components/PersonalInfoSection";
import { EducationSection, ExperienceSection, SkillsSection } from "../components";

import './AddProfile.css';
import { CommonSection } from '../components';
import { saveProfile } from "../actions";
import { sections as Sections } from "../services";

export class AddProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        mobile: "",
        description: "",
        address: ""
      },
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

  onAdd = (type, value) => {

    var sections = this.state.sections;
    sections.forEach((section) => {
      if (section.code === type) {
        section.values.push(value);
      }
    })
    this.setState({
      sections: sections
    })
  }

  SaveClicked = ()=>{

    var profile = {...this.state};
    const {sections} = profile;

    sections.forEach((section)=>{
      var sectionApiTitle = Sections.filter(function(sec){
        return sec.code === section.code;
      })[0].apiTitle;

      profile[sectionApiTitle] = section.values;

    })
    delete profile.sections;
    this.props.saveProfile(profile);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    var personalInfotemp = this.state.personalInfo;
    personalInfotemp[name] = value;
    this.setState({
      personalInfo: personalInfotemp
    });
  }

  render() {
    const { sections } = this.state;
    return (
      <div style={{margin:"30px 0px"}}>
        <form>
          <PersonalInfoSection  {...this.state.personalInfo} handleChange={this.handleChange} />

          {sections && sections.map((section, index) => { return <CommonSection type={section.code} key={index} values={section.values} onAdd={this.onAdd} /> })}
          <div className="text-center card-center" style={{marginTop:"30px"}}>
            <div className="form-group">
              <button type="button" onClick={this.SaveClicked} className="btn btn-primary btn-lg btn-block login-button">
                Save Changes
              </button>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch)=>({
  saveProfile(profile){
    dispatch(saveProfile(profile));
  }

})





export default connect(mapStateToProps, mapDispatchToProps)(AddProfile)
