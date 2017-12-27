import React from 'react'
import { CommonSectionCard } from './CommonSectionCard';

import { Education } from "../components";

import { sections } from "../services";

export const EducationSection = ({educations}) => {
  return (
    <div>
      <CommonSectionCard sectionDetails={sections.Education}>
        <div className="sectionData">
         {educations && educations.map((education)=>{return <div><Education education={education}/><hr/></div>})}
        </div>
      </CommonSectionCard>
    </div>
  )
}

