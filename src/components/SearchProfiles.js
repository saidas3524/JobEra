import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfiles } from '../actions';
import { profilesSelector } from '../selectors';
import { Profile } from "../components";
import "./searchProfile.css";
import { arrayFilter } from '../utility';


class SearchProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      filteredProfiles: props.profiles
    }
    this.filterSearchresults = this.filterSearchresults.bind(this);
  }
  componentWillMount() {
    this.props.getAllProfiles();
  }
  componentWillReceiveProps (nextProps) {
    this.state.filteredProfiles = nextProps.profiles;
 }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    if(name ==="filter"){
      this.filterSearchresults(value);
    }
  }
  filterSearchresults=(value)=>{
    let fieldsToSearch = ["firstName","lastName","title","description"];
    var filteredResults = arrayFilter(this.props.profiles,fieldsToSearch,value);
    this.setState({
      filteredProfiles: filteredResults
    })
  }
  render() {
    const { filteredProfiles } = this.state;
    const { filter } = this.state;
    return (
      <div>

        <div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="col-lg-12">
                <div className="row pt-md">
                  <form>
                    <div className="form-group">
                      <div className="row">
                        <div className="input-group">
                          <span className="input-group-addon"><i className="fa fa-filter fa" aria-hidden="true"></i></span>
                          <input type="text" className="form-control" onChange={this.handleChange} name="filter" id="filter" value={filter} placeholder="Filter by Name or Title Or Description" />
                        </div>
                      </div>
                    </div>
                  </form>
                  {filteredProfiles && filteredProfiles.length ==0 && <div> Sorry! No Profiles to show</div>}
                  {filteredProfiles && filteredProfiles.length >0 && filteredProfiles.map((profile) => { return <Profile profile={profile} /> })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




var mapStateToProps = (state) => {

  var profiles = profilesSelector(state);
  profiles = profiles ? profiles.toJS() : profiles;
  return {
    profiles: profiles
  }
}

var mapDispatchToProps = (dispatch) => ({
  getAllProfiles() {
    dispatch(getProfiles());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchProfiles);