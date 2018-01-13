import React from 'react';
import { ProfileModes as modes } from "../services";
import { sectionTypes } from '../services/ConstantManager';
import YearDisplay from './YearDisplay';



export const Education = ({education,mode,editClicked,deleteClicked}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-university fa-4x "></i></div>
            </div>
            <div className='col-xs-8'>
                <div className="row">{education.institute}</div>
                <div className="row">{`${education.degree}, ${education.branch}`} </div>
                <div className="row"><YearDisplay date={education.fromYear}/>-<YearDisplay date = {education.toYear}/> </div>
            </div>
          {mode  && mode!=modes.VIEW &&  <div>
            <div className="col-xs-1" onClick={() => editClicked()}>
                <div className="profileCard"><i className="fa fa-pencil fa-2x "></i></div></div>
                <div className="col-xs-1" onClick={() => deleteClicked()}>
                    <div className="profileCard"><i className="fa fa-trash-o fa-2x "></i></div>
                </div></div>}
        </div>
    )
}

export default Education
