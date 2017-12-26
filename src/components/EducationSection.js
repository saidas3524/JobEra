import React from 'react'
import { CommonSectionCard } from './CommonSectionCard';

import { sections } from "../services";

export const EducationSection = () => {
  return (
    <div>
        <CommonSectionCard sectionDetails={sections.Education}>
          <div className="sectionData">Education data</div>
        </CommonSectionCard>
    </div>
  )
}

export default EducationSection
