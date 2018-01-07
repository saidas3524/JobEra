import React, { Component } from 'react';
import { sections, sectionTypes } from "../services";
import { ProfileModes } from '../services/ConstantManager';


export class CommonSectionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false

        }
    }


    onAddClick = (event) => {
        this.props.onAddClick();
    }


    render() {

        const { type } = this.props;
        let sectionDetails = sections.filter(function (section) { return section.code == type })[0];
        const { children } = this.props;
        const { mode } = this.props;
        return (
            <div>
                <div className="addProfileSection">
                    <div className="card-effect sectionCard card-center animated fadeInLeft">
                        <div className="row">
                            <div className="col-xs-10 col-sm-6 sectionHeading">
                                <p>{sectionDetails && sectionDetails.title}</p>
                            </div>
                            {mode != ProfileModes.VIEW && <div className="col-xs-2 col-sm-1 text-center pull-right" onClick={this.onAddClick}>
                                <span><i className="fa fa-plus"></i></span>
                            </div>}
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CommonSectionCard;