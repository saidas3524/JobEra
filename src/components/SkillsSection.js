import React from 'react';
import { CommonSectionCard,Skill } from "../components";
import { sections } from "../services";

export const SkillsSection = ({ skills }) => {
  return (
    <div>
      <CommonSectionCard sectionDetails={sections.Skills}>
        <div className="sectionData">
          {skills && skills.map((skill) => { return <Skill skill={skill} /> })}
        </div>
      </CommonSectionCard>
    </div>
  )
}

export default SkillsSection
