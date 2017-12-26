import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";


export class SkillModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skillDetails: {
                Name: ""
            }
        }
        this.close = this.close.bind(this);
    }

    close = () => {

        this.props.close();
    }
    AddClose = () => {
        this.props.onAdd(this.state.skillDetails);

    }

    render() {

        const { sectionDetails } = this.props;
        const { skillDetails } = this.state;
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
                                    <label htmlFor="name" className=" control-label">Skill </label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-university fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="skill" id="skill" value={skillDetails.skill} placeholder="Ex: Data Science" />
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
