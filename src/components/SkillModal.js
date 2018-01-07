import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";
import { sections, sectionTypes, ModalActions } from '../services/ConstantManager';


export class SkillModal extends Component {

    constructor(props) {
        super(props);

        if(props.action ===  ModalActions.ADD)
        {
            this.state = {
                skill: ""
            }
        }
        else{
            this.state = { ...props.value }
        }

        this.close = this.close.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.action === ModalActions.EDIT && nextProps.value)
            this.state = { ...nextProps.value }
        else {
            this.state = {
                skill: ""
            }
        }
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
            skill: ""
        })
    }
    AddClose = () => {
        this.props.onAdd(this.props.index, {
            ...this.state
        });
        this.setState({
            skill: ""
        })

    }

    render() {

        var sectionDetails = sections.filter(function (section) { return section.code == sectionTypes.Skills })[0];
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
                                        <span className="input-group-addon"><i className="fa fa-star fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={this.handleChange} name="skill" id="skill" value={this.state.skill} placeholder="Ex: Data Science" />
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
