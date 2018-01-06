import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getProfileById } from "../actions";
import { profileSelector } from '../selectors/profileSelector';import  PersonalInfoSection  from './PersonalInfoSection';
import  {CommonSection}  from './CommonSection';
import { ProfileModes } from '../services/ConstantManager';


export class ViewProfile extends Component {
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
    
  }
  componentDidMount(){
    this.props.getProfileData(this.id);
  }
  render() {
    const {profile} = this.props;
    const {mode} = this.props;

    if(!profile) return (<div></div>);

    const { sections, ...personalInfo} = profile;
    return (
      <div style={{margin:"30px 0px"}}>
      
      <form>
        <PersonalInfoSection  {...personalInfo} mode = {this.props.mode} />

        {sections && sections.map((section, index) => { return <CommonSection type={section.code} mode ={mode} key={index} values={section.values} /> })}
        <div className="text-center card-center" style={{marginTop:"30px"}}>
          <div className="form-group">
           {mode != ProfileModes.VIEW &&  <button type="button" className="btn btn-primary btn-lg btn-block login-button">
              Save Changes
            </button>}
          </div>

        </div>
      </form>
    </div>
    )    
  }
}


const mapStateToProps = (state) =>{
  var profile = profileSelector(state);
  profile = profile? profile.toJS() : profile;
  return {
    profile:profile
  }
}

const mapDispatchToProps = (dispatch)=>({

  getProfileData(id){
    dispatch(getProfileById(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)
