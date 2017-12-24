import React from 'react'

export const Actions = ({actionClicked}) => {
    return (
        <div className="row cardContainer" >
            <div className="col-sm-5 actionCard2 main-login animated fadeInLeft text-center" onClick={()=>actionClicked("search")}>
                <span className="fa-stack actionIcon">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-search fa-stack-1x fa-inverse"></i> </span>
                <h4 className="text-weight-strong">
                    Search Existing Profiles
              </h4>
                
            </div>

            <div className=" col-sm-offset-2 col-sm-5  main-login actionCard2  animated fadeInRight  text-center" onClick={()=>actionClicked("addnew")}>
                <span className="fa-stack actionIcon">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="text-weight-strong">
                    Create New Profile
              </h4>
            </div>

        </div>)
}

export default Actions
