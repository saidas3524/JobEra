import React from 'react';


export const Profile = (props) => {
    const{profile} = props;
    return (
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile animated fadeInLeft">
            <div className="img-box main-login ">
            <ul className="text-center">
                    <a href="#"><span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-eye fa-stack-1x fa-inverse"></i>
                    </span></a>
                    <a href="#"><span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span></a>
                    <a href="#"><span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span></a>

                    {/* <a href="#"><li><i className="fa fw-2x fa-pencil"></i></li></a> */}
                    {/* <a href="#"><li><i className="fa fa-2x fa-trash-o"></i></li></a> */}
                </ul>
                <div className="profileContent">
                    <div className="profileCard text-center"><i className="fa fa-user-circle fa-5x "></i></div>


                    <h1>{`${profile.firstName} ${profile.lastName}`}</h1>
                    <h2>{`${profile.title}`}</h2>
                    <p>{profile.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Profile
