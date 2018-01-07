import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";
import { sections, sectionTypes, ModalActions } from '../services/ConstantManager';
var DateTime = require('react-datetime');


export class ExperienceModal extends Component {

    constructor(props) {
        super(props);
        if (props.action === ModalActions.ADD) {

            this.state = {

                title: "",
                company: "",
                location: "",
                fromYear: "",
                toYear: "",


            }
        }
        else {
            this.state = { ...props.value }
        }
        this.close = this.close.bind(this);
    }

    fromYearChanged = (event) => {
        this.handleChange({
            target: {
                name: "fromYear",
                value: event._d
            }
        })
    }


    toYearChanged = (event) => {
        this.handleChange({
            target: {
                name: "toYear",
                value: event._d
            }
        })
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
        this.setState({

            title: "",
            company: "",
            location: "",
            fromYear: "",
            toYear: ""
        });
    }
    AddClose = () => {
        this.props.onAdd(this.props.index, {
            ...this.state
        });
        this.setState({

            title: "",
            company: "",
            location: "",
            fromYear: "",
            toYear: "",
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.action === ModalActions.EDIT && nextProps.value)
            this.state = { ...nextProps.value }
        else {
            this.state = {

                title: "",
                company: "",
                location: "",
                fromYear: "",
                toYear: "",
            }
        }
    }


    render() {

        var sectionDetails = sections.filter(function (section) { return section.code == sectionTypes.Experience })[0];

        const { show } = this.props;
        return (
            <Modal show={show} onHide={this.close} backdrop={'static'}>
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
                                        <DateTime timeFormat={false} dateFormat="YYYY" inputProps={{ placeholder: "From Year", name: "fromYear", className: "form-control" }} onChange={this.fromYearChanged} value={this.state.fromYear} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">To Year</label>
                                    <div className="input-group date" id="toYearEM">
                                        <span className="input-group-addon"><i className="fa fa-calendar-plus-o fa" aria-hidden="true"></i></span>
                                        <DateTime timeFormat={false} dateFormat="YYYY" inputProps={{ placeholder: "To Year", name: "toYear", className: "form-control" }} onChange={this.toYearChanged} value={this.state.toYear} />
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
