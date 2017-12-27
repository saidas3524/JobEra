import React from 'react'

export const Education = ({education}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-university fa-4x "></i></div>
            </div>
            <div className='col-xs-10'>
                <div className="row">{education.institute}</div>
                <div className="row">{`${education.degree}, ${education.branch}`} </div>
                <div className="row">{`${education.fromYear}-${education.toYear}`}</div>
            </div>
        </div>
    )
}

export default Education
