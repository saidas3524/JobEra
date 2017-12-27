import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../../node_modules/moment/min/moment.min.js';
import '../../node_modules/bootstrap/js/collapse.js';
import '../../node_modules/bootstrap/js/transition.js';
import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import './datepicker.js';


export class PersonalInfoSection extends Component {
    constructor(props) {
        super(props);
       
    }

    handleChange=(event)=>{

        this.props.handleChange(event);

    }
    render() {
        var personalInfo = {...this.props};


        return (
            <div>

                <div className="card-effect card-center makeInner animated fadeInDown">
                    <div className="profileCard text-center"><i className="fa fa-user-circle userImg "></i></div>
                    <div className="infoSection">
                        <div className="row">
                            <form method="post" action="#">

                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="name" className=" control-label">First Name</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="firstName" id="name" onChange={this.handleChange} value={personalInfo.firstName} placeholder="First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="email" className=" control-label">LastName</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="lastName" id="lastName"onChange={this.handleChange} value={personalInfo.lastName} placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="dob" className=" control-label">DOB</label>
                                        <div className="input-group date" id="dobDatePicker">
                                            <span className="input-group-addon"><i className="fa fa-calendar " aria-hidden="true"></i></span>
                                            <input type='text' className="form-control" name="dob" id="dob" onChange={this.handleChange} placeholder="Date of birth" value={personalInfo.dob} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="email" className=" control-label">Gender</label>
                                        <div className="input-group date" id="dobDatePicker">
                                            <span className="input-group-addon"><i className="fa fa-venus-mars" aria-hidden="true"></i></span>
                                            <select className="form-control" id="exampleFormControlSelect1" name="gender" onChange={this.handleChange} value={personalInfo.gender}>
                                                <option disabled selected value>Select gender</option>
                                                <option value="M">Male</option>
                                                <option vlaue="S">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="email" className=" control-label">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="email" id="email" onChange={this.handleChange} value={personalInfo.email} placeholder="Email address" />
                                        </div>
                                    </div>
                                </div> 
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="phone" className=" control-label">Mobile</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-phone fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="mobile" id="mobile" onChange={this.handleChange} value={personalInfo.mobile} placeholder="Mobile Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <label htmlFor="address">Description</label>
                                        <textarea className="form-control" maxLength="256" name="description" id="description" rows="3" value={personalInfo.description}></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <label htmlFor="address">Address</label>
                                        <textarea className="form-control" name="address" id="address" rows="3" onChange={this.handleChange} value={personalInfo.description}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default PersonalInfoSection
