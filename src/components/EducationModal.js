import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";
import '../../node_modules/moment/min/moment.min.js';
import '../../node_modules/bootstrap/js/collapse.js';
import '../../node_modules/bootstrap/js/transition.js';
import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import './datepicker.js';

export class EducationModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
                institute: "",
                fromYear: "",
                toYear: "",
                degree: "",
                branch: "",
                grade: ""
        }
        this.close = this.close.bind(this);
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
   
    close = () => {
      
        this.props.close();
    }
    AddClose=()=>{
        this.props.onAdd({
            ...this.state
        });
        
    }

    addEvents=()=>{
        $(function () {
            $('#toYearEDM').datetimepicker({
                viewMode: 'years',
                format: 'DD/MM/YYYY'
            });
        });
        
        $(function () {
            $('#fromYearEDM').datetimepicker({
                viewMode: 'years',
                format: 'DD/MM/YYYY'
            });
        });
    }
    
    render() {
        
        const { sectionDetails } = this.props;
        
        const { show } = this.props;
        return (
            <Modal onEntered={this.addEvents}   show={show} onHide={this.close}  backdrop={'static'}>
                <Modal.Header closeButton>
                    <Modal.Title>Add {sectionDetails.title} Section</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <form method="post" action="#">
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Institute</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-university fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="institute" id="institute"  onChange={this.handleChange} value={this.state.institute} placeholder="University" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Degree</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-graduation-cap fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="degree" id="degree" onChange={this.handleChange} value={this.state.degree} placeholder="Ex: Bachelor of engineering" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Field of study</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-book fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="branch" id="branch" onChange={this.handleChange} value={this.state.branch} placeholder="Ex: Computer Science and Engineering" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                             <div className="col-sm-6">
                                <label htmlFor="name" className=" control-label">Grade</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-line-chart fa" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" name="grade" id="grade" onChange={this.handleChange} value={this.state.grade} placeholder="Grade" />
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">From Year</label>
                                    <div className="input-group date" id="fromYearEDM"> 
                                        <span className="input-group-addon"><i className="fa fa-calendar-minus-o fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="fromYear" id="fromYear" onChange={this.handleChange} value={this.state.fromYear} placeholder="From Year" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">To Year</label>
                                    <div className="input-group date" id="toYearEDM">
                                        <span className="input-group-addon"><i className="fa fa-calendar-plus-o fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="toYear" id="toYear" onChange={this.handleChange} value={this.state.toYear} placeholder="Completion Year" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.AddClose}>Add</Button>
                    <Button onClick={this.close}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
