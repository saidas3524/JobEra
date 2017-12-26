import React, { Component } from 'react';
import { EducationModal, ExperienceModal, SkillModal } from "../components";
import { sections } from "../services";


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
        this.close();
    }


    render() {

        const { sectionDetails } = this.props;
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
                {sectionDetails.code === sections.Education.code &&
                    <EducationModal show={this.state.showDialog} onAdd={this.AddValuetoSection} sectionDetails={sectionDetails} close={this.close} />}

                {sectionDetails.code === sections.Experience.code &&
                    <ExperienceModal show={this.state.showDialog} onAdd={this.AddValuetoSection} sectionDetails={sectionDetails} close={this.close} />}

                {sectionDetails.code === sections.Skills.code &&
                    <SkillModal show={this.state.showDialog} onAdd={this.AddValuetoSection} sectionDetails={sectionDetails} close={this.close} />}
            </div>

        );
    }
}

export default CommonSectionCard;