import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";
import '../../node_modules/moment/min/moment.min.js';
import '../../node_modules/bootstrap/js/collapse.js';
import '../../node_modules/bootstrap/js/transition.js';
import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import './datepicker.js';

export class ExperienceModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
                title: "",
                company: "",
                location: "",
                fromYear: "",
                toYear: "",
                
            
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
    addEvents = ()=>{
        $(function () {
            $('#toYearEM').datetimepicker({
                viewMode: 'years',
                format: 'DD/MM/YYYY'
            });
        });
        
        $(function () {
            $('#fromYearEM').datetimepicker({
                viewMode: 'years',
                format: 'DD/MM/YYYY'
            });
        });
    }
    
    render() {
        
        const { sectionDetails } = this.props;
      
        const { show } = this.props;
        return (
            <Modal  onEntered={this.addEvents}  show={show} onHide={this.close}  backdrop={'static'}>
                <Modal.Header closeButton>
                    <Modal.Title>Add {sectionDetails.title} Section</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <form method="post" action="#">
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Title</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-address-card fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="title" id="title" onChange={this.handleChange} value={this.state.title} placeholder="Title" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Company</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-building fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="company" id="company" onChange={this.handleChange} value={this.state.company} placeholder="Ex: Microsoft" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Location</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-globe fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="location" id="location" onChange={this.handleChange} value={this.state.location} placeholder="Location" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">From Year</label>
                                    <div className="input-group date" id="fromYearEM">
                                        <span className="input-group-addon"><i className="fa fa-calendar-minus-o fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="fromYear" id="fromYear" onChange={this.handleChange} value={this.state.fromYear} placeholder="From Year" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">To Year</label>
                                    <div className="input-group date" id="toYearEM">
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
