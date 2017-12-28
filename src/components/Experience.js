import React from 'react'

export const Experience = ({experience}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-briefcase fa-4x "></i></div>
            </div>
            <div className='col-xs-10'>
                <div className="row">{experience.title}</div>
                <div className="row">{`${experience.company}, ${experience.location}`} </div>
                <div className="row">{`${experience.fromYear}-${experience.toYear}`}</div>
            </div>
        </div>
    )
}

export default Experience
