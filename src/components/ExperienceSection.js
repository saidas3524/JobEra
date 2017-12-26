import React from 'react'
import { CommonSectionCard } from "../components";
import { sections } from "../services";

export const ExperienceSection = () => {
  return (
    <div>
      <CommonSectionCard sectionDetails={sections.Experience}>
        <div className="sectionData">ExperienceSection</div>
      </CommonSectionCard>
    </div>
  )
}

export default ExperienceSection
