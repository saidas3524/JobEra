import React from 'react';
import { ProfileModes as modes } from "../services";

export const Skill = ({ skill ,mode,editClicked}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-star fa-2x "></i></div>

            </div>
            <div className="col-xs-9">
                <p>{skill.skill}</p>
            </div>
          {mode  && mode!=modes.VIEW &&  <div className="col-xs-1">
                <div className="profileCard"><i className="fa fa-pencil fa-2x "></i></div>
            </div>}
        </div>
    )
}

export default Skill
 