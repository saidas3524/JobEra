import React from 'react'

export const Education = ({education}) => {
    return (
        <div className="row">
            <div className="col-xs-2">
                <div className="profileCard"><i className="fa fa-university fa-4x "></i></div>
            </div>
            <div className='col-xs-10'>
                <div className="row">University</div>
                <div className="row">Computer Science </div>
                <div className="row">2011-2015</div>
            </div>
        </div>
    )
}

export default Education
