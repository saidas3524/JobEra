import React from 'react';
import { ProfileModes as modes } from "../services";


export const Education = ({education,mode,editClicked}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-university fa-4x "></i></div>
            </div>
            <div className='col-xs-9'>
                <div className="row">{education.institute}</div>
                <div className="row">{`${education.degree}, ${education.branch}`} </div>
                <div className="row">{`${education.fromYear}-${education.toYear}`}</div>
            </div>
          {mode  && mode!=modes.VIEW && <div className="col-xs-1">
                <div className="profileCard"><i className="fa fa-pencil fa-2x "></i></div>
            </div>}
        </div>
    )
}

export default Education
