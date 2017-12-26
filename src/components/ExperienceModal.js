import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";


export class ExperienceModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            experienceDetails: {
                title: "",
                company: "",
                location: "",
                fromYear: "",
                toYear: "",
                
            }
        }
        this.close = this.close.bind(this);
    }
   
    close = () => {
      
        this.props.close();
    }
    AddClose=()=>{
        this.props.onAdd(this.state.experienceDetails);
        
    }
    
    render() {
        
        const { sectionDetails } = this.props;
        const { experienceDetails } = this.state;
        const { show } = this.props;
        return (
            <Modal  show={show} onHide={this.close}  backdrop={'static'}>
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
                                        <input type="text" className="form-control" name="title" id="title" value={experienceDetails.title} placeholder="University" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Company</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-building fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="company" id="company" value={experienceDetails.company} placeholder="Ex: Bachelor of engineering" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">Location</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-globe fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="location" id="location" value={experienceDetails.location} placeholder="Ex: Computer Science and Engineering" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">From Year</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-calendar-minus-o fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="fromYear" id="fromYear" value={experienceDetails.fromYear} placeholder="From Year" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">To Year</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-calendar-plus-o fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="toYear" id="toYear" value={experienceDetails.toYear} placeholder="Completion Year" />
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
