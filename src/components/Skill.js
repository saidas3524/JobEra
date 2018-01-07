import React from 'react';
import { ProfileModes as modes, sectionTypes } from "../services";

export const Skill = ({ skill ,mode,editClicked,deleteClicked}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-star fa-2x "></i></div>

            </div>
            <div className="col-xs-8">
                <p>{skill.skill}</p>
            </div>
          {mode  && mode!=modes.VIEW &&   <div>
            <div className="col-xs-1" onClick={() => editClicked()}>
                <div className="profileCard"><i className="fa fa-pencil fa-2x "></i></div></div>
                <div className="col-xs-1" onClick={() => deleteClicked()}>
                    <div className="profileCard"><i className="fa fa-trash-o fa-2x "></i></div>
                </div></div>}
        </div>
    )
}

export default Skill
 