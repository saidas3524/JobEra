import React from 'react';
import { CommonSectionCard } from "../components";
import { sections } from "../services";

export const SkillsSection = () => {
  return (
    <div>
        <CommonSectionCard sectionDetails={sections.Skills}>
          <div className="sectionData">Skills</div>
        </CommonSectionCard>
    </div>
  )
}

export default SkillsSection
