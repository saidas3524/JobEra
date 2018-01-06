import React from 'react';
import { ProfileModes as modes } from "../services";


export const Experience = ({experience,mode,editClicked}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-briefcase fa-4x "></i></div>
            </div>
            <div className='col-xs-9'>
                <div className="row">{experience.title}</div>
                <div className="row">{`${experience.company}, ${experience.location}`} </div>
                <div className="row">{`${experience.fromYear}-${experience.toYear}`}</div>
            </div>
            {mode  && mode!=modes.VIEW && <div className="col-xs-1">
                <div className="profileCard"><i className="fa fa-pencil fa-2x "></i></div>
            </div>}
        </div>
    )
}

export default Experience
