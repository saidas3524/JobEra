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
        this.state = {
            info: {
                firstName: "",
                lastName: "",
                dob: ""
            }
        }
    }
    render() {
        const { info } = this.state;



        return (
            <div>

                <div class="card-effect card-center">
                    <div className="profileCard text-center"><i className="fa fa-user-circle userImg "></i></div>
                    <div class="infoSection">
                        <div class="row">
                            <form method="post" action="#">

                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="name" className=" control-label">First Name</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="firstName" id="name" value={info.firstName} placeholder="First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="email" className=" control-label">LastName</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="lastName" id="lastName" value={info.lastName} placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="email" className=" control-label">DOB</label>
                                        <div className="input-group date" id="dobDatePicker">
                                            <span className="input-group-addon"><i className="fa fa-calendar " aria-hidden="true"></i></span>
                                            <input type='text' class="form-control" name="dob" id="dob" placeholder="Date of birth" value={info.dob} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="email" className=" control-label">Gender</label>
                                        <div className="input-group date" id="dobDatePicker">
                                            <span className="input-group-addon"><i className="fa fa-venus-mars" aria-hidden="true"></i></span>
                                            <select class="form-control" id="exampleFormControlSelect1">
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
                                            <input type="text" className="form-control" name="email" id="email" value={info.email} placeholder="Email address" />
                                        </div>
                                    </div>
                                </div> <div className="form-group">

                                    <div className="col-sm-6">
                                        <label htmlFor="phone" className=" control-label">Mobile</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-phone fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="phone" id="phone" value={info.phone} placeholder="Mobile Number" />
                                        </div>
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoSection)
