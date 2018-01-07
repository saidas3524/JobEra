import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import PersonalInfoSection from "../components/PersonalInfoSection";
import { EducationSection, ExperienceSection, SkillsSection, EducationModal, ExperienceModal, SkillModal } from "../components";


import './AddProfile.css';
import { CommonSection } from '../components';
import { saveProfile } from "../actions";
import { sections as Sections } from "../services";
import { ProfileModes, ModalActions, sectionTypes } from '../services/ConstantManager';

export class AddProfile extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
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
      ],
      ModalProps: {
        type: "",
        action: "",
        show: false,
        

      }

    }
  }



  editClicked = (type,index,value)=>{
    var modal = this.state.ModalProps;
    modal.action = ModalActions.EDIT;
    modal.show = true;
    modal.type = type;
    modal.index = index;
    modal.value = value;
    this.setState({
      ModalProps: modal
    })

  }
  deleteClicked = (type,index,value)=>{

  }
  close = () => {
    var modal = this.state.ModalProps;
    modal.show = false;
    this.setState({
      ModalProps: modal
    })

  }


  onAdd = (index,value) => {
    const type = this.state.ModalProps.type;
    var sections = this.state.sections;
    sections.forEach((section) => {
      if (section.code === type) {
        if(!index && index != 0)
        section.values.push(value);
        else
          section.values[index] = value;
      }
    })
    this.setState({
      sections: sections
    })

    this.close();
  }

  onAddClick = (type) => {
    var modal = this.state.ModalProps;
    modal.action = ModalActions.ADD;
    modal.show = true;
    modal.index = undefined;
    modal.type = type;
    this.setState({
      ModalProps: modal
    })
  }

  SaveClicked = () => {

    var profile = { ...this.state };
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
    const { ModalProps } = this.state;
    return (
      <div style={{ margin: "30px 0px" }}>
        <form>
          <PersonalInfoSection
            {...this.state.personalInfo}
            mode={ProfileModes.CREATE}
            handleChange={this.handleChange} />

          {sections && sections.map((section, index) => {
            return <CommonSection
              type={section.code}
              key={index}
              values={section.values}
              mode={ProfileModes.CREATE}
              deleteClicked={this.deleteClicked}
              editClicked={this.editClicked}
              onAddClick={this.onAddClick} />
          })}
          <div className="text-center card-center" style={{ marginTop: "30px" }}>
            <div className="form-group">
              <button type="button" onClick={this.SaveClicked} className="btn btn-primary btn-lg btn-block login-button">
                Save Changes
              </button>
            </div>

          </div>
        </form>

        <div>
          {ModalProps.type === sectionTypes.Education &&
            <EducationModal show={ModalProps.show} action={ModalProps.action} index={ModalProps.index} onAdd={this.onAdd} value = {ModalProps.value} close={this.close} />}

          {ModalProps.type === sectionTypes.Experience &&
            <ExperienceModal show={ModalProps.show} action={ModalProps.action} index={ModalProps.index} onAdd={this.onAdd} value = {ModalProps.value} close={this.close} />}

          {ModalProps.type === sectionTypes.Skills &&
            <SkillModal show={ModalProps.show} action={ModalProps.action} index={ModalProps.index} onAdd={this.onAdd} value = {ModalProps.value} close={this.close} />}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => ({
  saveProfile(profile) {
    dispatch(saveProfile(profile));
  }

})





export default connect(mapStateToProps, mapDispatchToProps)(AddProfile)
