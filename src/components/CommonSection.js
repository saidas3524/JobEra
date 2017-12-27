import React from 'react'
import { CommonSectionCard, Experience,Education,Skill } from "../components";
import { sections,sectionTypes } from "../services";


export const CommonSection = ({ type, values,onAdd }) => {
  return (
    <div>
      <CommonSectionCard type={type} onAdd = {(value)=> onAdd(type,value) }>
        <div className="sectionData">
          {values && values.map((value,index) => {
            return (
            <div>

              {type === sectionTypes.Experience && <Experience key={index} experience={value} />}
              
              {type=== sectionTypes.Education && <Education key={index} education={value} />}


              {type === sectionTypes.Skills && <Skill key={index} skill={value} />}
              <hr />
            </div>)
          })}
        </div>
      </CommonSectionCard>
    </div>
  )
}