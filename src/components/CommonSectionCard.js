import React, { Component } from 'react';
import { EducationModal, ExperienceModal, SkillModal } from "../components";
import { sections,sectionTypes } from "../services";


export class CommonSectionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false

        }
        this.close.bind(this);
    }


    onAddClick = (event) => {
        this.setState({
            showDialog: true
        })
    }
    close = () => {
        this.setState({
            showDialog: false
        })

    }
    AddValuetoSection = (value) => {
        console.log(value);
        this.props.onAdd(value);
        this.close();
    }


    render() {

        const { type } = this.props;
        let sectionDetails = sections.filter(function (section) { return section.code == type })[0];
        const { children } = this.props;
        return (
            <div>
                <div className="addProfileSection">
                    <div className="card-effect sectionCard card-center animated fadeInLeft">
                        <div className="row">
                            <div className="col-xs-10 col-sm-6 sectionHeading">
                                <p>{sectionDetails && sectionDetails.title}</p>
                            </div>
                            <div className="col-xs-2 col-sm-1 text-center pull-right" onClick={this.onAddClick}>
                                <span><i className="fa fa-plus"></i></span>
                            </div>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
                {type === sectionTypes.Education &&
                    <EducationModal show={this.state.showDialog} onAdd={this.AddValuetoSection} sectionDetails={sectionDetails} close={this.close} />}

                {type === sectionTypes.Experience &&
                    <ExperienceModal show={this.state.showDialog} onAdd={this.AddValuetoSection} sectionDetails={sectionDetails} close={this.close} />}

                {type === sectionTypes.Skills &&
                    <SkillModal show={this.state.showDialog} onAdd={this.AddValuetoSection} sectionDetails={sectionDetails} close={this.close} />}
            </div>

        );
    }
}

export default CommonSectionCard;