import React, { Component } from 'react'
import { CommonSectionCard, Experience, Education, Skill } from "../components";
import { sections, sectionTypes } from "../services";

export class CommonSection extends Component {
  render() {
    const { type, values, onAddClick,editClicked,deleteClicked, mode } = this.props;
    return (
      <div>
        <CommonSectionCard type={type} mode={mode}  onAddClick={() => onAddClick(type)}>
          <div className="sectionData">
            {values && values.map((value, index) => {
              return (
                <div>

                  {type === sectionTypes.Experience
                    && <Experience key={index} mode={mode} experience={value} deleteClicked = {()=>deleteClicked(sectionTypes.Experience,index,value)}  editClicked={() => editClicked(sectionTypes.Experience, index, value)} />}

                  {type === sectionTypes.Education
                    && <Education key={index} mode={mode} education={value} deleteClicked = {()=>deleteClicked(sectionTypes.Education,index,value)}  editClicked={() => editClicked(sectionTypes.Education, index, value)} />}


                  {type === sectionTypes.Skills
                    && <Skill key={index} skill={value} mode={mode} deleteClicked = {()=>deleteClicked(sectionTypes.Skills,index,value)}  editClicked={() => editClicked(sectionTypes.Skills, index, value)} />}
                  <hr />
                </div>)
            })}
          </div>
        </CommonSectionCard>
      </div>)
  }
}
