import React from 'react'
import { CommonSectionCard, Experience,Education,Skill } from "../components";
import { sections,sectionTypes } from "../services";


export const CommonSection = ({ type, values,onAdd,mode }) => {
  return (
    <div>
      <CommonSectionCard type={type} mode={mode} onAdd = {(value)=> onAdd(type,value) }>
        <div className="sectionData">
          {values && values.map((value,index) => {
            return (
            <div>

              {type === sectionTypes.Experience && <Experience key={index} mode={mode} experience={value} />}
              
              {type=== sectionTypes.Education && <Education key={index} mode={mode} education={value} />}


              {type === sectionTypes.Skills && <Skill key={index} skill={value} mode={mode}/>}
              <hr />
            </div>)
          })}
        </div>
      </CommonSectionCard>
    </div>
  )
}