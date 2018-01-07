import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";
import { sections, sectionTypes, ModalActions } from '../services/ConstantManager';
var DateTime = require('react-datetime');


export class EducationModal extends Component {

    constructor(props) {
        super(props);

        if(props.action ===  ModalActions.ADD)
        {
         
        this.state = {

            institute: "",
            fromYear: "",
            toYear: "",
            degree: "",
            branch: "",
            grade: ""
        }}
         else{
            this.state = { ...props.value }
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
        this.setState({
            institute: "",
            fromYear: "",
            toYear: "",
            degree: "",
            branch: "",
            grade: ""
        })
    }
    AddClose = () => {
        this.props.onAdd(this.props.index, {
            ...this.state
        });
        this.setState({
            institute: "",
            fromYear: "",
            toYear: "",
            degree: "",
            branch: "",
            grade: ""
        })

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.action === ModalActions.EDIT && nextProps.value)
            this.setState( { ...nextProps.value });
        else {
            this.setState({
                institute: "",
                fromYear: "",
                toYear: "",
                degree: "",
                branch: "",
                grade: ""
            });
        }
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



    render() {

        var sectionDetails = sections.filter(function (section) { return section.code == sectionTypes.Education })[0];
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
                                    <label htmlFor="name" className=" control-label">Institute</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-university fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="institute" id="institute" onChange={this.handleChange} value={this.state.institute} placeholder="University" />
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
                                        {/* <input type="text" className="form-control" name="fromYear" id="fromYear" onChange={this.handleChange} value={this.state.fromYear} placeholder="From Year" /> */}
                                        <DateTime timeFormat={false} dateFormat="YYYY" inputProps={{ placeholder: "From Year", name: "fromYear", className: "form-control" }} onChange={this.fromYearChanged} value={this.state.fromYear} />

                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <label htmlFor="name" className=" control-label">To Year</label>
                                    <div className="input-group date" id="toYearEDM">
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
